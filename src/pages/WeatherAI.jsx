import React from 'react';
import { 
  CloudSun, 
  CloudRain, 
  Thermometer, 
  Wind, 
  Sun, 
  AlertTriangle, 
  CloudLightning,
  Sparkles
} from 'lucide-react';
import { WEATHER_FORECAST_DATA } from '../data/farmData';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

export default function WeatherAI() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-info">Module 03</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Farm Micro-Climate Intelligence</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            Hyper-Local Weather Intelligence Engine
          </h2>
        </div>

        <span className="badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={12} /> OpenWeather + Sensor Fusion
        </span>
      </div>

      {/* Grid: 7-Day Forecast Chart + Microclimate Warnings */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '20px' }}>
        {/* 7-Day Temperature & Rain Prob Chart */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
              7-Day Microclimate Forecast Metrics
            </h3>
            <span className="badge badge-purple">Resolution: 1km Grid</span>
          </div>

          <div style={{ height: '240px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={WEATHER_FORECAST_DATA}>
                <XAxis dataKey="day" stroke="#6B7280" fontSize={12} tickLine={false} />
                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0E1626', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
                <Line type="monotone" dataKey="tempMax" stroke="#F59E0B" strokeWidth={2} name="Max Temp (°C)" />
                <Line type="monotone" dataKey="rainProb" stroke="#3B82F6" strokeWidth={2} name="Rain Probability (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Micro-Climate Farm Warning Panel */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
            Farm-Specific Climate Warnings
          </h3>

          <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #EF4444', padding: '12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F87171', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CloudLightning size={14} /> Heavy Thunderstorm Alert (Today 16:00)
            </div>
            <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '4px' }}>
              75% rain probability. Secure open harvested grain bags in Zone B.
            </div>
          </div>

          <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #F59E0B', padding: '12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FBBF24', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <AlertTriangle size={14} /> High Humidity Disease Window
            </div>
            <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '4px' }}>
              Humidity exceeding 85% for 14 consecutive hours.
            </div>
          </div>
        </div>
      </div>

      {/* 7-Day Detailed Forecast Grid Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
        {WEATHER_FORECAST_DATA.map((w, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '14px 10px', textAlign: 'center', border: idx === 0 ? '1px solid #00D4AA' : '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: idx === 0 ? '#00D4AA' : '#9CA3AF' }}>{w.day}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF', margin: '6px 0' }}>{w.tempMax}°C</div>
            <div style={{ fontSize: '0.7rem', color: '#60A5FA' }}>{w.rainProb}% Rain</div>
            <div style={{ fontSize: '0.65rem', color: '#9CA3AF', marginTop: '4px' }}>{w.condition}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
