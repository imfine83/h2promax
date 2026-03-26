import React from 'react';
import { newsItems } from '../data/mockData';
import { Calendar, ArrowUpRight } from 'lucide-react';

const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff', '#39ff14'];

const NewsSection = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] relative" id="news">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#b026ff]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#b026ff]/50 font-mono-cyber">// NEWS_FEED</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            News / <span className="text-[#b026ff]" style={{ textShadow: '0 0 20px rgba(176,38,255,0.3)' }}>Events</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsItems.map((news, index) => {
            const color = colors[index];
            return (
              <div key={index} className="group p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.02] cursor-pointer"
                   style={{ border: `1px solid ${color}10` }}>
                <div className="flex items-center gap-2 text-[10px] text-white/20 mb-3 font-mono-cyber">
                  <Calendar size={10} />
                  <span>{news.date}</span>
                </div>
                <h3 className="font-bold text-white/70 text-sm mb-2 group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Orbitron', fontSize: '12px' }}>
                  {news.title}
                </h3>
                {news.description && <p className="text-xs text-white/20 leading-relaxed">{news.description}</p>}
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ color }}>
                  Read more <ArrowUpRight size={10} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
