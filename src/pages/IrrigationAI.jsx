import React, { useState } from 'react';
import SolarIrrigationCalc from '../components/SolarIrrigationCalc';
import { 
  Droplets, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  CloudRain, 
  Power, 
  Sparkles,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

export default function IrrigationAI() {
  const [pumpActive, setPumpActive] = useState(false);
  const [autoMode, setAutoMode] = useState(true);

  const waterUsageData = [
    { day: 'Mon', usage: 12000, saved: 4500 },
    { day: 'Tue', usage: 14000, saved: 3000 },
    { day: 'Wed', usage: 8000,  saved: 9000 },
    { day: 'Thu', usage: 15000, saved: 2000 },
    { day: 'Fri', usage: 6000,  saved: 11000 },
    { day: 'Sat', usage: 11000, saved: 5000 },
    { day: 'Sun', usage: 4000,  saved: 14200 }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-success">Module 04</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Closed-Loop Actuator Control</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            Smart Irrigation & Solenoid Automation Engine
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setAutoMode(!autoMode)}
            className={autoMode ? "btn-primary" : "btn-secondary"}
            style={{ fontSize: '0.8rem' }}
          >
            <Sparkles size={14} /> {autoMode ? "Auto AI Mode ACTIVE" : "Manual Override Mode"}
          </button>
        </div>
      </div>

      {/* Demo Scenario Highlight Box (As requested in prompt!) */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)',
        border: '1px solid #00D4AA',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 10px 30px rgba(0, 212, 170, 0.15)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0, 212, 170, 0.2)', color: '#00D4AA' }}>
              <Droplets size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
                Demo Scenario — Closed-Loop Irrigation Intelligence
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
                Real-time decision matrix evaluation for Zone A (Tomato Flowering)
              </p>
            </div>
          </div>
          <span className="badge badge-success">Closed-Loop Active</span>
        </div>

        {/* Input Variables Matrix */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '16px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Soil Moisture</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F87171' }}>24% (Low)</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Temperature</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FBBF24' }}>32°C</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Humidity</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#60A5FA' }}>87%</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Rain Forecast</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#34D399' }}>75% (High)</div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Crop Stage</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#C084FC' }}>Flowering</div>
          </div>
        </div>

        {/* AI Output Banner */}
        <div style={{
          background: 'rgba(10, 15, 26, 0.8)',
          border: '1px solid rgba(0, 212, 170, 0.4)',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#00D4AA', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2px' }}>
              FARMBRAIN DECISION ENGINE
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFF' }}>
              "Do not irrigate. Expected rainfall (75%) is sufficient."
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Pump Controller Status</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: pumpActive ? '#34D399' : '#F87171' }}>
                {pumpActive ? "PUMP ACTIVE (Manual)" : "PUMP STANDBY (AI Rain Lock)"}
              </div>
            </div>

            <button
              onClick={() => setPumpActive(!pumpActive)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: pumpActive ? '#EF4444' : '#10B981',
                color: '#FFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: pumpActive ? '0 0 15px rgba(239,68,68,0.5)' : '0 0 15px rgba(16,185,129,0.5)'
              }}
              title="Toggle Pump Valve Manually"
            >
              <Power size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Water Usage vs Water Saved Chart */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
              Weekly Water Consumption vs. AI Precision Savings
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
              Litres applied vs. Litres conserved by avoiding unnecessary irrigation
            </p>
          </div>
          <span className="badge badge-success">38% Total Water Conserved</span>
        </div>

        <div style={{ height: '240px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={waterUsageData}>
              <XAxis dataKey="day" stroke="#6B7280" fontSize={12} tickLine={false} />
              <YAxis stroke="#6B7280" fontSize={12} tickLine={false} />
              <Tooltip contentStyle={{ background: '#0E1626', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="usage" fill="#3B82F6" radius={[6, 6, 0, 0]} name="Water Consumed (L)" />
              <Bar dataKey="saved" fill="#00D4AA" radius={[6, 6, 0, 0]} name="Water Saved by AI (L)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Solar Energy & Pump Sizing Calculator */}
      <SolarIrrigationCalc />
    </div>
  );
}
