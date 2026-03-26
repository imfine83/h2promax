import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#39ff14]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('#top')}>
            <div className="relative">
              <span className="text-3xl font-black text-[#39ff14] tracking-tighter" style={{ fontFamily: 'Orbitron' }}>
                H<sub className="text-[#00f0ff] text-lg">2</sub>
              </span>
            </div>
            <span className="font-bold text-lg tracking-[0.3em] text-white/90 group-hover:text-[#39ff14] transition-colors" style={{ fontFamily: 'Orbitron' }}>
              ELEMENT
            </span>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#39ff14] group-hover:w-full transition-all duration-500" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-2 text-[11px] font-semibold tracking-[0.2em] text-white/60 hover:text-[#39ff14] transition-all duration-300 group"
                style={{ fontFamily: 'Rajdhani' }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#39ff14] group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Language + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer px-3 py-1 border border-[#00f0ff]/30 hover:border-[#00f0ff] transition-colors">
              <span className="text-xs font-semibold text-[#00f0ff] tracking-wider" style={{ fontFamily: 'Share Tech Mono' }}>ENG</span>
              <ChevronDown size={12} className="text-[#00f0ff]" />
            </div>
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-[#39ff14]/20">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 px-3 text-sm font-semibold text-white/60 hover:text-[#39ff14] hover:bg-[#39ff14]/5 border-l-2 border-transparent hover:border-[#39ff14] transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
