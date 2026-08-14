import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Wifi, 
  BatteryCharging, 
  Terminal, 
  RefreshCw, 
  CheckCircle2, 
  Radio,
  Zap,
  Download
} from 'lucide-react';

export default function IoTMonitor({ sensorData }) {
  const [logs, setLogs] = useState([
    { id: 1, time: "21:02:14", topic: "farm/zone-a/moisture", payload: '{"moisture": 24, "unit": "%"}', qos: 1 },
    { id: 2, time: "21:02:16", topic: "farm/zone-a/temp", payload: '{"temp": 32, "unit": "C"}', qos: 1 },
    { id: 3, time: "21:02:18", topic: "farm/zone-b/moisture", payload: '{"moisture": 68, "unit": "%"}', qos: 1 },
    { id: 4, time: "21:02:20", topic: "farm/actuator/pump2", payload: '{"status": "STANDBY", "reason": "RAIN_LOCK"}', qos: 2 }
  ]);

  const nodes = [
    { id: "ESP32-NODE-01", location: "Zone A — Field 01", type: "Soil + Temp Sensor", status: "Online", battery: "98%", rssi: "-62 dBm" },
    { id: "ESP32-NODE-02", location: "Zone A — Solenoid Valve", type: "Pump Controller", status: "Online", battery: "100%", rssi: "-58 dBm" },
    { id: "ESP32-NODE-03", location: "Zone B — Field 02", type: "Soil Moisture Node", status: "Online", battery: "92%", rssi: "-67 dBm" },
    { id: "ESP32-NODE-04", location: "Zone C — Field 03", type: "Weather Micro-Station", status: "Online", battery: "85%", rssi: "-71 dBm" },
    { id: "ESP32-NODE-05", location: "Zone D — Orchard", type: "Soil + pH Sensor", status: "Online", battery: "95%", rssi: "-60 dBm" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-info">Level 1 Telemetry</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>MQTT / LoRaWAN Node Stream</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            IoT Ground-Truth Telemetry & Node Monitor
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary" style={{ fontSize: '0.8rem' }}>
            <Download size={14} /> Export CSV Telemetry
          </button>
        </div>
      </div>

      {/* Grid: Nodes Grid (Left) + MQTT Live Log Stream (Right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        {/* Hardware Nodes Cards */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
            Deployed ESP32 Nodes & Gateway Status
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {nodes.map(node => (
              <div key={node.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(0, 212, 170, 0.1)', color: '#00D4AA' }}>
                    <Cpu size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)' }}>{node.id}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{node.location} • {node.type}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>RSSI: <strong style={{ color: '#FFF' }}>{node.rssi}</strong></div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Bat: <strong style={{ color: '#34D399' }}>{node.battery}</strong></div>
                  <span className="badge badge-success">Online</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live MQTT Protocol Terminal */}
        <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', background: '#070A12' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={16} color="#00D4AA" /> MQTT Packet Ingestion Console
            </h3>
            <span style={{ fontSize: '0.65rem', color: '#34D399', fontFamily: 'var(--font-mono)' }}>CONNECTED :1883</span>
          </div>

          <div style={{
            background: '#040711',
            borderRadius: '10px',
            padding: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            overflowY: 'auto',
            border: '1px solid rgba(255,255,255,0.06)',
            maxHeight: '300px'
          }}>
            {logs.map(log => (
              <div key={log.id} style={{ color: '#D1D5DB', lineHeight: 1.4 }}>
                <span style={{ color: '#6B7280' }}>[{log.time}]</span>{' '}
                <span style={{ color: '#00D4AA' }}>{log.topic}</span>{' '}
                <span style={{ color: '#FBBF24' }}>{log.payload}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
