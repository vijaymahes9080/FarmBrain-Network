import React, { useState } from 'react';
import { 
  Map, 
  Layers, 
  Satellite, 
  Camera, 
  Brain, 
  Droplets, 
  Bug, 
  Activity, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export default function DigitalTwin({ zones }) {
  const [selectedZone, setSelectedZone] = useState(zones[0]);
  const [viewMode, setViewMode] = useState('health'); // health | satellite | drone

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header Info */}
      <div className="glass-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Farm Digital Twin & Spatial GIS Engine
            <span className="badge badge-purple">Spatial Grid</span>
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#9CA3AF', margin: 0 }}>
            Interactive multi-zone visualization linking Satellite (Sentinel-2) + Drone + Ground IoT
          </p>
        </div>

        {/* View Mode Selectors */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '4px', borderRadius: '10px' }}>
          <button
            onClick={() => setViewMode('health')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: viewMode === 'health' ? '#00D4AA' : 'transparent',
              color: viewMode === 'health' ? '#042F26' : '#9CA3AF'
            }}
          >
            Health Map
          </button>
          <button
            onClick={() => setViewMode('satellite')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: viewMode === 'satellite' ? '#8B5CF6' : 'transparent',
              color: viewMode === 'satellite' ? '#FFF' : '#9CA3AF'
            }}
          >
            NDVI Satellite
          </button>
          <button
            onClick={() => setViewMode('drone')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: viewMode === 'drone' ? '#3B82F6' : 'transparent',
              color: viewMode === 'drone' ? '#FFF' : '#9CA3AF'
            }}
          >
            Drone Thermal
          </button>
        </div>
      </div>

      {/* Grid Layout: GIS Map (Left) + Selected Zone Inspector (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '20px' }}>
        {/* Spatial Field Map Container */}
        <div className="glass-card" style={{ padding: '24px', minHeight: '520px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase' }}>
              FIELD VECTOR CANVAS • COIMBATORE FARM SEC 04
            </span>
            <span className="badge badge-info" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Satellite size={12} /> Sentinel-2 Tile: 43QVG
            </span>
          </div>

          {/* Interactive Field Polygon Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '16px',
            height: '420px'
          }}>
            {zones.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              let zoneBg = 'rgba(0, 212, 170, 0.1)';
              let borderColor = 'rgba(0, 212, 170, 0.4)';
              if (zone.healthScore < 75) {
                zoneBg = 'rgba(239, 68, 68, 0.12)';
                borderColor = 'rgba(239, 68, 68, 0.5)';
              } else if (zone.healthScore < 85) {
                zoneBg = 'rgba(245, 158, 11, 0.12)';
                borderColor = 'rgba(245, 158, 11, 0.5)';
              }

              if (viewMode === 'satellite') {
                zoneBg = `rgba(16, 185, 129, ${zone.satelliteNdvi * 0.4})`;
                borderColor = '#10B981';
              }

              return (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  style={{
                    background: zoneBg,
                    border: isSelected ? `2px solid ${borderColor}` : `1px solid ${borderColor}`,
                    borderRadius: '16px',
                    padding: '20px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? `0 0 25px ${borderColor}` : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between'
                  }}
                >
                  {/* Drone Sweep Overlay Line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00D4AA, transparent)',
                    opacity: isSelected ? 1 : 0
                  }}></div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700 }}>
                        {zone.id.toUpperCase()}
                      </div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>
                        {zone.crop}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#D1D5DB', marginTop: '2px' }}>
                        {zone.stage}
                      </div>
                    </div>

                    <span className={`badge ${zone.status === 'Optimal' ? 'badge-success' : 'badge-warning'}`}>
                      {zone.healthScore}%
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Moisture</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00D4AA' }}>{zone.moisture}%</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Temp</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FBBF24' }}>{zone.temp}°C</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>NDVI</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#C084FC' }}>{zone.satelliteNdvi}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Zone Deep Inspector Panel */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-purple">{selectedZone.id.toUpperCase()}</span>
              <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{selectedZone.acres} Acres</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
              {selectedZone.name}
            </h3>
          </div>

          {/* Drone Image Scan Mock */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '160px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img 
              src={selectedZone.droneScanUrl} 
              alt="Drone Scan" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', color: '#00D4AA', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Camera size={12} /> High-Res Drone Imagery (4K)
            </div>
          </div>

          {/* Risk Badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Disease Risk</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedZone.diseaseRisk === 'HIGH' ? '#F87171' : '#34D399' }}>
                {selectedZone.diseaseRisk}
              </div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Pest Risk</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedZone.pestRisk === 'HIGH' ? '#F87171' : '#FBBF24' }}>
                {selectedZone.pestRisk}
              </div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '8px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Water Stress</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: selectedZone.waterStress === 'HIGH' ? '#F87171' : '#34D399' }}>
                {selectedZone.waterStress}
              </div>
            </div>
          </div>

          {/* FarmBrain Zone AI Output */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1) 0%, rgba(124, 58, 237, 0.08) 100%)',
            border: '1px solid rgba(0, 212, 170, 0.3)',
            borderRadius: '12px',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.7rem', color: '#00D4AA', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Brain size={14} /> Zone AI Decision Intelligence
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFF' }}>
              "{selectedZone.aiRecommendation}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
