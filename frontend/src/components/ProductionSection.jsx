import React from 'react';
import { productionStats } from '../data/mockData';
import { Factory, ShieldCheck, Settings, Globe, Rocket } from 'lucide-react';

const iconMap = {
  factory: Factory,
  shield: ShieldCheck,
  settings: Settings,
  globe: Globe,
  rocket: Rocket,
};

const ProductionSection = () => {
  return (
    <section className="py-24 bg-white" id="production">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
              Our company provides a full production cycle
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Own Production
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our company ensures a full cycle of hydrogen generator production — 
              all key stages are concentrated at our own facility. Started in 2022, 
              since 2025 working on a conveyor system.
            </p>

            {/* Production image placeholder */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-50 h-64 flex items-center justify-center">
              <div className="text-center">
                <Factory size={64} className="text-green-600 mx-auto mb-4" />
                <p className="text-green-800 font-bold text-lg">Modern Production Facility</p>
                <p className="text-green-600 text-sm">Up to 1,500 generators per month</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
            </div>
          </div>

          {/* Right side - stats */}
          <div className="space-y-4">
            {productionStats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Factory;
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-green-50 transition-all duration-500 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Icon size={22} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{stat.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="p-5 rounded-2xl bg-green-600 text-white">
              <h3 className="font-bold mb-1">Hydrogen Boiler</h3>
              <p className="text-sm text-green-100">Besides transport systems, our team is preparing to launch a hydrogen boiler for heating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
