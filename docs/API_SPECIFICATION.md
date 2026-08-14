# FarmBrain Network — API & Protocol Specification

## 1. MQTT Telemetry Specification

### Topic: `farmbrain/{zone_id}/telemetry`
**Direction:** ESP32 Hardware → FarmBrain Data Hub  
**QoS Level:** 1  

```json
{
  "device_id": "ESP32-ZONE-A-NODE1",
  "firmware": "v2.4.1-ota",
  "battery_mv": 3950,
  "rssi": -65,
  "payload": {
    "soil_moisture_pct": 24.0,
    "air_temp_c": 32.0,
    "humidity_pct": 87.0,
    "soil_ph": 6.4,
    "water_level_cm": 15.2
  },
  "timestamp": 1723651200
}
```

### Topic: `farmbrain/{zone_id}/actuator/pump`
**Direction:** FarmBrain Decision Engine → ESP32 Solenoid Relay  
**QoS Level:** 2  

```json
{
  "command": "SET_PUMP_VALVE",
  "state": "OFF",
  "reason": "RAIN_FORECAST_LOCK_75_PERCENT",
  "duration_seconds": 0,
  "timestamp": 1723651205
}
```

---

## 2. REST API Endpoints (FastAPI Backend)

### `GET /api/v1/zones/status`
Returns real-time health, disease, pest, and water stress scores for all farm zones.

### `POST /api/v1/ai/predict-disease`
Submits a leaf image payload for PyTorch ResNet50 vision inference.

### `GET /api/v1/market/forecast?crop=tomato`
Returns 7-day Holt-Winters time-series price forecast with sell/hold recommendations.
