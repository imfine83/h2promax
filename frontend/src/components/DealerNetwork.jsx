import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import WorldMap from './ui/WorldMap';

const DealerNetwork = () => {
  const { t } = useLanguage();
  const d = t.dealerNetwork;

  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="dealer-map">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#ffe600]/50 font-mono-cyber">{d.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            {d.title1} <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>{d.title2}</span>
          </h2>
          <p className="text-white/25 max-w-3xl mx-auto text-sm mb-10">{d.subtitle}</p>
          <div className="mb-12 w-full max-w-5xl mx-auto overflow-visible rounded-lg">
            <WorldMap countries={d.countries || []} />
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => { const el = document.getElementById('dealers'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 bg-[#39ff14] text-[#0a0a0f] font-bold text-xs tracking-[0.15em] cyber-clip-sm transition-all"
            style={{ fontFamily: 'Orbitron', boxShadow: '0 0 20px rgba(57,255,20,0.2)' }}>
            {d.becomeDealer}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;
