import React from 'react';
import { Leaf, DollarSign, Award } from 'lucide-react';

export default function CarbonCreditTracker() {
  const acres = 23.7;
  const tCO2eSavedPerAcre = 1.42; // Via precision drip + solar energy + zero-tillage
  const totalCarbonCredits = (acres * tCO2eSavedPerAcre).toFixed(1);
  const creditValueUsd = Math.round(totalCarbonCredits * 28.5); // $28.5 per metric ton

  return (
    <div className="glass-card" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFF', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Leaf size={16} color="#10B981" /> Regenerative Carbon Credit Monetization
        </h4>
        <span className="badge badge-success">Verified ISO 14064</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', background: 'rgba(16, 185, 129, 0.08)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Carbon Sequestered</div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#34D399' }}>{totalCarbonCredits} tCO₂e</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Estimated Earnings</div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FBBF24' }}>${creditValueUsd} USD</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: '#9CA3AF' }}>Verification Status</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60A5FA', marginTop: '2px' }}>VERRA Pending</div>
        </div>
      </div>
    </div>
  );
}
