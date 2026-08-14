import React, { useState } from 'react';
import { 
  Bell, 
  Satellite, 
  Wifi, 
  RefreshCw, 
  User, 
  CheckCircle2, 
  AlertTriangle,
  Zap
} from 'lucide-react';

export default function TopBar({ activeTabTitle, onSimulateTrigger }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [simulating, setSimulating] = useState(false);

  const handleSimulate = () => {
    setSimulating(true);
    if (onSimulateTrigger) onSimulateTrigger();
    setTimeout(() => setSimulating(false), 800);
  };

  return (
    <header style={{
      height: '70px',
      background: 'rgba(10, 15, 26, 0.8)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }}>
      {/* Title & Path */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#6B7280' }}>
          <span>FarmBrain Network</span>
          <span>/</span>
          <span style={{ color: '#00D4AA' }}>{activeTabTitle}</span>
        </div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
          {activeTabTitle}
        </h1>
      </div>

      {/* Network Status Badges & Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Status Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 12px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#D1D5DB' }}>
            <Satellite size={14} color="#00D4AA" />
            <span>Sentinel-2 L2A</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#D1D5DB' }}>
            <Wifi size={14} color="#34D399" />
            <span>14 ESP32 Sensors</span>
          </div>
        </div>

        {/* Live Simulation Button */}
        <button
          onClick={handleSimulate}
          className="btn-secondary"
          style={{ padding: '8px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <RefreshCw size={14} className={simulating ? 'spin' : ''} style={{ animation: simulating ? 'spin 0.8s linear infinite' : 'none' }} />
          <span>Simulate Sensor Telemetry</span>
        </button>

        {/* Notifications Icon */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9CA3AF',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <Bell size={18} />
            <span style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#EF4444'
            }}></span>
          </button>

          {/* Notifications Dropdown */}
          {notificationsOpen && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              width: '320px',
              background: '#0E1626',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '14px',
              padding: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              zIndex: 100
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#fff', margin: 0 }}>Farm Brain Alerts</h4>
                <span className="badge badge-danger">2 Critical</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #EF4444' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F87171' }}>Fungal Disease Risk (Zone A)</div>
                  <div style={{ fontSize: '0.75rem', color: '#D1D5DB' }}>Humidity 87% + Temp 32°C favor Tomato Early Blight.</div>
                  <div style={{ fontSize: '0.65rem', color: '#6B7280', marginTop: '4px' }}>12 mins ago</div>
                </div>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #F59E0B' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FBBF24' }}>Irrigation Auto-Override</div>
                  <div style={{ fontSize: '0.75rem', color: '#D1D5DB' }}>Pump activation suspended — 75% rain forecasted.</div>
                  <div style={{ fontSize: '0.65rem', color: '#6B7280', marginTop: '4px' }}>34 mins ago</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User / Developer Card */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#fff',
            fontSize: '0.85rem'
          }}>
            VM
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#F3F4F6' }}>Vijay Mahes</div>
            <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Lead Engineer</div>
          </div>
        </div>
      </div>
    </header>
  );
}
