import React from 'react';
import { 
  LayoutDashboard, 
  Map, 
  Sprout, 
  Bug, 
  CloudSun, 
  Droplets, 
  Activity, 
  TrendingUp, 
  Cpu,
  Brain,
  ChevronRight
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'FarmBrain Hub', icon: LayoutDashboard, badge: 'Live AI' },
  { id: 'digital-twin', label: 'Digital Twin GIS', icon: Map, badge: '4 Zones' },
  { id: 'crop-ai', label: '01 Crop Intelligence', icon: Sprout },
  { id: 'disease-ai', label: '02 Disease Detection', icon: Bug, badge: 'CV AI' },
  { id: 'weather-ai', label: '03 Weather AI', icon: CloudSun },
  { id: 'irrigation-ai', label: '04 Smart Irrigation', icon: Droplets, badge: 'Auto' },
  { id: 'pest-ai', label: '05 Pest Intelligence', icon: Activity },
  { id: 'market-ai', label: '06 Market Intelligence', icon: TrendingUp },
  { id: 'iot-monitor', label: 'IoT Ground Truth', icon: Cpu, badge: 'MQTT' }
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside style={{
      width: '280px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      background: 'rgba(10, 15, 26, 0.95)',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      zIndex: 50,
      backdropFilter: 'blur(20px)'
    }}>
      {/* Brand Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0 8px 24px 8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #00D4AA 0%, #7C3AED 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(0, 212, 170, 0.4)'
        }}>
          <Brain size={24} color="#ffffff" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            FarmBrain
            <span style={{ fontSize: '0.65rem', background: 'rgba(0, 212, 170, 0.2)', color: '#00D4AA', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(0,212,170,0.3)' }}>NET</span>
          </h2>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>Decision Intelligence v2.4</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '20px', flex: 1, overflowY: 'auto' }}>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#6B7280', padding: '0 12px 8px 12px', fontWeight: 700, letterSpacing: '0.08em' }}>
          Intelligence Modules
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '10px',
                border: 'none',
                background: isActive ? 'linear-gradient(90deg, rgba(0, 212, 170, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)' : 'transparent',
                color: isActive ? '#00D4AA' : '#9CA3AF',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left',
                borderLeft: isActive ? '3px solid #00D4AA' : '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.color = '#F3F4F6';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#9CA3AF';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon size={18} color={isActive ? '#00D4AA' : '#9CA3AF'} />
                <span style={{ fontSize: '0.875rem', fontWeight: isActive ? 600 : 500 }}>
                  {item.label}
                </span>
              </div>
              {item.badge && (
                <span style={{
                  fontSize: '0.65rem',
                  padding: '2px 7px',
                  borderRadius: '12px',
                  background: isActive ? 'rgba(0, 212, 170, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  color: isActive ? '#00D4AA' : '#6B7280',
                  fontWeight: 600
                }}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer System Status */}
      <div style={{
        padding: '14px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="pulse-dot"></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#34D399' }}>IoT Gateway Online</span>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#6B7280', fontFamily: 'var(--font-mono)' }}>MQTT 1883</span>
        </div>
        <div style={{ fontSize: '0.7rem', color: '#9CA3AF', display: 'flex', justifyContent: 'space-between' }}>
          <span>Telemetry Sync:</span>
          <span style={{ color: '#00D4AA', fontFamily: 'var(--font-mono)' }}>2s ago</span>
        </div>
      </div>
    </aside>
  );
}
