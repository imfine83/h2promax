import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQSection = () => {
  const { t } = useLanguage();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="faq">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#00f0ff]/50 font-mono-cyber">{f.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            F<span className="text-[#39ff14]">.</span>A<span className="text-[#00f0ff]">.</span>Q
          </h2>
        </div>

        <div className="space-y-2">
          {f.items.map((item, index) => {
            const isOpen = openIndex === index;
            const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff'];
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-sm ${isOpen ? 'bg-white/[0.04]' : ''}`}
                style={{ border: `1px solid ${isOpen ? color + '40' : 'rgba(255,255,255,0.06)'}` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-white/[0.03] md:p-5"
                >
                  <span
                    className={`pr-2 font-bold leading-snug md:leading-tight ${isOpen ? 'text-white' : 'text-white/80'}`}
                    style={{ fontFamily: 'Orbitron', fontSize: 'clamp(0.875rem, 2.4vw, 1.05rem)' }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{ color }}
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div
                    className="px-4 pb-5 md:px-5 md:pb-6"
                    style={{ borderTop: `1px solid ${isOpen ? color + '22' : 'transparent'}` }}
                  >
                    <p
                      className="pt-4 leading-relaxed text-white/80 md:pt-4"
                      style={{
                        fontFamily: 'Rajdhani, system-ui, sans-serif',
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
                      }}
                    >
                      {item.answer}
                    </p>
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
