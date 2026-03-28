import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import PresentationApp from '../presentation/PresentationApp';
import { useLanguage } from '../contexts/LanguageContext';

export default function PresentationSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // Lock/unlock body scroll when presentation is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Section teaser */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden" id="how-it-works">
        <div className="absolute inset-0 circuit-pattern" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-[10px] tracking-[0.5em] text-[#ff2d95]/50 font-mono-cyber">// HOW_IT_WORKS</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ fontFamily: 'Orbitron' }}>
                <span className="text-[#39ff14]" style={{ textShadow: '0 0 20px rgba(57,255,20,0.3)' }}>H2 ELEMENT</span>
                <br />
                <span className="text-white">Generator</span>
              </h2>
              <p className="text-white/30 leading-relaxed mb-8 text-sm">
                {t.howItWorks.description}
              </p>

              <button
                onClick={() => setOpen(true)}
                className="group relative flex items-center gap-3 px-8 py-4 bg-[#39ff14] hover:bg-[#39ff14]/90 text-[#0a0a0f] font-bold text-sm tracking-[0.15em] transition-all duration-300 cyber-clip-sm"
                style={{ fontFamily: 'Orbitron', boxShadow: '0 0 20px rgba(57,255,20,0.3)' }}
              >
                <Play size={16} fill="#0a0a0f" />
                VIEW PRESENTATION
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-4 text-white/20 text-xs font-mono-cyber">
                {'>'} 11 slides · scroll or use arrow keys to navigate
              </p>
            </div>

            {/* Right — preview grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: '/slides/slide_01.png', label: 'Save up to 65%' },
                { src: '/slides/slide_02.png', label: 'The Problem' },
                { src: '/slides/slide_03.png', label: 'The Solution' },
                { src: '/slides/slide_04.png', label: 'How It Works' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300"
                  style={{ border: '1px solid rgba(57,255,20,0.1)' }}
                  onClick={() => setOpen(true)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-28 object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-[10px] text-white/50 font-mono-cyber">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen presentation overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[9999]"
          >
            <PresentationApp onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
