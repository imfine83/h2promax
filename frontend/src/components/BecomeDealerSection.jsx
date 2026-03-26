import React from 'react';
import { dealerBenefits, dealerSteps } from '../data/mockData';
import { Award, Wrench, BookOpen, Headphones, Eye, GraduationCap, ArrowRight } from 'lucide-react';

const benefitIcons = [Award, Wrench, BookOpen, Headphones, Eye, GraduationCap];

const BecomeDealerSection = () => {
  return (
    <section className="py-24 bg-gray-50" id="dealers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Become a <span className="text-green-600">Dealer</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Open direct access to modern fuel reduction technology and fleet optimization 
            for your region with manufacturer support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {dealerBenefits.map((benefit, index) => {
            const Icon = benefitIcons[index] || Award;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Icon size={22} className="text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-black text-gray-900 text-center mb-12">How to become a dealer</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {dealerSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 h-full">
                  <span className="text-5xl font-black text-green-100">{step.step}</span>
                  <h4 className="font-bold text-gray-900 mt-2 mb-2">{step.title}</h4>
                  {step.description && (
                    <p className="text-sm text-gray-500">{step.description}</p>
                  )}
                </div>
                {index < dealerSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dealer Requirements */}
        <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-2xl font-black mb-6">Dealer Requirements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">1</span>
              </div>
              <p className="text-green-50">Active promotion and development of the brand in the region</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">2</span>
              </div>
              <p className="text-green-50">Compliance with H2 ELEMENT standards and rules</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">3</span>
              </div>
              <p className="text-green-50">Responsible approach to communication and application management</p>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => {
                const el = document.getElementById('contacts');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-green-600 font-bold text-sm tracking-wider rounded-lg hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
            >
              BECOME A DEALER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDealerSection;
