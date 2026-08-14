// FarmBrain Simulated Telemetry & Intelligence Datasets

export const INITIAL_FARM_ZONES = [
  {
    id: "zone-a",
    name: "Zone A — Tomato Field",
    crop: "Tomato",
    stage: "Flowering & Fruit Set",
    acres: 4.5,
    healthScore: 71,
    status: "Warning",
    diseaseRisk: "HIGH",
    pestRisk: "MEDIUM",
    waterStress: "HIGH",
    moisture: 24,
    temp: 32,
    humidity: 87,
    ph: 6.4,
    coordinates: [11.0168, 76.9558],
    droneScanUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=600&q=80",
    satelliteNdvi: 0.62,
    aiRecommendation: "Delay irrigation (75% rain expected). Inspect leaves for Early Blight."
  },
  {
    id: "zone-b",
    name: "Zone B — Paddy / Rice Field",
    crop: "Paddy",
    stage: "Vegetative Phase",
    acres: 8.0,
    healthScore: 92,
    status: "Optimal",
    diseaseRisk: "LOW",
    pestRisk: "LOW",
    waterStress: "LOW",
    moisture: 68,
    temp: 29,
    humidity: 78,
    ph: 6.8,
    coordinates: [11.0185, 76.9580],
    droneScanUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    satelliteNdvi: 0.88,
    aiRecommendation: "Conditions optimal. Nitrogen top-dressing recommended in 3 days."
  },
  {
    id: "zone-c",
    name: "Zone C — Cotton Field",
    crop: "Cotton",
    stage: "Boll Formation",
    acres: 6.2,
    healthScore: 64,
    status: "Warning",
    diseaseRisk: "MEDIUM",
    pestRisk: "HIGH",
    waterStress: "MEDIUM",
    moisture: 38,
    temp: 34,
    humidity: 82,
    ph: 7.1,
    coordinates: [11.0150, 76.9540],
    droneScanUrl: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=600&q=80",
    satelliteNdvi: 0.54,
    aiRecommendation: "High Whitefly & Aphid risk detected. Deploy pheromone traps in Field 03."
  },
  {
    id: "zone-d",
    name: "Zone D — Groundnut Orchard",
    crop: "Groundnut",
    stage: "Pegging Stage",
    acres: 5.0,
    healthScore: 85,
    status: "Optimal",
    diseaseRisk: "LOW",
    pestRisk: "MEDIUM",
    waterStress: "LOW",
    moisture: 45,
    temp: 30,
    humidity: 75,
    ph: 6.5,
    coordinates: [11.0190, 76.9530],
    droneScanUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    satelliteNdvi: 0.79,
    aiRecommendation: "Maintain soil moisture at current pegging threshold (40-50%)."
  }
];

export const SENSOR_TELEMETRY_SERIES = [
  { time: "06:00", moisture: 30, temp: 24, humidity: 92, ph: 6.5, solar: 120 },
  { time: "08:00", moisture: 29, temp: 26, humidity: 88, ph: 6.5, solar: 350 },
  { time: "10:00", moisture: 28, temp: 29, humidity: 84, ph: 6.4, solar: 680 },
  { time: "12:00", moisture: 26, temp: 33, humidity: 76, ph: 6.4, solar: 950 },
  { time: "14:00", moisture: 24, temp: 35, humidity: 72, ph: 6.3, solar: 910 },
  { time: "16:00", moisture: 24, temp: 32, humidity: 87, ph: 6.4, solar: 520 },
  { time: "18:00", moisture: 25, temp: 29, humidity: 90, ph: 6.4, solar: 210 },
  { time: "20:00", moisture: 26, temp: 27, humidity: 93, ph: 6.5, solar: 0 }
];

export const WEATHER_FORECAST_DATA = [
  { day: "Today", tempMax: 33, tempMin: 24, humidity: 87, rainProb: 75, condition: "Thunderstorm Expected", alert: "High Fungus Warning" },
  { day: "Tomorrow", tempMax: 30, tempMin: 23, humidity: 85, rainProb: 82, condition: "Heavy Rain", alert: "Waterlogging Risk" },
  { day: "Wed", tempMax: 29, tempMin: 22, humidity: 78, rainProb: 40, condition: "Scattered Showers", alert: "Normal" },
  { day: "Thu", tempMax: 31, tempMin: 23, humidity: 70, rainProb: 15, condition: "Partly Cloudy", alert: "Normal" },
  { day: "Fri", tempMax: 34, tempMin: 25, humidity: 65, rainProb: 5, condition: "Sunny & Dry", alert: "Irrigation Needed" },
  { day: "Sat", tempMax: 35, tempMin: 26, humidity: 62, rainProb: 10, condition: "Hot & Clear", alert: "Heat Stress Warning" },
  { day: "Sun", tempMax: 33, tempMin: 24, humidity: 68, rainProb: 25, condition: "Passing Clouds", alert: "Normal" }
];

export const MARKET_PRICES_DATA = [
  { date: "Aug 01", tomato: 2100, paddy: 2150, cotton: 6800, groundnut: 5900 },
  { date: "Aug 04", tomato: 2250, paddy: 2180, cotton: 6850, groundnut: 5950 },
  { date: "Aug 07", tomato: 2320, paddy: 2200, cotton: 6900, groundnut: 6000 },
  { date: "Aug 10", tomato: 2410, paddy: 2220, cotton: 6980, groundnut: 6050 },
  { date: "Aug 12", tomato: 2450, paddy: 2250, cotton: 7050, groundnut: 6100 },
  { date: "Today",  tomato: 2450, paddy: 2280, cotton: 7100, groundnut: 6150 },
  { date: "Forecast +3d", tomato: 2580, paddy: 2310, cotton: 7180, groundnut: 6200 },
  { date: "Forecast +7d", tomato: 2620, paddy: 2350, cotton: 7250, groundnut: 6280 }
];

export const SAMPLE_DISEASE_PREDICTIONS = [
  {
    name: "Tomato Early Blight",
    pathogen: "Alternaria solani",
    confidence: 94.2,
    severity: "High",
    affectedZone: "Zone A — Field 01",
    symptoms: "Concentric brown dark rings on lower leaves, yellow chlorotic halo around leaf margins.",
    remedy: "Apply Copper Oxychloride (2.5g/L) or Mancozeb. Avoid overhead sprinkler irrigation to reduce foliage wetness.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Paddy Blast Disease",
    pathogen: "Magnaporthe oryzae",
    confidence: 88.5,
    severity: "Medium",
    affectedZone: "Zone B — Field 02",
    symptoms: "Spindle-shaped lesions with reddish-brown borders and grey center on leaf blades.",
    remedy: "Spray Tricyclazole 75 WP @ 0.6 g/l. Maintain controlled water level of 2-5cm.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Cotton Aphid Infestation",
    pathogen: "Aphis gossypii",
    confidence: 91.0,
    severity: "High",
    affectedZone: "Zone C — Field 03",
    symptoms: "Leaf curling, sticky honeydew exudate, sooty mold appearance on leaf under-surfaces.",
    remedy: "Spray Imidacloprid 17.8 SL @ 0.5ml/L or apply Neem Oil (10,000 ppm) spray.",
    image: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=400&q=80"
  }
];
