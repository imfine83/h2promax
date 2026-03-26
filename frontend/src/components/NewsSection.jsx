import React from 'react';
import { newsItems } from '../data/mockData';
import { Calendar, ArrowUpRight } from 'lucide-react';

const NewsSection = () => {
  return (
    <section className="py-24 bg-white" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            News / Events
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar size={14} />
                <span>{news.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-600 transition-colors">
                {news.title}
              </h3>
              {news.description && (
                <p className="text-sm text-gray-600 leading-relaxed">
                  {news.description}
                </p>
              )}
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Read more <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
