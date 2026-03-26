import React from 'react';
import { dealerCountries } from '../data/mockData';
import { MapPin } from 'lucide-react';

const DealerNetwork = () => {
  return (
    <section className="py-24 bg-gray-900 text-white" id="dealer-map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold text-sm tracking-wider uppercase mb-2">
            Authorized dealers and service centers
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Dealer & Service Network
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            The H2 ELEMENT authorized dealer and service center network covers multiple countries worldwide. 
            Each center undergoes training and operates according to a unified quality standard.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {dealerCountries.map((country, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 bg-gray-800 hover:bg-green-600 rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-green-600/20"
            >
              <MapPin size={16} className="text-green-400 group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-sm font-semibold group-hover:text-white text-gray-300 transition-colors">
                {country}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want to represent H2 ELEMENT in your region? Submit an application and get partnership terms
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('dealers');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wider rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25"
          >
            BECOME A DEALER
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;
