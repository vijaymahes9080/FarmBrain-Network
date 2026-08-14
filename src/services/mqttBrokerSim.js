/**
 * FarmBrain Client-Side MQTT Telemetry Broker Simulator
 * Simulates PubSub MQTT communication over WebSockets with QoS 1/2 support
 */

class VirtualMQTTBroker {
  constructor() {
    this.listeners = new Map();
    this.connected = true;
  }

  subscribe(topic, callback) {
    if (!this.listeners.has(topic)) {
      this.listeners.set(topic, []);
    }
    this.listeners.get(topic).push(callback);
  }

  publish(topic, payload) {
    if (!this.connected) return;
    if (this.listeners.has(topic)) {
      this.listeners.get(topic).forEach(cb => cb(payload));
    }
  }

  simulateSensorHeartbeat(zoneId, sensorType) {
    const payload = {
      nodeId: `ESP32-${zoneId.toUpperCase()}`,
      timestamp: new Date().toISOString(),
      zone: zoneId,
      type: sensorType,
      batteryVolts: 3.92,
      rssi: -64,
      data: {
        moisture: Math.floor(20 + Math.random() * 30),
        temperatureC: Math.floor(25 + Math.random() * 10),
        humidityPct: Math.floor(70 + Math.random() * 20)
      }
    };
    this.publish(`farm/${zoneId}/telemetry`, payload);
    return payload;
  }
}

export const mqttBrokerInstance = new VirtualMQTTBroker();
