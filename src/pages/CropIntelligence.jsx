import React from 'react';
import { 
  Sprout, 
  Satellite, 
  Camera, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export default function CropIntelligence({ zones }) {
  const yieldPredictionData = [
    { crop: 'Tomato', current: 24.5, expectedMax: 28.0, unit: 'Tons/ac' },
    { crop: 'Paddy', current: 3.8, expectedMax: 4.2, unit: 'Tons/ac' },
    { crop: 'Cotton', current: 1.9, expectedMax: 2.3, unit: 'Tons/ac' },
    { crop: 'Groundnut', current: 2.4, expectedMax: 2.7, unit: 'Tons/ac' }
  ];

  const stressBreakdown = [
    { name: 'Water Stress', value: 35, color: '#00D4AA' },
    { name: 'Fungal Risk', value: 40, color: '#EF4444' },
    { name: 'Nutrient Deficiency', value: 15, color: '#F59E0B' },
    { name: 'Optimal Vegetation', value: 10, color: '#10B981' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Module Title Banner */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-success">Module 01</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Satellite + Drone + Soil Fusion</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            Crop Intelligence & Biomass Engine
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Average Crop Health</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00D4AA' }}>78.0 / 100</div>
          </div>
        </div>
      </div>

      {/* Grid: Crop Health Gauges + Stress Breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        {/* Yield Prediction Chart */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
                Yield Forecast vs Baseline Target
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
                AI Time-Series Harvest Estimation based on NDVI + Growth Stages
              </p>
            </div>
            <span className="badge badge-purple">AI Forecast</span>
          </div>

          <div style={{ height: '260px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yieldPredictionData}>
                <XAxis dataKey="crop" stroke="#6B7280" fontSize={12} tickLine={false} />
                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0E1626', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="current" fill="#00D4AA" radius={[6, 6, 0, 0]} name="Predicted Yield" />
                <Bar dataKey="expectedMax" fill="rgba(255, 255, 255, 0.1)" radius={[6, 6, 0, 0]} name="Max Potential" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stress Detection Breakdown */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px' }}>
            Stress Detection Distribution
          </h3>
          <div style={{ height: '180px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={stressBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4}>
                  {stressBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: '#0E1626', borderRadius: '8px', color: '#fff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
            {stressBreakdown.map(s => (
              <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#D1D5DB' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color }}></span>
                <span>{s.name} ({s.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crop Growth Anomaly Log */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px' }}>
          Detected Growth Anomalies & Field Biomass Alerts
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.08)', borderLeft: '4px solid #EF4444', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F87171' }}>Zone A (Tomato) — Chlorosis & Biomass Drop</div>
              <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '2px' }}>NDVI decreased from 0.74 → 0.62 over 5 days. Waterlogging + Early Blight suspected.</div>
            </div>
            <button className="btn-secondary" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Inspect Zone</button>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.08)', borderLeft: '4px solid #10B981', padding: '14px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34D399' }}>Zone B (Paddy) — Optimal Canopy Coverage</div>
              <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '2px' }}>Canopy index 0.88 (+12% above seasonal mean). Peak vegetative vigor reached.</div>
            </div>
            <span className="badge badge-success">Optimal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
