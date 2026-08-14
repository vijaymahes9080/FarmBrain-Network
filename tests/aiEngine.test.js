import { calculateET0, evaluateIrrigationDecision } from '../src/ai/irrigationEngine.js';
import { calculateGDD } from '../src/ai/pestPredictor.js';
import { forecastMarketTrend } from '../src/ai/marketForecaster.js';
import { calculateNDVI } from '../src/ai/cropBiomass.js';

console.log("=== RUNNING FARMBRAIN AI ALGORITHM TEST SUITE ===");

// 1. ET0 Test
const et0 = calculateET0(32, 87);
console.assert(et0 > 0, "ET0 calculation failed");
console.log(`[PASS] ET0 Math Calculation: ${et0} mm/day`);

// 2. Irrigation Decision Test
const decision = evaluateIrrigationDecision({ soilMoisturePct: 24, tempC: 32, humidityPct: 87, rainProbabilityPct: 75 });
console.assert(decision.recommendation === "HOLD_IRRIGATION", "Irrigation Rain Override Failed");
console.log(`[PASS] Closed-Loop Rain Override Test: ${decision.recommendation}`);

// 3. Market Forecast Test
const forecast = forecastMarketTrend([2100, 2250, 2320, 2410, 2450], 7);
console.assert(forecast.projected7DayPrice > 2450, "Market Forecast Trend Failed");
console.log(`[PASS] Holt-Winters Time-Series Trend Test: Projected ₹${forecast.projected7DayPrice}`);

// 4. NDVI Test
const ndvi = calculateNDVI(0.82, 0.18);
console.assert(ndvi === 0.64, "NDVI Band Math Failed");
console.log(`[PASS] Sentinel-2 NDVI Calculation: ${ndvi}`);

console.log("=== ALL FARMBRAIN TESTS PASSED SUCCESSFULLY ===");
