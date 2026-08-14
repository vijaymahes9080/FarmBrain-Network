# FarmBrain ESP32 IoT Node Hardware Setup Guide

## 🔌 Hardware Schematics & Component Bill of Materials (BOM)

| Component | Function | Interface / GPIO Pin |
|---|---|---|
| **ESP32-WROOM-32** | Main Gateway Microcontroller | - |
| **Capacitive Soil Moisture v1.2** | Soil Moisture Level Sensor | Analog Pin `ADC1_CH6` (GPIO 34) |
| **DHT22 / AM2302** | Air Temp & Humidity | Digital Pin `GPIO 4` |
| **5V Dual Relay Module** | Solenoid Pump Actuator | Control Pin `GPIO 16` |
| **Solar Panel (10W 12V)** | Power Harvesting | Charge Controller → LiFePO4 18650 Battery |
| **SX1276 LoRa Module (Optional)** | Long Range Farm Gateway | SPI Pins (MISO: 19, MOSI: 23, SCK: 18, CS: 5) |

---

## ⚡ ESP32 Wiring Diagram

```text
               ESP32 Microcontroller
               ┌───────────────────────┐
  VCC (3.3V) ──┤ 3V3                   │
  GND ─────────┤ GND                   │
               │                       │
  Soil Sensor ─┤ GPIO 34 (ADC1_CH6)    │
  DHT22 Temp  ─┤ GPIO 4                │
  Relay In    ─┤ GPIO 16 (Digital Out) │
               └───────────────────────┘
```
