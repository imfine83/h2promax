import React from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const certificates = [
  'https://static3.tildacdn.com/tild6435-6230-4135-a238-343935353235/___.png',
  'https://static3.tildacdn.com/tild3263-3564-4863-b035-323131333433/___2__1.png',
  'https://static3.tildacdn.com/tild3734-6534-4432-b830-626636613061/___2__2.png',
  'https://static3.tildacdn.com/tild3530-3663-4234-a539-336566303235/___2__3.png',
  'https://static3.tildacdn.com/tild6231-3839-4930-b632-653332323532/____1.png',
  'https://static3.tildacdn.com/tild3830-3838-4535-b862-366231313033/____2.png',
];

const CertificatesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="certificates">
      <div className="absolute inset-0 cyber-stripes" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffe600]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#ffe600]/20 px-4 py-1.5 text-[10px] font-mono-cyber text-[#ffe600]/60 mb-4">
            <Award size={12} /> VERIFIED_CERTIFICATES
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'Orbitron' }}>
            {t.certificates.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {certificates.map((cert, index) => (
            <div key={index} className="group overflow-hidden hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                 style={{ border: '1px solid rgba(255,230,0,0.1)' }}>
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={cert} alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
