import React, { useState } from 'react';
import { teamMembers } from '../data/mockData';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff'];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="team">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.5em] text-[#b026ff]/50 font-mono-cyber">// TEAM_ROSTER</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4" style={{ fontFamily: 'Orbitron' }}>
            Our <span className="text-[#00f0ff]" style={{ textShadow: '0 0 20px rgba(0,240,255,0.3)' }}>Team</span>
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button onClick={prev} className="w-10 h-10 border border-[#39ff14]/30 flex items-center justify-center hover:bg-[#39ff14]/10 transition-all"
                  style={{ boxShadow: '0 0 8px rgba(57,255,20,0.1)' }}>
            <ChevronLeft size={18} className="text-[#39ff14]" />
          </button>

          <div className="flex gap-6 overflow-hidden">
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              const color = colors[index % colors.length];
              return (
                <div key={index}
                  className={`flex-shrink-0 w-44 text-center transition-all duration-500 cursor-pointer ${isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-40'}`}
                  onClick={() => setActiveIndex(index)}>
                  <div className="w-20 h-20 mx-auto flex items-center justify-center mb-3 transition-all overflow-hidden"
                       style={{ border: `1px solid ${isActive ? color : 'rgba(255,255,255,0.1)'}`, boxShadow: isActive ? `0 0 15px ${color}30` : 'none' }}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={28} style={{ color: isActive ? color : 'rgba(255,255,255,0.2)' }} />
                    )}
                  </div>
                  <h4 className="font-bold text-sm" style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.3)', fontFamily: 'Orbitron', fontSize: '11px' }}>
                    {member.name}
                  </h4>
                  <p className="text-xs mt-1" style={{ color: isActive ? color : 'rgba(255,255,255,0.15)' }}>{member.role}</p>
                </div>
              );
            })}
          </div>

          <button onClick={next} className="w-10 h-10 border border-[#39ff14]/30 flex items-center justify-center hover:bg-[#39ff14]/10 transition-all"
                  style={{ boxShadow: '0 0 8px rgba(57,255,20,0.1)' }}>
            <ChevronRight size={18} className="text-[#39ff14]" />
          </button>
        </div>

        <div className="text-center mt-8">
          <span className="text-xs text-white/15 font-mono-cyber">[{activeIndex + 1}/{teamMembers.length}]</span>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
