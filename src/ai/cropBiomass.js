/**
 * FarmBrain Satellite Multispectral Vegetation Index (NDVI / EVI) Calculator
 * Sentinel-2 Band 8 (NIR: 842nm) & Band 4 (Red: 665nm) & Band 2 (Blue: 490nm)
 */

export function calculateNDVI(nirBand, redBand) {
  if (nirBand + redBand === 0) return 0;
  const ndvi = (nirBand - redBand) / (nirBand + redBand);
  return parseFloat(ndvi.toFixed(3));
}

export function calculateEVI(nirBand, redBand, blueBand) {
  const G = 2.5;
  const C1 = 6.0;
  const C2 = 7.5;
  const L = 1.0;

  const denominator = nirBand + C1 * redBand - C2 * blueBand + L;
  if (denominator === 0) return 0;

  const evi = G * ((nirBand - redBand) / denominator);
  return parseFloat(evi.toFixed(3));
}

export function classifyBiomassHealth(ndvi) {
  if (ndvi >= 0.75) return { status: "DENSE_VEGETATION", color: "#10B981", score: 95 };
  if (ndvi >= 0.55) return { status: "MODERATE_VEGETATION", color: "#00D4AA", score: 75 };
  if (ndvi >= 0.35) return { status: "SPARSE_CROP_STRESS", color: "#F59E0B", score: 55 };
  return { status: "SEVERE_WATERLOG_OR_DISEASE", color: "#EF4444", score: 30 };
}
