/**
 * FarmBrain Telemetry Data & Farm Action Report Export Utility
 */

export function generateCSVReport(zonesData, sensorSeries) {
  const headers = ["Timestamp", "Zone", "Crop", "Moisture (%)", "Temperature (°C)", "Humidity (%)", "NDVI", "Health Score (%)", "AI Recommendation"];
  const rows = zonesData.map(z => [
    new Date().toISOString(),
    z.id,
    z.crop,
    z.moisture,
    z.temp,
    z.humidity,
    z.satelliteNdvi,
    z.healthScore,
    `"${z.aiRecommendation.replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `FarmBrain_Telemetry_Report_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
