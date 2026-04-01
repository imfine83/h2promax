import React from 'react';
import { Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/** Добавь сюда URL изображений (https://…), когда будут готовы свои сертификаты. */
const CERTIFICATE_IMAGE_URLS = [];

const CertificatesSection = () => {
  const { t } = useLanguage();
  const cert = t.certificates;
  const hasImages = CERTIFICATE_IMAGE_URLS.length > 0;

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="certificates">
      <div className="absolute inset-0 cyber-stripes" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffe600]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#ffe600]/20 px-4 py-1.5 text-[10px] font-mono-cyber text-[#ffe600]/60 mb-4">
            <Award size={12} /> {hasImages ? 'VERIFIED_CERTIFICATES' : 'CERTIFICATES'}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'Orbitron' }}>
            {cert.title}
          </h2>
        </div>

        {hasImages ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CERTIFICATE_IMAGE_URLS.map((src, index) => (
              <div
                key={src}
                className="group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ border: '1px solid rgba(255,230,0,0.1)' }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] to-transparent opacity-60" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="mx-auto max-w-xl border border-[#ffe600]/10 bg-[#ffe600]/[0.02] px-6 py-10 text-center"
            style={{ fontFamily: 'Rajdhani, system-ui, sans-serif' }}
          >
            <p className="text-base leading-relaxed text-white/55 md:text-lg">{cert.empty}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
