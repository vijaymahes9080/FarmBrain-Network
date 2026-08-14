import React, { useState } from 'react';
import { 
  Bug, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Sparkles, 
  Search,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { SAMPLE_DISEASE_PREDICTIONS } from '../data/farmData';

export default function DiseaseAI() {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_DISEASE_PREDICTIONS[0]);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(100);
  const [customImage, setCustomImage] = useState(null);

  const handleSimulateAnalysis = (sample) => {
    setSelectedSample(sample);
    setAnalyzing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target?.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      handleSimulateAnalysis({
        name: "Uploaded Leaf Sample Analysis",
        pathogen: "Alternaria solani (Detected)",
        confidence: 96.5,
        severity: "High",
        affectedZone: "Custom Upload Zone",
        symptoms: "Target spot necrotic ring concentric patterns identified via ResNet50 CV model.",
        remedy: "Apply Chlorothalonil or Copper Oxychloride 50 WP. Remove severely infected foliage.",
        image: url
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Title */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-danger">Module 02</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Computer Vision + CNN Inference</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            Leaf Disease Computer Vision Classifier
          </h2>
        </div>

        <span className="badge badge-purple" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={12} /> YOLOv8 + ResNet50
        </span>
      </div>

      {/* Pipeline Visual Bar */}
      <div className="glass-card" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B7280' }}>CV PIPELINE:</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: '#D1D5DB' }}>
          <span>Leaf Image</span>
          <ArrowRight size={14} color="#00D4AA" />
          <span>Computer Vision</span>
          <ArrowRight size={14} color="#00D4AA" />
          <span>Disease Classification</span>
          <ArrowRight size={14} color="#00D4AA" />
          <span>Confidence Score</span>
          <ArrowRight size={14} color="#00D4AA" />
          <span style={{ color: '#F87171', fontWeight: 700 }}>Farmer Alert</span>
        </div>
      </div>

      {/* Main Grid: Upload/Sample Selector (Left) + CV AI Inference Result (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '20px' }}>
        {/* Left: Drag & Drop Upload Zone + Sample Library */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Drag & Drop Upload Box */}
          <label 
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="glass-card glass-card-interactive" 
            style={{
              padding: '30px 20px',
              border: '2px dashed rgba(0, 212, 170, 0.4)',
              borderRadius: '16px',
              textAlign: 'center',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleDrop} />
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0, 212, 170, 0.15)', color: '#00D4AA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Upload size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF' }}>Drop Leaf Image Here</div>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '2px' }}>or click to browse from device / drone camera</div>
            </div>
          </label>

          {/* Preset Sample Leaf Library */}
          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '12px' }}>
              Preset Field Test Samples
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SAMPLE_DISEASE_PREDICTIONS.map((sample, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSimulateAnalysis(sample)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px',
                    borderRadius: '10px',
                    background: selectedSample.name === sample.name ? 'rgba(0, 212, 170, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: selectedSample.name === sample.name ? '1px solid #00D4AA' : '1px solid rgba(255, 255, 255, 0.06)',
                    cursor: 'pointer'
                  }}
                >
                  <img src={sample.image} alt={sample.name} style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFF' }}>{sample.name}</div>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{sample.affectedZone}</div>
                  </div>
                  <span className="badge badge-danger">{sample.confidence}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Computer Vision Inference Analysis Result */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {analyzing ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '350px', gap: '16px' }}>
              <RefreshCw size={36} color="#00D4AA" style={{ animation: 'spin 1s linear infinite' }} />
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF' }}>Running PyTorch CV Model Inference...</div>
              <div style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: '#00D4AA', transition: 'width 0.2s' }}></div>
              </div>
            </div>
          ) : (
            <>
              {/* Image Preview + Result Card Header */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '140px', height: '140px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0 }}>
                  <img src={selectedSample.image} alt="Target Leaf" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge badge-danger">High Severity Risk</span>
                    <span style={{ fontSize: '0.75rem', color: '#00D4AA', fontFamily: 'var(--font-mono)' }}>CV Conf: {selectedSample.confidence}%</span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFF', marginTop: '6px', margin: 0 }}>
                    {selectedSample.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#9CA3AF', fontStyle: 'italic', marginBottom: '8px' }}>
                    Pathogen: {selectedSample.pathogen}
                  </div>

                  {/* Confidence Bar */}
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${selectedSample.confidence}%`, height: '100%', background: 'linear-gradient(90deg, #F87171, #EF4444)' }}></div>
                  </div>
                </div>
              </div>

              {/* Symptoms Identified */}
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Identified Morphological Symptoms
                </div>
                <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>
                  {selectedSample.symptoms}
                </div>
              </div>

              {/* Recommended Action / Remedy */}
              <div style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(139, 92, 246, 0.1) 100%)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#F87171', textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldAlert size={14} /> Actionable Farmer Treatment Protocol
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF' }}>
                  {selectedSample.remedy}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
