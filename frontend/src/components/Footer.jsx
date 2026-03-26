import React from 'react';
import { navItems } from '../data/mockData';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-[#39ff14]" style={{ fontFamily: 'Orbitron', textShadow: '0 0 10px rgba(57,255,20,0.3)' }}>
              H<sub className="text-[#00f0ff] text-xs">2</sub>
            </span>
            <span className="font-bold text-white/60 tracking-[0.3em] text-sm" style={{ fontFamily: 'Orbitron' }}>ELEMENT</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4">
            {navItems.slice(0, 5).map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.href)}
                className="text-[10px] font-semibold tracking-[0.2em] text-white/20 hover:text-[#39ff14] transition-colors">
                {item.label}
              </button>
            ))}
          </nav>

          <button onClick={scrollToTop}
            className="w-9 h-9 border border-[#39ff14]/30 text-[#39ff14] flex items-center justify-center hover:bg-[#39ff14]/10 transition-all"
            style={{ boxShadow: '0 0 8px rgba(57,255,20,0.1)' }}>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-[10px] text-white/10 font-mono-cyber">&copy; {new Date().getFullYear()} H2 ELEMENT // ALL_RIGHTS_RESERVED</p>
          <p className="text-[10px] text-[#39ff14]/10 font-mono-cyber hidden md:block">SYS.v2.0.26 // CYBERPUNK_EDITION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
