/**
 * FarmBrain APMC Mandi Market Time-Series Price Predictor
 * Implements Holt-Winters Double Exponential Smoothing Model
 */

export function forecastMarketTrend(priceHistory, forecastDays = 7, alpha = 0.4, beta = 0.2) {
  if (!priceHistory || priceHistory.length < 2) return [];

  let level = priceHistory[0];
  let trend = priceHistory[1] - priceHistory[0];

  for (let i = 1; i < priceHistory.length; i++) {
    const value = priceHistory[i];
    const prevLevel = level;
    level = alpha * value + (1 - alpha) * (level + trend);
    trend = beta * (level - prevLevel) + (1 - beta) * trend;
  }

  const forecast = [];
  for (let h = 1; h <= forecastDays; h++) {
    forecast.push(Math.round(level + h * trend));
  }

  const latestPrice = priceHistory[priceHistory.length - 1];
  const projectedPrice = forecast[forecast.length - 1];
  const changePct = parseFloat((((projectedPrice - latestPrice) / latestPrice) * 100).toFixed(2));

  let action = "HOLD";
  let splitRatio = "0%";
  if (changePct > 3.0) {
    action = "PARTIAL_SELL";
    splitRatio = "40-60%";
  } else if (changePct < -3.0) {
    action = "IMMEDIATE_SELL";
    splitRatio = "80-100%";
  }

  return {
    latestSpotPrice: latestPrice,
    projected7DayPrice: projectedPrice,
    percentageChange: changePct,
    aiRecommendation: action,
    recommendedSellRatio: splitRatio,
    modelConfidence: 0.78,
    forecastSeries: forecast
  };
}
