import React from 'react';
import { benefits } from '../data/mockData';

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold text-sm tracking-wider uppercase mb-2">
            For personal vehicles, fleets or machinery
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Fuel savings 20–40%
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600">Benefits of the</span>
            <span className="text-lg font-bold text-green-600">H2 ELEMENT</span>
            <span className="text-lg text-gray-600">system</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="mt-4 w-12 h-1 bg-green-500 rounded-full group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
