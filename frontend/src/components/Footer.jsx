import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navHrefs = ['#top', '#catalog', '#production', '#dealers', '#cases'];

const Footer = () => {
  const { t } = useLanguage();
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
            {t.nav.slice(0, 5).map((label, i) => (
              <button key={label} onClick={() => scrollToSection(navHrefs[i])}
                className="text-[10px] font-semibold tracking-[0.2em] text-white/20 hover:text-[#39ff14] transition-colors">
                {label}
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
          <p className="text-[10px] text-white/10 font-mono-cyber">&copy; {new Date().getFullYear()} H2 ELEMENT // {t.footer.rights}</p>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/d.tolstoi_llc/" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-[#ff2d95] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://t.me/imfine_corp" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-[#00f0ff] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://www.facebook.com/dima.tolstihin" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-[#39ff14] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
