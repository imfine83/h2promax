import React from 'react';
import { MapPin } from 'lucide-react';
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
          <div className="mt-8 mb-10 w-full max-w-5xl mx-auto overflow-visible rounded-lg">
            <WorldMap />
          </div>
          <p className="text-white/25 max-w-3xl mx-auto text-sm">{d.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
          {(d.countries || []).map((country, index) => {
            const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff'];
            const color = colors[index % colors.length];
            return (
              <div key={`${country}-${index}`}
                className="group flex items-center gap-2 px-3 py-2.5 transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ border: `1px solid ${color}15`, background: `${color}05` }}>
                <MapPin size={12} style={{ color }} className="flex-shrink-0" />
                <span className="text-xs font-semibold text-white/40 group-hover:text-white/80 transition-colors tracking-wider"
                      style={{ fontFamily: 'Rajdhani' }}>
                  {country}
                </span>
              </div>
            );
          })}
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
