import React from 'react';
import { Award, Wrench, BookOpen, Headphones, Eye, GraduationCap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const benefitIcons = [Award, Wrench, BookOpen, Headphones, Eye, GraduationCap];
const benefitColors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff', '#39ff14'];

const BecomeDealerSection = () => {
  const { t } = useLanguage();
  const d = t.dealers;

  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="dealers">
      <div className="absolute inset-0 cyber-stripes" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffe600]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#ffe600]/50 font-mono-cyber">{d.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            {d.title1} <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>{d.title2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {d.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index] || Award;
            const color = benefitColors[index];
            return (
              <div key={index} className="group p-5 transition-all duration-500 hover:bg-white/[0.02]"
                   style={{ border: `1px solid ${color}10` }}>
                <div className="w-10 h-10 flex items-center justify-center mb-3"
                     style={{ border: `1px solid ${color}30`, boxShadow: `0 0 8px ${color}10` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="font-bold text-white/80 text-sm mb-1" style={{ fontFamily: 'Orbitron', fontSize: '11px' }}>{benefit.title}</h3>
                <p className="text-xs text-white/25 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <h3 className="text-xl font-black text-white text-center mb-10" style={{ fontFamily: 'Orbitron', fontSize: '16px' }}>
            {d.howToTitle1} <span className="text-[#00f0ff]">{d.howToTitle2}</span> {d.howToTitle3}
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {d.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-5 h-full" style={{ border: '1px solid rgba(0,240,255,0.1)', background: 'rgba(0,240,255,0.02)' }}>
                  <span className="text-4xl font-black font-mono-cyber text-[#00f0ff]/10">{step.step}</span>
                  <h4 className="font-bold text-white/70 mt-2 mb-1 text-sm" style={{ fontFamily: 'Orbitron', fontSize: '10px' }}>{step.title}</h4>
                  {step.description && <p className="text-xs text-white/20">{step.description}</p>}
                </div>
                {index < d.steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight size={14} className="text-[#00f0ff]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#39ff14]/20 p-8 md:p-12" style={{ background: 'rgba(57,255,20,0.03)', boxShadow: '0 0 30px rgba(57,255,20,0.05)' }}>
          <h3 className="text-lg font-black text-[#39ff14] mb-6" style={{ fontFamily: 'Orbitron', fontSize: '14px' }}>{d.requirementsTitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {d.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 border border-[#39ff14]/30">
                  <span className="text-[10px] font-bold text-[#39ff14] font-mono-cyber">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-xs text-white/30 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button onClick={() => { const el = document.getElementById('contacts'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3 bg-[#39ff14] text-[#0a0a0f] font-bold text-xs tracking-[0.15em] cyber-clip-sm"
              style={{ fontFamily: 'Orbitron', boxShadow: '0 0 15px rgba(57,255,20,0.2)' }}>
              {d.becomeDealer}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDealerSection;
