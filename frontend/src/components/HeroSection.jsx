import React from 'react';
import { Fuel, Wrench, Car, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToCalc = () => {
    const el = document.getElementById('contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDealers = () => {
    const el = document.getElementById('dealers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#39ff14]/40 to-transparent animate-pulse" 
             style={{ animationDuration: '3s' }} />
      </div>
      
      {/* Floating neon particles */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-[#39ff14] rounded-full shadow-[0_0_10px_#39ff14,0_0_20px_#39ff14]" style={{ animation: 'float 4s ease-in-out infinite' }} />
      <div className="absolute top-40 right-60 w-1 h-1 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff]" style={{ animation: 'float 5s ease-in-out infinite 1s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#ff2d95] rounded-full shadow-[0_0_12px_#ff2d95]" style={{ animation: 'float 6s ease-in-out infinite 2s' }} />
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-[#39ff14] rounded-full shadow-[0_0_6px_#39ff14]" style={{ animation: 'neon-pulse 2s ease-in-out infinite' }} />
      <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]" style={{ animation: 'float 7s ease-in-out infinite 0.5s' }} />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-[400px] h-[1px] bg-gradient-to-l from-[#39ff14]/30 to-transparent transform rotate-45 translate-x-20 -translate-y-10" />
      <div className="absolute bottom-40 left-0 w-[300px] h-[1px] bg-gradient-to-r from-[#00f0ff]/30 to-transparent transform -rotate-12" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-8">
            {/* Glitch label */}
            <div className="inline-block">
              <span className="text-[10px] tracking-[0.5em] text-[#00f0ff]/70 font-mono-cyber border border-[#00f0ff]/20 px-3 py-1">
                // SYSTEM_ONLINE
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Orbitron' }}>
                <span className="text-white">FUEL</span>
                <br />
                <span className="text-[#39ff14] relative" style={{ 
                  textShadow: '0 0 20px rgba(57,255,20,0.5), 0 0 40px rgba(57,255,20,0.2)',
                  animation: 'neon-flicker 4s ease-in-out infinite'
                }}>
                  SAVINGS
                </span>
              </h1>
              <p className="mt-4 text-lg text-white/50 max-w-lg" style={{ fontFamily: 'Rajdhani' }}>
                Hydrogen systems for transport and fleets
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Fuel, text: 'Fuel and resource savings', color: '#39ff14' },
                { icon: Wrench, text: 'Installation without affecting the warranty', color: '#00f0ff' },
                { icon: Car, text: 'For all ICE: commercial and passenger transport', color: '#ff2d95' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-current transition-all duration-500"
                         style={{ borderColor: `${item.color}30`, boxShadow: `0 0 10px ${item.color}10` }}>
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <span className="text-white/60 group-hover:text-white/90 transition-colors text-sm tracking-wide">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={scrollToCalc}
                className="group relative px-8 py-4 bg-[#39ff14] hover:bg-[#39ff14]/90 text-[#0a0a0f] font-bold text-sm tracking-[0.15em] transition-all duration-300 cyber-clip-sm flex items-center gap-2"
                style={{ fontFamily: 'Orbitron', boxShadow: '0 0 20px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.1)' }}
              >
                CALCULATE SAVINGS
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToDealers}
                className="px-8 py-4 border border-[#00f0ff]/50 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] font-bold text-sm tracking-[0.15em] transition-all duration-300 cyber-clip-sm"
                style={{ fontFamily: 'Orbitron' }}
              >
                BECOME A DEALER
              </button>
            </div>

            <p className="text-xs text-white/30 max-w-lg font-mono-cyber leading-relaxed">
              {'>'} We work with private owners and fleets. All calculations and effects — only based on your data.
            </p>
          </div>

          {/* Right - Product Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Neon glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#39ff14]/5 blur-3xl scale-90" />
              <div className="absolute inset-0 rounded-full border border-[#39ff14]/10 scale-110" style={{ animation: 'neon-pulse 3s ease-in-out infinite' }} />
              
              <img
                src="https://static.tildacdn.com/tild6330-3530-4134-b638-343035323064/main.png"
                alt="H2 Element Hydrogen Generator"
                className="relative z-10 w-full max-w-lg drop-shadow-2xl"
                style={{ 
                  filter: 'drop-shadow(0 0 30px rgba(57,255,20,0.15))',
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
              
              {/* Fuel saving badges */}
              <div className="absolute bottom-8 right-0 z-20 flex items-center gap-2">
                <div className="bg-[#0a0a0f]/90 border border-[#39ff14]/40 text-[#39ff14] px-4 py-2 cyber-clip-sm"
                     style={{ boxShadow: '0 0 15px rgba(57,255,20,0.2)' }}>
                  <span className="text-xl font-bold font-mono-cyber">19.3L</span>
                  <span className="text-[10px] block text-[#39ff14]/60">/ 100 km</span>
                </div>
                <div className="w-8 h-8 border border-[#ff2d95]/40 flex items-center justify-center" 
                     style={{ boxShadow: '0 0 10px rgba(255,45,149,0.2)' }}>
                  <ArrowRight size={12} className="text-[#ff2d95]" />
                </div>
                <div className="bg-[#0a0a0f]/90 border border-[#00f0ff]/40 text-[#00f0ff] px-4 py-2 cyber-clip-sm"
                     style={{ boxShadow: '0 0 15px rgba(0,240,255,0.2)' }}>
                  <span className="text-xl font-bold font-mono-cyber">11.5L</span>
                  <span className="text-[10px] block text-[#00f0ff]/60">/ 100 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-12 flex items-center justify-between text-xs text-white/20 border-t border-white/5 pt-6 font-mono-cyber">
          <span>{'>'} Values confirmed by measurements — for each vehicle individually</span>
          <span className="hidden md:block text-[#39ff14]/30">SYS.v2.0.26</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
