import React, { useState } from 'react';
import { Droplets, Wind, Flame, Zap, ChevronRight } from 'lucide-react';

const steps = [
  { num: 1, title: 'Splits water into H2 and O2', desc: 'Works parallel to standard components', icon: Droplets, color: '#39ff14' },
  { num: 2, title: 'Mixes with air at intake', desc: 'Does not require calibration', icon: Wind, color: '#00f0ff' },
  { num: 3, title: 'Enriched mixture burns in cylinders', desc: 'Does not interfere with vehicle electronics', icon: Flame, color: '#ff2d95' },
  { num: 4, title: 'Better combustion efficiency', desc: 'Fuel is used more effectively', icon: Zap, color: '#ffe600' },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden" id="how-it-works">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#ff2d95]/50 font-mono-cyber">// HOW_IT_WORKS</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ fontFamily: 'Orbitron' }}>
              <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>H2 ELEMENT</span>
              <br />
              <span className="text-white">Generator</span>
            </h2>
            <p className="text-white/30 leading-relaxed mb-8 text-sm">
              The H2 ELEMENT hydrogen generator converts water into a hydrogen-oxygen mixture
              and feeds it into the engine intake along with air. The mixture activates the
              combustion process — fuel is used more efficiently.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="border border-[#39ff14]/15 p-4 bg-[#39ff14]/5">
                <p className="text-[#39ff14] font-bold text-xs" style={{ fontFamily: 'Orbitron' }}>ENGINE</p>
                <p className="text-white/30 text-xs mt-1">Works parallel to standard components</p>
              </div>
              <div className="border border-[#00f0ff]/15 p-4 bg-[#00f0ff]/5">
                <p className="text-[#00f0ff] font-bold text-xs" style={{ fontFamily: 'Orbitron' }}>H2+O2 MIX</p>
                <p className="text-white/30 text-xs mt-1">Does not require calibration</p>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-[#00f0ff] hover:text-[#39ff14] font-semibold transition-colors text-sm tracking-wider"
              style={{ fontFamily: 'Orbitron', fontSize: '11px' }}
            >
              VIEW PRODUCTS <ChevronRight size={14} />
            </button>
          </div>

          {/* Right side - steps */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group cursor-pointer p-5 transition-all duration-500 ${
                    isActive ? 'scale-[1.02]' : 'hover:bg-white/[0.02]'
                  }`}
                  style={{
                    border: `1px solid ${isActive ? step.color + '40' : 'rgba(255,255,255,0.05)'}`,
                    background: isActive ? `${step.color}08` : 'transparent',
                    boxShadow: isActive ? `0 0 20px ${step.color}10, inset 0 0 20px ${step.color}05` : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 flex items-center justify-center transition-all"
                         style={{ 
                           border: `1px solid ${isActive ? step.color + '50' : 'rgba(255,255,255,0.1)'}`,
                           boxShadow: isActive ? `0 0 10px ${step.color}20` : 'none' 
                         }}>
                      <Icon size={20} style={{ color: isActive ? step.color : 'rgba(255,255,255,0.3)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-black font-mono-cyber" style={{ color: isActive ? step.color + '30' : 'rgba(255,255,255,0.08)' }}>
                          {String(step.num).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="font-bold text-sm" style={{ 
                            color: isActive ? step.color : 'rgba(255,255,255,0.6)',
                            fontFamily: 'Orbitron',
                            fontSize: '11px',
                          }}>
                            {step.title}
                          </h4>
                          <p className="text-xs text-white/25">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
