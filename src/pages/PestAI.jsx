import React from 'react';
import { 
  Bug, 
  AlertTriangle, 
  ShieldAlert, 
  Activity, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function PestAI({ zones }) {
  const pestAlerts = [
    {
      pest: "Cotton Aphid & Whitefly",
      crop: "Cotton (Zone C)",
      risk: "HIGH",
      probability: "84%",
      trigger: "High humidity (82%) + Boll formation stage window.",
      action: "Field inspection within 24h. Deploy yellow sticky traps @ 12 traps/acre."
    },
    {
      pest: "Tomato Fruit Borer (Helicoverpa armigera)",
      crop: "Tomato (Zone A)",
      risk: "MEDIUM",
      probability: "62%",
      trigger: "Night temperature 24°C + Flowering bloom.",
      action: "Install pheromone traps & spray Bacillus thuringiensis (Bt) @ 1.5g/L."
    },
    {
      pest: "Stem Borer (Scirpophaga incertulas)",
      crop: "Paddy (Zone B)",
      risk: "LOW",
      probability: "22%",
      trigger: "Controlled water level active.",
      action: "Routine observation."
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-warning">Module 05</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Early Warning Pest Vector Model</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            Pest Risk Intelligence & Outbreak Prediction
          </h2>
        </div>

        <span className="badge badge-purple" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={12} /> Predictive Risk Model
        </span>
      </div>

      {/* Grid: Zone Pest Heatmap (Left) + Early Warnings List (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '20px' }}>
        {/* Pest Heatmap Panel */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
            Field Zone Pest Heatmap
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {zones.map(z => (
              <div 
                key={z.id}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: z.pestRisk === 'HIGH' ? 'rgba(239, 68, 68, 0.12)' : z.pestRisk === 'MEDIUM' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                  border: z.pestRisk === 'HIGH' ? '1px solid rgba(239, 68, 68, 0.4)' : z.pestRisk === 'MEDIUM' ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(16, 185, 129, 0.4)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>{z.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{z.crop} ({z.stage})</div>
                </div>

                <span className={`badge ${z.pestRisk === 'HIGH' ? 'badge-danger' : z.pestRisk === 'MEDIUM' ? 'badge-warning' : 'badge-success'}`}>
                  {z.pestRisk} Risk
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Early Warning Protocol Cards */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
            Active Pest Outbreak Early Warnings
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {pestAlerts.map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className={`badge ${item.risk === 'HIGH' ? 'badge-danger' : item.risk === 'MEDIUM' ? 'badge-warning' : 'badge-success'}`}>
                    Pest Risk: {item.risk} ({item.probability})
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Target: {item.crop}</span>
                </div>

                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF' }}>{item.pest}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '2px' }}>Trigger: {item.trigger}</div>

                <div style={{ background: 'rgba(0, 212, 170, 0.08)', borderLeft: '3px solid #00D4AA', padding: '10px', borderRadius: '6px', marginTop: '10px', fontSize: '0.8rem', color: '#D1D5DB' }}>
                  <strong>Recommended Action:</strong> {item.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
