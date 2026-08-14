import React, { useState, useEffect } from 'react';
import { Camera, Navigation, Play, Pause, RotateCcw } from 'lucide-react';

export default function DroneFlightSim() {
  const [flying, setFlying] = useState(false);
  const [altitude, setAltitude] = useState(45);
  const [battery, setBattery] = useState(94);
  const [scanProgress, setScanProgress] = useState(38);

  useEffect(() => {
    let interval;
    if (flying) {
      interval = setInterval(() => {
        setScanProgress(prev => (prev >= 100 ? 0 : prev + 2));
        setBattery(prev => Math.max(10, prev - 0.2));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [flying]);

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Navigation size={16} color="#00D4AA" /> Autonomous Drone Flight Telemetry
          </h4>
          <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>DJI Mavic 3 Multispectral Payload Mission</div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setFlying(!flying)}
            className="btn-primary"
            style={{ fontSize: '0.75rem', padding: '6px 12px' }}
          >
            {flying ? <Pause size={12} /> : <Play size={12} />}
            {flying ? "Pause Mission" : "Launch Mission"}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Flight Status</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: flying ? '#34D399' : '#FBBF24' }}>
            {flying ? "IN_FLIGHT_SCANNING" : "LOITERING"}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Altitude (AGL)</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF' }}>{altitude} meters</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Drone Battery</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34D399' }}>{battery.toFixed(0)}%</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Grid Scan Coverage</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00D4AA' }}>{scanProgress}%</div>
        </div>
      </div>
    </div>
  );
}
