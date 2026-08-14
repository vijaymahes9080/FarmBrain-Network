# FarmBrain Network — Complete AI + IoT + Satellite + Decision Intelligence System

> **FarmBrain Network** is an AI-powered agricultural decision-intelligence platform that integrates IoT sensors, satellite imagery, drone data, weather forecasts, market intelligence, and computer vision to continuously monitor farm conditions, predict agricultural risks, recommend optimal actions, and automate selected farming operations.

---

## 🏗️ 1. Complete Intelligence Pipeline Architecture

```text
                 ┌─────────────────────┐
                 │       FARM          │
                 │ Crops + Soil + Water│
                 └──────────┬──────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
     IoT Sensors          Drone          Satellite
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ↓
                 ┌─────────────────────┐
                 │   FARM DATA HUB     │
                 │ MQTT + API + Cloud  │
                 └──────────┬──────────┘
                            ↓
                 ┌─────────────────────┐
                 │   FARMBRAIN AI      │
                 │ Intelligence Engine │
                 └──────────┬──────────┘
                            │
       ┌──────────┬─────────┼─────────┬──────────┐
       ↓          ↓         ↓         ↓          ↓
    Disease    Weather     Pest     Irrigation  Market
      AI         AI         AI         AI         AI
       │          │         │         │          │
       └──────────┴─────────┼─────────┴──────────┘
                            ↓
                 ┌─────────────────────┐
                 │ DECISION ENGINE     │
                 │ "What should farmer │
                 │ do now?"            │
                 └──────────┬──────────┘
                            ↓
             ┌──────────────┴──────────────┐
             ↓                             ↓
       FARMER ALERT                  AUTOMATION
       Mobile/Web App                Pump / Valve
             │                             │
             └──────────────┬──────────────┘
                            ↓
                    FARM ACTION
                            │
                            ↓
                    New Sensor Data
                            │
                            └──────→ AI (Closed-Loop Learning)
```

---

## 🧠 2. The "Brain" of FarmBrain — Decision Intelligence

Instead of displaying raw monitoring values, **FarmBrain Network** converts raw telemetry into actionable decision intelligence:

| Raw Sensor Input | Standard App | FarmBrain Decision Intelligence Output |
|---|---|---|
| Soil Moisture = 24%, Rain Prob = 75% | Soil Moisture = 24% | **"Delay irrigation today. Expected rainfall (75%) will fulfill crop water requirements."** |
| Humidity = 87%, Temp = 32°C | Humidity = 87% | **"High fungal-disease risk (Tomato Early Blight - 94% Confidence). Inspect Zone A within 12 hours."** |
| Spot Price = ₹2,450, 7-Day Trend = ↑ | Market price = ₹2,450 | **"Current price is favorable. Expected 7-day trend is positive. Consider selling 40–60% of harvested stock."** |

---

## 🌱 3. Major Intelligence Modules

1. **🌱 01 — Crop Intelligence & Biomass Engine**
   - Inputs: Crop type, growth stage, soil conditions, satellite NDVI (Sentinel-2), drone imagery.
   - Outputs: Crop health score, growth anomalies, yield forecasts, biomass stress distribution.

2. **🦠 02 — Leaf Disease Computer Vision Classifier**
   - ResNet50 + YOLOv8 vision pipeline for detecting **Tomato Early Blight**, **Paddy Blast**, and **Cotton Aphid Infestation**.
   - Outputs: Pathogen identification, confidence %, severity, and chemical treatment protocols.

3. **🌦️ 03 — Weather Intelligence Engine**
   - Fuses hyper-local weather APIs with on-farm soil microclimate sensors.
   - Generates farm-specific warnings for frost, waterlogging, high humidity disease windows, and thunderstorms.

4. **💧 04 — Smart Irrigation Solenoid Automation**
   - Combines soil moisture + ambient temperature + rain probability + crop growth stage.
   - Closed-loop actuator feedback to turn solenoid pumps ON/OFF or lock activation during incoming rainfall.

5. **🐛 05 — Pest Intelligence & Outbreak Model**
   - Predicts pest vectors before visual crop damage occurs using microclimate thresholds and crop stage windows.
   - Displays a spatial field zone pest risk heatmap.

6. **💰 06 — APMC Mandi Market Intelligence**
   - ARIMA/LSTM time-series forecasting across regional APMC mandis.
   - Generates Sell / Hold recommendations with confidence scoring.

7. **🗺️ Farm Digital Twin & GIS Engine**
   - Multi-zone vector map dividing farms into interactive spatial polygons.
   - Overlay toggles for Health Score, Sentinel-2 NDVI satellite tiles, and 4K Drone thermal imagery.

---

## 🛠️ 4. Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 + Vite |
| **Styling & Design System** | Custom Vanilla CSS (Dark Theme + Glassmorphism) |
| **Visualization & Charts** | Recharts |
| **Micro-Animations** | Framer Motion |
| **Spatial Maps** | Leaflet + React-Leaflet |
| **Icons** | Lucide React |
| **Backend Architecture** | Python FastAPI (Simulated Telemetry API) |
| **Spatial Database** | PostgreSQL + PostGIS |
| **Hardware Nodes** | ESP32 Microcontrollers (Soil Moisture, Temp, Solenoids) |
| **Communication Protocol** | MQTT / LoRaWAN |

---

## 💻 5. Installation & Running Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vijaymahes9080/FarmBrain-Network.git
   cd FarmBrain-Network
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👤 Developer Info

- **Developer:** Vijay Mahes
- **Email:** Vijaypradhap2004@gmail.com
- **Repository:** [GitHub — vijaymahes9080/FarmBrain-Network](https://github.com/vijaymahes9080/FarmBrain-Network.git)
- **Project:** MCA Final Year Project — FarmBrain Network Decision Intelligence System
