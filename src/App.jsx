import React, { useState } from 'react';
import Sidebar, { NAV_ITEMS } from './components/Sidebar';
import TopBar from './components/TopBar';

import Dashboard from './pages/Dashboard';
import DigitalTwin from './pages/DigitalTwin';
import CropIntelligence from './pages/CropIntelligence';
import DiseaseAI from './pages/DiseaseAI';
import WeatherAI from './pages/WeatherAI';
import IrrigationAI from './pages/IrrigationAI';
import PestAI from './pages/PestAI';
import MarketAI from './pages/MarketAI';
import IoTMonitor from './pages/IoTMonitor';

import { INITIAL_FARM_ZONES, SENSOR_TELEMETRY_SERIES } from './data/farmData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [zones, setZones] = useState(INITIAL_FARM_ZONES);
  const [sensorData, setSensorData] = useState(SENSOR_TELEMETRY_SERIES);

  // Simulation handler to simulate live sensor telemetry shifts
  const handleSimulateTrigger = () => {
    setSensorData(prev => prev.map(item => ({
      ...item,
      moisture: Math.max(15, Math.min(80, item.moisture + Math.floor(Math.random() * 7) - 3)),
      temp: Math.max(20, Math.min(42, item.temp + Math.floor(Math.random() * 3) - 1))
    })));

    setZones(prev => prev.map(z => ({
      ...z,
      moisture: Math.max(18, Math.min(85, z.moisture + Math.floor(Math.random() * 5) - 2))
    })));
  };

  const currentNav = NAV_ITEMS.find(item => item.id === activeTab);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#070A12' }}>
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Navigation Bar */}
        <TopBar 
          activeTabTitle={currentNav ? currentNav.label : 'FarmBrain Hub'} 
          onSimulateTrigger={handleSimulateTrigger}
        />

        {/* View Switcher */}
        <main style={{ padding: '32px', flex: 1 }}>
          {activeTab === 'dashboard' && (
            <Dashboard zones={zones} sensorData={sensorData} setActiveTab={setActiveTab} />
          )}
          {activeTab === 'digital-twin' && (
            <DigitalTwin zones={zones} />
          )}
          {activeTab === 'crop-ai' && (
            <CropIntelligence zones={zones} />
          )}
          {activeTab === 'disease-ai' && (
            <DiseaseAI />
          )}
          {activeTab === 'weather-ai' && (
            <WeatherAI />
          )}
          {activeTab === 'irrigation-ai' && (
            <IrrigationAI />
          )}
          {activeTab === 'pest-ai' && (
            <PestAI zones={zones} />
          )}
          {activeTab === 'market-ai' && (
            <MarketAI />
          )}
          {activeTab === 'iot-monitor' && (
            <IoTMonitor sensorData={sensorData} />
          )}
        </main>
      </div>
    </div>
  );
}
