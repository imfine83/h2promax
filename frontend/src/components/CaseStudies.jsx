import React, { useRef, useState, useEffect } from 'react';
import { caseStudies } from '../data/mockData';
import { ChevronLeft, ChevronRight, TrendingDown, FileText } from 'lucide-react';

const CaseStudies = () => {
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

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(checkScroll, 400);
    }
  };

  const calcSavings = (before, after) => {
    const pct = ((parseFloat(before) - parseFloat(after)) / parseFloat(before) * 100).toFixed(0);
    return `${pct}%`;
  };

  return (
    <section className="py-24 bg-white" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
              Real-world implementation experience
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Case Studies
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Data from measurements on standard routes. The final effect is individual and determined during implementation.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button
              onClick={() => {
                const el = document.getElementById('contacts');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-lg transition-all duration-300"
            >
              <FileText size={16} />
              GET 50+ CASES
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable case cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {caseStudies.map((cs, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-gray-50 rounded-2xl p-6 snap-start hover:shadow-lg transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <h4 className="font-bold text-gray-900 text-lg mb-4">{cs.car}</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Before</span>
                  <span className="text-lg font-bold text-gray-400">{cs.before} {cs.unit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">After</span>
                  <span className="text-lg font-bold text-green-600">{cs.after} {cs.unit}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <TrendingDown size={18} className="text-green-600" />
                  <span className="text-2xl font-black text-green-600">
                    -{calcSavings(cs.before, cs.after)}
                  </span>
                  <span className="text-sm text-gray-500">savings</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                  style={{ width: calcSavings(cs.before, cs.after) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
