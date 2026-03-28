import React from 'react';
import { Factory, ShieldCheck, Settings, Globe, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = { factory: Factory, shield: ShieldCheck, settings: Settings, globe: Globe, rocket: Rocket };
const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff'];

const ProductionSection = () => {
  const { t } = useLanguage();
  const p = t.production;

  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="production">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#00f0ff]/50 font-mono-cyber">{p.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-4" style={{ fontFamily: 'Orbitron' }}>
              {p.title1} <span className="text-[#00f0ff]" style={{ textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>{p.title2}</span>
            </h2>
            <p className="text-white/30 leading-relaxed mb-8 text-sm">{p.description}</p>

            <div className="relative border border-[#39ff14]/15 p-8 bg-[#39ff14]/[0.03] overflow-hidden">
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#39ff14]" />
              <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#39ff14]" />
              <Factory size={48} className="text-[#39ff14]/40 mb-4" />
              <p className="text-[#39ff14] font-bold text-lg" style={{ fontFamily: 'Orbitron', fontSize: '14px' }}>{p.facilityTitle}</p>
              <p className="text-white/30 text-sm mt-1 font-mono-cyber">{p.facilityDesc}</p>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#39ff14]/10" />
            </div>
          </div>

          <div className="space-y-3">
            {p.stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Factory;
              const color = colors[index % colors.length];
              return (
                <div key={index} className="group flex items-start gap-4 p-4 transition-all duration-500 hover:bg-white/[0.02]"
                     style={{ border: `1px solid ${color}10` }}>
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                       style={{ border: `1px solid ${color}30`, boxShadow: `0 0 8px ${color}10` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white/80 text-sm" style={{ fontFamily: 'Orbitron', fontSize: '11px' }}>{stat.title}</h3>
                    <p className="text-xs text-white/30 leading-relaxed mt-1">{stat.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="p-5 bg-[#39ff14]/[0.08] border border-[#39ff14]/20"
                 style={{ boxShadow: '0 0 20px rgba(57,255,20,0.05)' }}>
              <h3 className="font-bold text-[#39ff14] text-sm" style={{ fontFamily: 'Orbitron', fontSize: '11px' }}>{p.boilerTitle}</h3>
              <p className="text-xs text-white/30 mt-1">{p.boilerDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
