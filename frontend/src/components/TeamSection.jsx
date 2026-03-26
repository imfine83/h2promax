import React, { useState } from 'react';
import { teamMembers } from '../data/mockData';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section className="py-24 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Behind every H2 ELEMENT solution is a team of experts with real industrial and engineering experience
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} className="text-green-600" />
          </button>

          <div className="flex gap-4 overflow-hidden">
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-48 text-center transition-all duration-500 cursor-pointer ${
                    isActive ? 'scale-110 opacity-100' : 'scale-95 opacity-60'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    isActive ? 'bg-green-600' : 'bg-gray-200'
                  }`}>
                    <User size={32} className={isActive ? 'text-white' : 'text-gray-400'} />
                  </div>
                  <h4 className={`font-bold transition-colors ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {member.name}
                  </h4>
                  <p className={`text-sm transition-colors ${
                    isActive ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    {member.role}
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={20} className="text-green-600" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <span className="text-sm text-gray-400">
            {activeIndex + 1} / {teamMembers.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
