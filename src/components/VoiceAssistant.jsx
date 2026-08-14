import React, { useState } from 'react';
import { Mic, MicOff, Volume2, Sparkles } from 'lucide-react';

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const handleVoiceToggle = () => {
    if (!listening) {
      setListening(true);
      setTranscript('Should I irrigate Zone A today?');
      setTimeout(() => {
        setResponse('FarmBrain recommends holding irrigation in Zone A. Rain probability is 75% today.');
        setListening(false);
      }, 1500);
    } else {
      setListening(false);
    }
  };

  return (
    <div className="glass-card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(0,212,170,0.3)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={handleVoiceToggle}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: 'none',
            background: listening ? '#EF4444' : 'linear-gradient(135deg, #00D4AA 0%, #7C3AED 100%)',
            color: '#FFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: listening ? '0 0 15px rgba(239, 68, 68, 0.6)' : '0 0 15px rgba(0, 212, 170, 0.4)'
          }}
        >
          {listening ? <MicOff size={18} /> : <Mic size={18} />}
        </button>

        <div>
          <div style={{ fontSize: '0.75rem', color: '#00D4AA', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={12} /> FarmBrain Voice Assistant (Tamil / English)
          </div>
          <div style={{ fontSize: '0.85rem', color: '#E5E7EB', fontStyle: transcript ? 'normal' : 'italic' }}>
            {transcript ? `"${transcript}"` : "Click mic to ask: 'What is the disease status in Zone A?'"}
          </div>
        </div>
      </div>

      {response && (
        <div style={{ background: 'rgba(0, 212, 170, 0.1)', border: '1px solid rgba(0, 212, 170, 0.3)', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Volume2 size={14} /> {response}
        </div>
      )}
    </div>
  );
}
