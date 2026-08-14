/**
 * FarmBrain Computer Vision & Leaf Disease Classification Model
 * Uses ResNet50 + YOLOv8 architecture weights simulation
 */

export const DISEASE_CLASSES = {
  TOMATO_EARLY_BLIGHT: {
    id: "TOMATO_EARLY_BLIGHT",
    name: "Tomato Early Blight",
    pathogen: "Alternaria solani",
    category: "Fungal",
    baseConfidence: 0.94,
    color: "#EF4444",
    symptoms: [
      "Concentric dark brown target-like rings on mature leaves",
      "Yellow chlorotic halo around leaf spots",
      "Premature leaf drop starting from lower canopy"
    ],
    organicRemedy: "Apply Trichoderma viride bio-fungicide @ 5g/L + Neem leaf extract (5%).",
    chemicalRemedy: "Spray Mancozeb 75% WP @ 2.5g/L or Chlorothalonil @ 2g/L at 10-day intervals.",
    preventativeMeasures: [
      "Ensure proper plant spacing for airflow",
      "Switch to drip irrigation to prevent foliage wetness",
      "Mulch soil around tomato base to suppress spore splashback"
    ]
  },
  PADDY_BLAST: {
    id: "PADDY_BLAST",
    name: "Paddy Rice Blast",
    pathogen: "Magnaporthe oryzae",
    category: "Fungal",
    baseConfidence: 0.89,
    color: "#F59E0B",
    symptoms: [
      "Spindle-shaped leaf lesions with gray center and reddish-brown margin",
      "Nodal necrosis leading to neck rot during panicle stage"
    ],
    organicRemedy: "Spray Pseudomonas fluorescens @ 10g/L.",
    chemicalRemedy: "Spray Tricyclazole 75% WP @ 0.6g/L or Isoprothiolane 40% EC @ 1.5ml/L.",
    preventativeMeasures: [
      "Avoid excessive nitrogenous fertilizer application",
      "Maintain standing water depth of 2-5cm during tillering"
    ]
  },
  COTTON_APHID: {
    id: "COTTON_APHID",
    name: "Cotton Aphid Infestation",
    pathogen: "Aphis gossypii",
    category: "Pest Vector",
    baseConfidence: 0.91,
    color: "#8B5CF6",
    symptoms: [
      "Curled downward leaves with sticky honeydew deposits",
      "Sooty mold growth on upper leaf surfaces"
    ],
    organicRemedy: "Release Chrysoperla carnea (Green lacewing) larvae @ 10,000/ha.",
    chemicalRemedy: "Apply Imidacloprid 17.8% SL @ 0.5ml/L or Flonicamid 50% WG @ 0.3g/L.",
    preventativeMeasures: [
      "Install yellow sticky traps @ 15 traps/acre",
      "Intercrop with cowpea or maize as trap crop"
    ]
  }
};

/**
 * Simulates YOLOv8 Object Detection & Lesion Bounding Box extraction
 * @param {string} imageUri 
 * @returns {Promise<Object>} Detection inference payload
 */
export async function classifyLeafImage(imageUri) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        timestamp: new Date().toISOString(),
        inferenceTimeMs: 42,
        detectedClass: DISEASE_CLASSES.TOMATO_EARLY_BLIGHT,
        confidence: 0.942,
        boundingBoxes: [
          { x: 120, y: 85, width: 90, height: 95, label: "Alternaria lesion", score: 0.96 },
          { x: 240, y: 190, width: 75, height: 80, label: "Chlorotic halo", score: 0.91 }
        ]
      });
    }, 600);
  });
}
