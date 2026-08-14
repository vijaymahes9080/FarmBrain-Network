#!/usr/bin/env python3
"""
FarmBrain ESP32 Hardware Telemetry Simulator
Publishes soil moisture, ambient temperature, humidity, and pH data over MQTT.
"""

import time
import json
import random

MQTT_BROKER = "broker.hivemq.com"
MQTT_PORT = 1883
TOPIC_PREFIX = "farmbrain/zone-a/telemetry"

def generate_telemetry():
    return {
        "device_id": "ESP32-ZONE-A-NODE1",
        "firmware": "v2.4.1-ota",
        "battery_mv": 3950,
        "rssi": -65,
        "payload": {
            "soil_moisture_pct": round(random.uniform(22.0, 35.0), 1),
            "air_temp_c": round(random.uniform(28.0, 36.0), 1),
            "humidity_pct": round(random.uniform(75.0, 92.0), 1),
            "soil_ph": round(random.uniform(6.2, 6.8), 2),
            "water_level_cm": round(random.uniform(14.0, 18.0), 1)
        },
        "timestamp": int(time.time())
    }

if __name__ == "__main__":
    print(f"[FarmBrain ESP32 Simulator] Publishing telemetry loop to {MQTT_BROKER}:{MQTT_PORT}...")
    try:
        while True:
            data = generate_telemetry()
            print(f"[MQTT PUB {TOPIC_PREFIX}] -> {json.dumps(data)}")
            time.sleep(3)
    except KeyboardInterrupt:
        print("\n[FarmBrain Simulator] Terminated gracefully.")
