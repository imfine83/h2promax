import React, { useState } from 'react';
import { Droplets, Wind, Flame, Zap, ChevronRight } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Splits water into H2 and O2',
    desc: 'Works parallel to standard components',
    icon: Droplets,
  },
  {
    num: 2,
    title: 'Mixes with air at intake',
    desc: 'Does not require calibration',
    icon: Wind,
  },
  {
    num: 3,
    title: 'Enriched mixture burns in cylinders',
    desc: 'Does not interfere with vehicle electronics',
    icon: Flame,
  },
  {
    num: 4,
    title: 'Better combustion efficiency',
    desc: 'Fuel is used more effectively',
    icon: Zap,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-gray-900 text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-green-400">H2 ELEMENT</span> Generator
            </h2>
            <h3 className="text-2xl font-bold text-gray-300 mb-6">How it works</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              The H2 ELEMENT hydrogen generator converts water into a hydrogen-oxygen mixture
              and feeds it into the engine intake along with air. The mixture activates the
              combustion process — fuel is used more efficiently.
            </p>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-green-400 font-bold text-sm">Engine</p>
                <p className="text-gray-400 text-xs mt-1">Works parallel to standard components</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <p className="text-green-400 font-bold text-sm">H2+O2 Mixture</p>
                <p className="text-gray-400 text-xs mt-1">Does not require calibration</p>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              VIEW PRODUCTS <ChevronRight size={16} />
            </button>
          </div>

          {/* Right side - steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group cursor-pointer rounded-2xl p-6 transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-green-600 shadow-lg shadow-green-600/25 scale-[1.02]'
                      : 'bg-gray-800 hover:bg-gray-750'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeStep === index ? 'bg-white/20' : 'bg-gray-700'
                    }`}>
                      <Icon size={24} className={activeStep === index ? 'text-white' : 'text-green-400'} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl font-black ${
                          activeStep === index ? 'text-white/40' : 'text-gray-600'
                        }`}>
                          {step.num}
                        </span>
                        <div>
                          <h4 className={`font-bold ${
                            activeStep === index ? 'text-white' : 'text-gray-200'
                          }`}>
                            {step.title}
                          </h4>
                          <p className={`text-sm ${
                            activeStep === index ? 'text-white/70' : 'text-gray-500'
                          }`}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
