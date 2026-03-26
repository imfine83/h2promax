import React, { useState } from 'react';
import { faqItems } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="faq">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#00f0ff]/50 font-mono-cyber">// FREQUENTLY_ASKED</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            F<span className="text-[#39ff14]">.</span>A<span className="text-[#00f0ff]">.</span>Q
          </h2>
        </div>

        <div className="space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff'];
            const color = colors[index % colors.length];
            return (
              <div key={index} className="transition-all duration-300"
                   style={{ border: `1px solid ${isOpen ? color + '30' : 'rgba(255,255,255,0.05)'}` }}>
                <button onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors">
                  <span className="font-bold text-white/70 pr-4 text-sm" style={{ fontFamily: 'Orbitron', fontSize: '11px' }}>
                    {item.question}
                  </span>
                  <ChevronDown size={16} style={{ color }}
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4" style={{ borderTop: `1px solid ${color}10` }}>
                    <p className="text-white/25 leading-relaxed text-xs pt-3">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
