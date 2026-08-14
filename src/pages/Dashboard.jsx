import React from 'react';
import DecisionEngineCard from '../components/DecisionEngineCard';
import PipelineDiagram from '../components/PipelineDiagram';
import VoiceAssistant from '../components/VoiceAssistant';
import DroneFlightSim from '../components/DroneFlightSim';
import CarbonCreditTracker from '../components/CarbonCreditTracker';
import { 
  Sprout, 
  Bug, 
  Droplets, 
  CloudSun, 
  TrendingUp, 
  Activity, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  Radio
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

export default function Dashboard({ zones, sensorData, setActiveTab }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Voice Assistant AI Header */}
      <VoiceAssistant />

      {/* 1. Closed-Loop Pipeline Architecture Banner */}
      <PipelineDiagram />

      {/* 2. Central FarmBrain Decision Engine Card */}
      <DecisionEngineCard zone={zones[0]} />

      {/* 3. Key Performance Indicators (6 AI Module Metrics) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
        {/* Metric 1 */}
        <div 
          onClick={() => setActiveTab('crop-ai')}
          className="glass-card glass-card-interactive" 
          style={{ padding: '16px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>01 Crop Health</span>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(0, 212, 170, 0.1)', color: '#00D4AA' }}>
              <Sprout size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>71%</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#FBBF24', marginTop: '4px' }}>
            <AlertTriangle size={12} /> Moderate Stress (Zone A)
          </div>
        </div>

        {/* Metric 2 */}
        <div 
          onClick={() => setActiveTab('disease-ai')}
          className="glass-card glass-card-interactive" 
          style={{ padding: '16px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>02 Disease Risk</span>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#F87171' }}>
              <Bug size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F87171' }}>HIGH</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#F87171', marginTop: '4px' }}>
            Tomato Early Blight 94%
          </div>
        </div>

        {/* Metric 3 */}
        <div 
          onClick={() => setActiveTab('weather-ai')}
          className="glass-card glass-card-interactive" 
          style={{ padding: '16px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>03 Rain Forecast</span>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: '#60A5FA' }}>
              <CloudSun size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#60A5FA' }}>75%</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#34D399', marginTop: '4px' }}>
            Thunderstorm Expected Today
          </div>
        </div>

        {/* Metric 4 */}
        <div 
          onClick={() => setActiveTab('irrigation-ai')}
          className="glass-card glass-card-interactive" 
          style={{ padding: '16px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>04 Water Stress</span>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(0, 212, 170, 0.1)', color: '#00D4AA' }}>
              <Droplets size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FBBF24' }}>24%</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#34D399', marginTop: '4px' }}>
            Pump Hold (Rain Override)
          </div>
        </div>

        {/* Metric 5 */}
        <div 
          onClick={() => setActiveTab('pest-ai')}
          className="glass-card glass-card-interactive" 
          style={{ padding: '16px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>05 Pest Risk</span>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.1)', color: '#FBBF24' }}>
              <Activity size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FBBF24' }}>MEDIUM</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#9CA3AF', marginTop: '4px' }}>
            Cotton Field 03 Alert
          </div>
        </div>

        {/* Metric 6 */}
        <div 
          onClick={() => setActiveTab('market-ai')}
          className="glass-card glass-card-interactive" 
          style={{ padding: '16px', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>06 Market Spot</span>
            <div style={{ padding: '6px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#34D399' }}>
              <TrendingUp size={16} />
            </div>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#34D399' }}>₹2,450</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#34D399', marginTop: '4px' }}>
            7-Day Trend ↑ (+8%)
          </div>
        </div>
      </div>

      {/* 4. Live Sensor Telemetry Charts & Zone Quick Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Real-time Telemetry Graph */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                Live Ground-Truth Telemetry Stream
              </h3>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
                Soil Moisture vs. Ambient Temperature vs. Solar Irradiance
              </p>
            </div>
            <span className="badge badge-info" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Radio size={12} /> Live MQTT Feed
            </span>
          </div>

          <div style={{ height: '240px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sensorData}>
                <defs>
                  <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D4AA" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00D4AA" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} tickLine={false} />
                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} />
                <Tooltip 
                  contentStyle={{ background: '#0E1626', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="moisture" stroke="#00D4AA" strokeWidth={2} fillOpacity={1} fill="url(#colorMoisture)" name="Soil Moisture (%)" />
                <Area type="monotone" dataKey="temp" stroke="#F59E0B" strokeWidth={2} fillOpacity={1} fill="url(#colorTemp)" name="Temperature (°C)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Zone Digital Twin Snapshot */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', margin: 0 }}>
                Digital Twin Zones
              </h3>
              <button 
                onClick={() => setActiveTab('digital-twin')}
                style={{ background: 'none', border: 'none', color: '#00D4AA', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
              >
                View Map <ArrowUpRight size={14} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {zones.map(z => (
                <div 
                  key={z.id}
                  onClick={() => setActiveTab('digital-twin')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFF' }}>{z.crop} ({z.acres} ac)</div>
                    <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>{z.id.toUpperCase()} • Moisture {z.moisture}%</div>
                  </div>

                  <span className={`badge ${z.status === 'Optimal' ? 'badge-success' : 'badge-warning'}`}>
                    {z.healthScore}% Health
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.75rem', color: '#9CA3AF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Total Farm Coverage:</span>
            <strong style={{ color: '#FFF' }}>23.7 Acres</strong>
          </div>
        </div>
      </div>

      {/* 5. Autonomous Drone Telemetry & Carbon Monetization Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <DroneFlightSim />
        <CarbonCreditTracker />
      </div>
    </div>
  );
}
