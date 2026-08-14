import React, { useState } from 'react';
import { Sun, Zap, Battery } from 'lucide-react';

export default function SolarIrrigationCalc() {
  const [hp, setHp] = useState(5.0); // 5 HP pump
  const [headMeter, setHeadMeter] = useState(60); // 60 meters water head

  const requiredKw = (hp * 0.746).toFixed(2);
  const recommendedSolarKw = (requiredKw * 1.25).toFixed(2); // 25% safety margin for solar panel losses
  const dailyLitres = Math.round(hp * 2400 * 6); // 6 peak sun hours

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sun size={16} color="#FBBF24" /> Solar Irrigation Energy Calculator
        </h4>
        <span className="badge badge-warning">Clean Energy</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
        <div>
          <label style={{ fontSize: '0.7rem', color: '#9CA3AF', display: 'block' }}>Pump Rating (HP): {hp} HP</label>
          <input 
            type="range" 
            min="1" 
            max="15" 
            step="0.5" 
            value={hp} 
            onChange={(e) => setHp(parseFloat(e.target.value))}
            style={{ width: '100%' }} 
          />
        </div>
        <div>
          <label style={{ fontSize: '0.7rem', color: '#9CA3AF', display: 'block' }}>Borewell Total Head: {headMeter} m</label>
          <input 
            type="range" 
            min="20" 
            max="150" 
            step="5" 
            value={headMeter} 
            onChange={(e) => setHeadMeter(parseInt(e.target.value))}
            style={{ width: '100%' }} 
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '8px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Power Demand</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FBBF24' }}>{requiredKw} kW</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Solar Array Req</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00D4AA' }}>{recommendedSolarKw} kWp</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Daily Discharge</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#60A5FA' }}>{dailyLitres.toLocaleString()} L</div>
        </div>
      </div>
    </div>
  );
}
