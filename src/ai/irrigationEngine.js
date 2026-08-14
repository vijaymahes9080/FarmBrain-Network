/**
 * FarmBrain Smart Irrigation & Evapotranspiration (ET0) Engine
 * Implements FAO-56 Penman-Monteith Equation & Rain Override Logic
 */

export function calculateET0(tempC, humidityPct, windSpeedMS = 2.0, solarRadMJ = 18.5) {
  // FAO-56 Simplified Penman-Monteith ET0 estimation in mm/day
  const delta = (4098 * (0.6108 * Math.exp((17.27 * tempC) / (tempC + 237.3)))) / Math.pow(tempC + 237.3, 2);
  const gamma = 0.066; // Psychrometric constant (kPa/°C)
  const es = 0.6108 * Math.exp((17.27 * tempC) / (tempC + 237.3));
  const ea = es * (humidityPct / 100);
  const vpd = es - ea;

  const et0 = ((0.408 * delta * solarRadMJ) + (gamma * (900 / (tempC + 273)) * windSpeedMS * vpd)) / (delta + gamma * (1 + 0.34 * windSpeedMS));
  return Math.max(1.0, parseFloat(et0.toFixed(2)));
}

/**
 * Calculates optimal irrigation duration and water requirements
 */
export function evaluateIrrigationDecision({ soilMoisturePct, tempC, humidityPct, rainProbabilityPct, cropKc = 1.15, areaAcres = 4.5 }) {
  const et0 = calculateET0(tempC, humidityPct);
  const cropET = et0 * cropKc; // Crop water demand in mm/day
  const targetMoisturePct = 45;

  // Rain probability override check
  if (rainProbabilityPct >= 70) {
    return {
      recommendation: "HOLD_IRRIGATION",
      decisionText: `Delay irrigation today. Expected rainfall (${rainProbabilityPct}%) will supply ${cropET.toFixed(1)}mm ET requirement.`,
      targetDurationMins: 0,
      waterLitresSaved: Math.round(cropET * 10 * areaAcres * 4046.86 / 100),
      reason: "HIGH_RAIN_FORECAST_OVERRIDE",
      pumpSignal: "OFF"
    };
  }

  if (soilMoisturePct < targetMoisturePct) {
    const deficitMm = (targetMoisturePct - soilMoisturePct) * 0.8;
    const durationMins = Math.round((deficitMm / 5.0) * 60); // Assuming 5mm/hr drip flow rate

    return {
      recommendation: "IRRIGATE_NOW",
      decisionText: `Irrigation recommended for ${durationMins} minutes to compensate for ${deficitMm.toFixed(1)}mm moisture deficit.`,
      targetDurationMins: durationMins,
      waterVolumeLitres: Math.round(deficitMm * areaAcres * 4046.86),
      reason: "SOIL_MOISTURE_BELOW_THRESHOLD",
      pumpSignal: "ON"
    };
  }

  return {
    recommendation: "OPTIMAL_MOISTURE",
    decisionText: `Soil moisture (${soilMoisturePct}%) is optimal for current growth stage. No action required.`,
    targetDurationMins: 0,
    waterVolumeLitres: 0,
    reason: "MOISTURE_WITHIN_TARGET_RANGE",
    pumpSignal: "OFF"
  };
}
