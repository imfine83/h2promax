import React from 'react';
import { dealerPackage } from '../data/mockData';
import { Wrench, BarChart3, Headphones, Package, Smartphone, Users, Bot, Settings } from 'lucide-react';

const iconMap = {
  engine: Wrench,
  chart: BarChart3,
  headset: Headphones,
  package: Package,
  mobile: Smartphone,
  people: Users,
  robot: Bot,
  settings2: Settings,
};

const DealerPackageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            H2 ELEMENT <span className="text-green-600">Dealer Package</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dealerPackage.map((item, index) => {
            const Icon = iconMap[item.icon] || Wrench;
            return (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-green-50 rounded-2xl p-5 transition-all duration-500 hover:shadow-md border border-gray-100 hover:border-green-200"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                  <Icon size={18} className="text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealerPackageSection;
