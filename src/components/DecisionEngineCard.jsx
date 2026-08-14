import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Droplets, 
  TrendingUp,
  AlertTriangle,
  Play
} from 'lucide-react';

export default function DecisionEngineCard({ zone, onExecuteAction }) {
  const [executed, setExecuted] = useState(false);
  const [activeDecision, setActiveDecision] = useState('irrigation');

  const handleAction = () => {
    setExecuted(true);
    if (onExecuteAction) onExecuteAction();
    setTimeout(() => setExecuted(false), 4000);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(14, 22, 38, 0.9) 0%, rgba(22, 32, 53, 0.95) 100%)',
      border: '1px solid rgba(0, 212, 170, 0.3)',
      borderRadius: '20px',
      padding: '24px',
      boxShadow: '0 10px 40px rgba(0, 212, 170, 0.12)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(0, 212, 170, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'rgba(0, 212, 170, 0.15)',
            border: '1px solid rgba(0, 212, 170, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Brain size={22} color="#00D4AA" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                FarmBrain Decision Engine
              </h3>
              <span className="badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={12} /> Autonomous AI
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
              Converting Raw Telemetry into Closed-Loop Agricultural Action
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '6px', background: 'rgba(255,255,255,0.04)', padding: '4px', borderRadius: '10px' }}>
          <button
            onClick={() => setActiveDecision('irrigation')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: activeDecision === 'irrigation' ? '#00D4AA' : 'transparent',
              color: activeDecision === 'irrigation' ? '#042F26' : '#9CA3AF'
            }}
          >
            Irrigation AI
          </button>
          <button
            onClick={() => setActiveDecision('disease')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: activeDecision === 'disease' ? '#8B5CF6' : 'transparent',
              color: activeDecision === 'disease' ? '#FFFFFF' : '#9CA3AF'
            }}
          >
            Disease AI
          </button>
          <button
            onClick={() => setActiveDecision('market')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: activeDecision === 'market' ? '#F59E0B' : 'transparent',
              color: activeDecision === 'market' ? '#042F26' : '#9CA3AF'
            }}
          >
            Market AI
          </button>
        </div>
      </div>

      {/* Decision Transformation Display (Before -> After) */}
      {activeDecision === 'irrigation' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 30px 1fr', gap: '16px', alignItems: 'center' }}>
          {/* Raw Input */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '0.7rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>
              RAW SENSOR TELEMETRY
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Soil Moisture: <span style={{ color: '#F87171', fontWeight: 700 }}>24%</span> (Below threshold 35%)</div>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Rain Forecast: <span style={{ color: '#60A5FA', fontWeight: 700 }}>75% probability</span> in 3 hrs</div>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Crop Stage: <span style={{ color: '#34D399' }}>Tomato Flowering</span></div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', color: '#00D4AA' }}>
            <ArrowRight size={24} />
          </div>

          {/* AI Recommendation Output */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(124, 58, 237, 0.08) 100%)',
            border: '1px solid rgba(0, 212, 170, 0.4)',
            borderRadius: '12px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '0.7rem', color: '#00D4AA', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={12} /> FARMBRAIN INTELLIGENCE RECOMMENDATION
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.4 }}>
              "Delay irrigation today. Expected rainfall (75%) will fulfill crop water requirements."
            </div>
            <div style={{ fontSize: '0.75rem', color: '#34D399', marginTop: '6px' }}>
              Estimated Water Saved: <strong>14,200 Liters</strong> | Energy Saved: <strong>4.2 kWh</strong>
            </div>
          </div>
        </div>
      )}

      {activeDecision === 'disease' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 30px 1fr', gap: '16px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '0.7rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>RAW ENVIRONMENT DATA</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Humidity: <span style={{ color: '#F87171', fontWeight: 700 }}>87%</span></div>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Temperature: <span style={{ color: '#FBBF24', fontWeight: 700 }}>32°C</span></div>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Drone Leaf Scan: <span style={{ color: '#C084FC' }}>Lesions Detected</span></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', color: '#8B5CF6' }}>
            <ArrowRight size={24} />
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(239, 68, 68, 0.1) 100%)', border: '1px solid rgba(139, 92, 246, 0.4)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '0.7rem', color: '#C084FC', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>FARMBRAIN DISEASE ALERT</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
              "High fungal-disease risk (Tomato Early Blight - 94% Confidence). Inspect Zone A within 12 hours."
            </div>
            <div style={{ fontSize: '0.75rem', color: '#F87171', marginTop: '6px' }}>
              Recommended Fungicide: <strong>Mancozeb @ 2.5g/L</strong>
            </div>
          </div>
        </div>
      )}

      {activeDecision === 'market' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 30px 1fr', gap: '16px', alignItems: 'center' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '0.7rem', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>MARKET RAW TICKER</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Tomato Spot Price: <span style={{ color: '#34D399', fontWeight: 700 }}>₹2,450 / quintal</span></div>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• 7-Day Market Trend: <span style={{ color: '#34D399' }}>Upward (↑ +8%)</span></div>
              <div style={{ fontSize: '0.85rem', color: '#E5E7EB' }}>• Regional Arrival: <span style={{ color: '#FBBF24' }}>Moderate</span></div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', color: '#F59E0B' }}>
            <ArrowRight size={24} />
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '0.7rem', color: '#FBBF24', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>FARMBRAIN MARKET RECOMMENDATION</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
              "Current price is favorable. Expected 7-day movement is positive (+5%). Consider selling 40–60% of harvested stock."
            </div>
            <div style={{ fontSize: '0.75rem', color: '#FBBF24', marginTop: '6px' }}>
              AI Model Confidence: <strong>78% Time-Series Alignment</strong>
            </div>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#9CA3AF' }}>
          <ShieldAlert size={16} color="#00D4AA" />
          <span>Closed-Loop Automation: <strong>Pump Valve #02 Standby</strong></span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={handleAction}
            className="btn-primary"
            style={{ fontSize: '0.85rem' }}
          >
            {executed ? (
              <>
                <CheckCircle2 size={16} /> Action Dispatched to ESP32
              </>
            ) : (
              <>
                <Play size={16} /> Confirm & Execute AI Action
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
