import React from 'react';
import { benefits } from '../data/mockData';

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="benefits">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#00f0ff]/50 font-mono-cyber">
            // SYSTEM_BENEFITS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            Fuel savings <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>20–65%</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-white/40">Benefits of the</span>
            <span className="font-bold text-[#39ff14]">H2 ELEMENT</span>
            <span className="text-white/40">system</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600'];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className="group relative bg-[#0a0a0f]/80 backdrop-blur-sm overflow-hidden hover:-translate-y-1 transition-all duration-500"
                style={{ border: `1px solid ${color}15` }}>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }} />
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0f]/90" />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Orbitron', fontSize: '14px' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="mt-4 w-12 h-[2px] group-hover:w-20 transition-all duration-500"
                    style={{ background: color, boxShadow: `0 0 10px ${color}40` }} />
                  </div>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

};

export default BenefitsSection;