import React, { useState } from 'react';
import { teamMembers } from '../data/mockData';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff'];

const TeamSection = () => {
  const { t, isRtl } = useLanguage();
  const tm = t.team;
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const roleLabel = (roleKey) => {
    if (roleKey === 'founder') return tm.roles.founder;
    if (roleKey === 'productManager') return tm.roles.productManager;
    return roleKey;
  };

  return (
    <section className="relative bg-[#0d0d1a] py-24" dir={isRtl ? 'rtl' : 'ltr'} id="team">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-mono-cyber text-[10px] tracking-[0.5em] text-[#b026ff]/50">{tm.badge}</span>
          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl" style={{ fontFamily: 'Orbitron' }}>
            {tm.titleBefore}
            <span className="text-[#00f0ff]" style={{ textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>
              {tm.titleAccent}
            </span>
          </h2>
        </div>

        <div className="mx-auto mb-14 max-w-3xl space-y-10 text-center">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00f0ff]/70" style={{ fontFamily: 'Orbitron' }}>
              {tm.whoTitle}
            </h3>
            <p className="text-base leading-relaxed text-white/70 md:text-lg" style={{ fontFamily: 'Rajdhani, system-ui, sans-serif' }}>
              {tm.whoBody}
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#39ff14]/70" style={{ fontFamily: 'Orbitron' }}>
              {tm.missionTitle}
            </h3>
            <p className="text-base leading-relaxed text-white/70 md:text-lg" style={{ fontFamily: 'Rajdhani, system-ui, sans-serif' }}>
              {tm.missionBody}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-4 py-2 sm:gap-8 md:flex-nowrap md:gap-10">
          <button
            type="button"
            onClick={prev}
            className="order-2 flex h-10 w-10 shrink-0 items-center justify-center self-center border border-[#39ff14]/30 transition-all hover:bg-[#39ff14]/10 md:order-none"
            style={{ boxShadow: '0 0 8px rgba(57,255,20,0.1)' }}
            aria-label="Previous"
          >
            <ChevronLeft size={18} className="text-[#39ff14]" />
          </button>

          <div className="order-1 flex min-w-0 flex-1 flex-wrap justify-center gap-10 overflow-visible md:order-none md:max-w-none md:flex-nowrap md:gap-12">
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              const color = colors[index % colors.length];
              return (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-h-0 w-full max-w-[280px] shrink-0 flex-col items-center px-3 pb-2 pt-1 text-center transition-all duration-500 sm:max-w-[300px] md:w-[300px] md:max-w-[300px] ${
                    isActive ? 'scale-100 opacity-100' : 'scale-[0.94] opacity-45 md:scale-95'
                  }`}
                >
                  <div
                    className="mb-4 flex shrink-0 items-center justify-center overflow-hidden transition-all"
                    style={{
                      width: 'clamp(8.5rem, 28vw, 11rem)',
                      height: 'clamp(8.5rem, 28vw, 11rem)',
                      border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.12)'}`,
                      boxShadow: isActive ? `0 0 24px ${color}35` : 'none',
                    }}
                  >
                    {member.image ? (
                      <img src={member.image} alt="" className="h-full w-full object-cover" draggable={false} />
                    ) : (
                      <User size={56} style={{ color: isActive ? color : 'rgba(255,255,255,0.25)' }} />
                    )}
                  </div>
                  <h4
                    className="w-full break-words px-1 font-bold leading-snug text-white"
                    style={{ fontFamily: 'Orbitron', fontSize: 'clamp(0.8rem, 2.2vw, 0.95rem)' }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="mt-2 w-full max-w-[16.5rem] whitespace-normal break-words px-2 text-center leading-snug sm:max-w-none"
                    style={{
                      color: isActive ? color : 'rgba(255,255,255,0.35)',
                      fontFamily: 'Rajdhani, system-ui, sans-serif',
                      fontSize: 'clamp(0.875rem, 2.4vw, 1rem)',
                      minHeight: '2.75rem',
                    }}
                  >
                    {roleLabel(member.roleKey)}
                  </p>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={next}
            className="order-3 flex h-10 w-10 shrink-0 items-center justify-center self-center border border-[#39ff14]/30 transition-all hover:bg-[#39ff14]/10 md:order-none"
            style={{ boxShadow: '0 0 8px rgba(57,255,20,0.1)' }}
            aria-label="Next"
          >
            <ChevronRight size={18} className="text-[#39ff14]" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <span className="font-mono-cyber text-xs text-white/15">
            [{activeIndex + 1}/{teamMembers.length}]
          </span>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
