import React, { useRef, useState, useEffect } from 'react';
import { caseStudies } from '../data/mockData';
import { ChevronLeft, ChevronRight, TrendingDown, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CaseStudies = () => {
  const { t } = useLanguage();
  const c = t.cases;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => { checkScroll(); }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
      setTimeout(checkScroll, 400);
    }
  };

  const calcSavings = (before, after) => ((parseFloat(before) - parseFloat(after)) / parseFloat(before) * 100).toFixed(0);
  const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff', '#39ff14', '#00f0ff', '#ff2d95'];

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="cases">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff2d95]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#ff2d95]/50 font-mono-cyber">{c.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
              {c.title1} <span className="text-[#ff2d95]" style={{ textShadow: '0 0 20px rgba(255,45,149,0.3)' }}>{c.title2}</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button onClick={() => { const el = document.getElementById('contacts'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#ff2d95] text-white font-bold text-xs tracking-wider cyber-clip-sm"
              style={{ fontFamily: 'Orbitron', fontSize: '10px', boxShadow: '0 0 15px rgba(255,45,149,0.2)' }}>
              <FileText size={14} /> {c.getCases}
            </button>
            <div className="flex gap-2">
              <button onClick={() => scroll('left')} disabled={!canScrollLeft}
                className={`w-9 h-9 flex items-center justify-center transition-all ${canScrollLeft ? 'border-[#39ff14]/40 text-[#39ff14] hover:bg-[#39ff14]/10' : 'border-white/5 text-white/10'}`}
                style={{ border: '1px solid' }}>
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scroll('right')} disabled={!canScrollRight}
                className={`w-9 h-9 flex items-center justify-center transition-all ${canScrollRight ? 'border-[#39ff14]/40 text-[#39ff14] hover:bg-[#39ff14]/10' : 'border-white/5 text-white/10'}`}
                style={{ border: '1px solid' }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div ref={scrollRef} onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}>
          {caseStudies.map((cs, index) => {
            const color = colors[index];
            const pct = calcSavings(cs.before, cs.after);
            return (
              <div key={index}
                className="flex-shrink-0 w-64 p-5 snap-start hover:-translate-y-1 transition-all duration-500 bg-[#0a0a0f]/80"
                style={{ border: `1px solid ${color}15` }}>
                <h4 className="font-bold text-white/80 text-sm mb-4" style={{ fontFamily: 'Orbitron', fontSize: '11px' }}>{cs.car}</h4>
                <div className="space-y-2 font-mono-cyber">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white/20">{c.before}</span>
                    <span className="text-sm font-bold text-white/30">{cs.before} L/100km</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px]" style={{ color }}>{c.after}</span>
                    <span className="text-sm font-bold" style={{ color }}>{cs.after} L/100km</span>
                  </div>
                </div>
                <div className="mt-4 pt-3" style={{ borderTop: `1px solid ${color}15` }}>
                  <div className="flex items-center gap-2">
                    <TrendingDown size={16} style={{ color }} />
                    <span className="text-xl font-black font-mono-cyber" style={{ color, textShadow: `0 0 10px ${color}40` }}>-{pct}%</span>
                  </div>
                  <div className="mt-2 h-1 bg-white/5 overflow-hidden">
                    <div className="h-full transition-all duration-1000" style={{ width: `${pct}%`, background: color, boxShadow: `0 0 6px ${color}` }} />
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

export default CaseStudies;
