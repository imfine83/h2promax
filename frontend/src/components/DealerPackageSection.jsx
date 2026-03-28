import React from 'react';
import { Wrench, BarChart3, Headphones, Package, Smartphone, Users, Bot, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = { engine: Wrench, chart: BarChart3, headset: Headphones, package: Package, mobile: Smartphone, people: Users, robot: Bot, settings2: Settings };
const colors = ['#39ff14', '#00f0ff', '#ff2d95', '#ffe600', '#b026ff', '#39ff14', '#00f0ff', '#ff2d95'];

const DealerPackageSection = () => {
  const { t } = useLanguage();
  const dp = t.dealerPackage;

  return (
    <section className="py-20 bg-[#0d0d1a] relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Orbitron' }}>
            {dp.title1} <span className="text-[#00f0ff]" style={{ textShadow: '0 0 15px rgba(0,240,255,0.3)' }}>{dp.title2}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {dp.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Wrench;
            const color = colors[index];
            return (
              <div key={index} className="group p-4 transition-all duration-500 hover:bg-white/[0.02]"
                   style={{ border: `1px solid ${color}10` }}>
                <div className="w-8 h-8 flex items-center justify-center mb-2"
                     style={{ border: `1px solid ${color}25` }}>
                  <Icon size={14} style={{ color }} />
                </div>
                <h3 className="font-bold text-white/70 text-xs mb-1" style={{ fontFamily: 'Orbitron', fontSize: '10px' }}>{item.title}</h3>
                <p className="text-[10px] text-white/20 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealerPackageSection;
