import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ShoppingBag, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { MARKET_PRICES_DATA } from '../data/farmData';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

export default function MarketAI() {
  const [selectedCrop, setSelectedCrop] = useState('tomato');

  const mandiPrices = [
    { mandi: 'Coimbatore Main APMC', tomato: '₹2,450', paddy: '₹2,280', cotton: '₹7,100', status: 'Favorable' },
    { mandi: 'Pollachi Regional Mandi', tomato: '₹2,420', paddy: '₹2,260', cotton: '₹7,080', status: 'Moderate' },
    { mandi: 'Madurai APMC Hub', tomato: '₹2,480', paddy: '₹2,310', cotton: '₹7,150', status: 'Highest Price' },
    { mandi: 'Tirupur Agri Market', tomato: '₹2,410', paddy: '₹2,250', cotton: '₹7,040', status: 'Lower Arrival' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Banner */}
      <div className="glass-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="badge badge-success">Module 06</span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>APMC Mandi Time-Series Forecast</span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
            Market Price Forecasting & Sell/Hold Decision Engine
          </h2>
        </div>

        <span className="badge badge-purple" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={12} /> ARIMA + LSTM Model
        </span>
      </div>

      {/* Hero Recommendation Banner (As specified in section 3 & 6 of user prompt) */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.4)',
        borderRadius: '16px',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24' }}>
              <TrendingUp size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#FBBF24', textTransform: 'uppercase', fontWeight: 700 }}>
                FARMBRAIN MARKET RECOMMENDATION
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF', margin: 0 }}>
                "Current price is favorable. Consider selling 40–60% of harvested stock."
              </h3>
            </div>
          </div>
          <span className="badge badge-success">AI Confidence: 78%</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Current Mandi Spot</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34D399' }}>₹2,450 / quintal</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>7-Day Trend Forecast</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#34D399' }}>↑ +5.3% (₹2,580)</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Arrival Velocity</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FBBF24' }}>Moderate (-8%)</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>Action Recommended</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00D4AA' }}>Partial Sell (40-60%)</div>
          </div>
        </div>
      </div>

      {/* Mandi Time-Series Price Trend Chart */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', margin: 0 }}>
              Historical & Projected Mandi Prices (₹ / Quintal)
            </h3>
            <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>
              Includes 7-day AI predictive trajectory
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {['tomato', 'paddy', 'cotton', 'groundnut'].map(crop => (
              <button
                key={crop}
                onClick={() => setSelectedCrop(crop)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  background: selectedCrop === crop ? '#00D4AA' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedCrop === crop ? '#042F26' : '#9CA3AF'
                }}
              >
                {crop}
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: '240px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MARKET_PRICES_DATA}>
              <XAxis dataKey="date" stroke="#6B7280" fontSize={12} tickLine={false} />
              <YAxis stroke="#6B7280" fontSize={12} tickLine={false} />
              <Tooltip contentStyle={{ background: '#0E1626', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey={selectedCrop} stroke="#00D4AA" strokeWidth={3} dot={{ r: 4 }} name="Price (₹/Quintal)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional APMC Mandi Comparison Table */}
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px' }}>
          Regional APMC Mandi Real-Time Price Comparison
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {mandiPrices.map((m, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF' }}>{m.mandi}</div>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Status: {m.status}</div>
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Tomato</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#34D399' }}>{m.tomato}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Paddy</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#60A5FA' }}>{m.paddy}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Cotton</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#C084FC' }}>{m.cotton}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
