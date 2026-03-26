import React from 'react';
import { Award } from 'lucide-react';

const certificates = [
  'https://static3.tildacdn.com/tild6435-6230-4135-a238-343935353235/___.png',
  'https://static3.tildacdn.com/tild3263-3564-4863-b035-323131333433/___2__1.png',
  'https://static3.tildacdn.com/tild3734-6534-4432-b830-626636613061/___2__2.png',
  'https://static3.tildacdn.com/tild3530-3663-4234-a539-336566303235/___2__3.png',
  'https://static3.tildacdn.com/tild6231-3839-4930-b632-653332323532/____1.png',
  'https://static3.tildacdn.com/tild3830-3838-4535-b862-366231313033/____2.png',
];

const CertificatesSection = () => {
  return (
    <section className="py-24 bg-gray-50" id="certificates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award size={16} />
            Compliance certificates and test protocols
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Certificates
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
