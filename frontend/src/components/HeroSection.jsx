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
    <section id="top" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Background pattern - subtle dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #22C55E 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-40 w-2 h-2 bg-green-300 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-green-200 rounded-full animate-pulse opacity-50" />
      <div className="absolute top-60 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-gray-900">FUEL</span>
                <br />
                <span className="text-green-600 italic">SAVINGS</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Hydrogen systems for transport and fleets
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Fuel size={20} className="text-green-600" />
                </div>
                <span className="text-gray-700">Fuel and resource savings</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Wrench size={20} className="text-green-600" />
                </div>
                <span className="text-gray-700">Installation without affecting the warranty</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Car size={20} className="text-green-600" />
                </div>
                <span className="text-gray-700">For all ICE: commercial and passenger transport</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToCalc}
                className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wider rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 flex items-center gap-2"
              >
                CALCULATE SAVINGS
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToDealers}
                className="px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold text-sm tracking-wider rounded-lg transition-all duration-300"
              >
                BECOME A DEALER
              </button>
            </div>

            <p className="text-sm text-gray-500 max-w-lg">
              We work with private owners and fleets. All calculations and effects — only based on your data.
            </p>
          </div>

          {/* Right - Product Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full scale-75" />
              <img
                src="https://static.tildacdn.com/tild6330-3530-4134-b638-343035323064/main.png"
                alt="H2 Element Hydrogen Generator"
                className="relative z-10 w-full max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              {/* Fuel saving badges */}
              <div className="absolute bottom-8 right-0 z-20 flex items-center gap-2">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-xl font-bold">19.3L</span>
                  <span className="text-xs block">/ 100 km</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight size={14} className="text-green-600" />
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-xl font-bold">11.5L</span>
                  <span className="text-xs block">/ 100 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-6">
          <span>Values are real and confirmed by measurements — for each vehicle individually</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
