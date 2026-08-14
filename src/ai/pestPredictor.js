/**
 * FarmBrain Pest Risk & Insect Lifecycle Predictor
 * Based on Growing Degree Days (GDD) and Microclimate Humidity Accumulation
 */

export function calculateGDD(tempMax, tempMin, baseTempC = 10) {
  const avgTemp = (tempMax + tempMin) / 2;
  return Math.max(0, avgTemp - baseTempC);
}

export function predictPestRisk({ cropType, currentStage, avgTempC, humidityPct, consecutiveHighHumidityHours = 12 }) {
  let riskScore = 30; // Base score
  let targetPest = "General Aphids";
  let urgency = "LOW";

  if (cropType.toLowerCase() === 'cotton') {
    targetPest = "Cotton Aphid (Aphis gossypii) & Whitefly";
    if (avgTempC > 30 && humidityPct > 80) {
      riskScore = 84;
      urgency = "HIGH";
    } else if (humidityPct > 70) {
      riskScore = 60;
      urgency = "MEDIUM";
    }
  } else if (cropType.toLowerCase() === 'tomato') {
    targetPest = "Fruit Borer (Helicoverpa armigera)";
    if (currentStage.toLowerCase().includes('flowering') && avgTempC > 28) {
      riskScore = 68;
      urgency = "MEDIUM";
    }
  }

  return {
    crop: cropType,
    pestName: targetPest,
    riskScore: riskScore,
    riskLevel: urgency,
    gddAccumulated: calculateGDD(avgTempC + 4, avgTempC - 4),
    recommendedAction: urgency === "HIGH" 
      ? "Deploy yellow sticky traps @ 12 traps/acre & inspect lower leaf surface."
      : "Routine scouting every 3 days."
  };
}
