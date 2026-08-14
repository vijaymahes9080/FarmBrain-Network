import React from 'react';
import { 
  Radio, 
  Camera, 
  Satellite, 
  Cloud, 
  Brain, 
  Bug, 
  CloudSun, 
  Droplets, 
  TrendingUp, 
  Bell, 
  Zap, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function PipelineDiagram() {
  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Closed-Loop Intelligence Pipeline Architecture
            <Sparkles size={16} color="#00D4AA" />
          </h3>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
            Continuous Observe → Understand → Predict → Decide → Act → Learn Loop
          </p>
        </div>
        <span className="badge badge-purple">Real-Time Dataflow</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12px',
        alignItems: 'stretch',
        position: 'relative'
      }}>
        {/* Step 1: Sense */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#00D4AA', textTransform: 'uppercase', marginBottom: '10px' }}>
            1. SENSE DATA
          </div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(0, 212, 170, 0.1)', color: '#00D4AA' }} title="IoT Sensors">
              <Radio size={18} />
            </div>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: '#60A5FA' }} title="Drone Imaging">
              <Camera size={18} />
            </div>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.1)', color: '#C084FC' }} title="Satellite Data">
              <Satellite size={18} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E5E7EB' }}>Ground + Air + Space</div>
          <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '4px' }}>ESP32, Sentinel-2, Leaflet Drones</div>
        </div>

        {/* Step 2: Data Hub */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', marginBottom: '10px' }}>
            2. FARM DATA HUB
          </div>
          <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.15)', color: '#60A5FA', marginBottom: '12px' }}>
            <Cloud size={20} />
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E5E7EB' }}>MQTT Broker</div>
          <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '4px' }}>FastAPI + PostGIS Ingestion</div>
        </div>

        {/* Step 3: FarmBrain AI Engines */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 212, 170, 0.05) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#C084FC', textTransform: 'uppercase', marginBottom: '10px' }}>
            3. FARMBRAIN AI
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', marginBottom: '10px', width: '100%' }}>
            <span title="Disease AI" style={{ padding: '4px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.2)', color: '#F87171', display: 'flex', justifyContent: 'center' }}><Bug size={14} /></span>
            <span title="Weather AI" style={{ padding: '4px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', display: 'flex', justifyContent: 'center' }}><CloudSun size={14} /></span>
            <span title="Pest AI" style={{ padding: '4px', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24', display: 'flex', justifyContent: 'center' }}><Bug size={14} /></span>
            <span title="Irrigation AI" style={{ padding: '4px', borderRadius: '4px', background: 'rgba(0, 212, 170, 0.2)', color: '#34D399', display: 'flex', justifyContent: 'center' }}><Droplets size={14} /></span>
            <span title="Market AI" style={{ padding: '4px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', display: 'flex', justifyContent: 'center' }}><TrendingUp size={14} /></span>
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E5E7EB' }}>7 Specialized AI Models</div>
          <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '4px' }}>PyTorch + YOLO + TimeSeries</div>
        </div>

        {/* Step 4: Decision Engine */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
          border: '1px solid rgba(0, 212, 170, 0.4)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxShadow: '0 0 20px rgba(0, 212, 170, 0.15)'
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#00D4AA', textTransform: 'uppercase', marginBottom: '10px' }}>
            4. DECISION ENGINE
          </div>
          <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(0, 212, 170, 0.2)', color: '#00D4AA', marginBottom: '12px' }}>
            <Brain size={20} />
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>Actionable Synthesis</div>
          <div style={{ fontSize: '0.7rem', color: '#34D399', marginTop: '4px' }}>"What should farmer do now?"</div>
        </div>

        {/* Step 5: Closed-Loop Act & Learn */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#FBBF24', textTransform: 'uppercase', marginBottom: '10px' }}>
            5. ACT & RE-LEARN
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24' }} title="Farmer Mobile Alert">
              <Bell size={18} />
            </div>
            <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#34D399' }} title="Solenoid Valve Control">
              <Zap size={18} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E5E7EB' }}>Closed-Loop Learning</div>
          <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <RotateCcw size={10} color="#00D4AA" /> Feeds back into AI
          </div>
        </div>
      </div>
    </div>
  );
}
