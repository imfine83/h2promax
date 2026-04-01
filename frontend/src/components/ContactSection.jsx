import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactItems = [
    { icon: Phone, label: c.phone, value: '+1 (847)650-66-99', href: 'tel:+18476506699', color: '#39ff14' },
    { icon: Mail, label: c.email, value: 'imfineinusa@gmail.com', href: 'mailto:imfineinusa@gmail.com', color: '#00f0ff' },
    { icon: MapPin, label: c.office, value: 'H2 Element International', href: null, color: '#ff2d95' },
  ];

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="contacts">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#39ff14]/50 font-mono-cyber">{c.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6" style={{ fontFamily: 'Orbitron' }}>{c.title}</h2>
            <p className="text-white/25 mb-8 text-sm">{c.subtitle}</p>

            <div className="space-y-5">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center"
                         style={{ border: `1px solid ${item.color}30`, boxShadow: `0 0 8px ${item.color}10` }}>
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-white/20 text-[10px] font-mono-cyber">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-white/70 font-bold text-sm hover:text-white transition-colors">{item.value}</a>
                        : <p className="text-white/70 font-bold text-sm">{item.value}</p>
                      }
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.instagram.com/d.tolstoi_llc/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#ff2d95]/30 hover:bg-[#ff2d95]/10 hover:border-[#ff2d95] transition-all"
                style={{ boxShadow: '0 0 8px rgba(255,45,149,0.05)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff2d95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://t.me/imfine_corp" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#00f0ff]/30 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all"
                style={{ boxShadow: '0 0 8px rgba(0,240,255,0.05)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#00f0ff">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/dima.tolstihin" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#39ff14]/30 hover:bg-[#39ff14]/10 hover:border-[#39ff14] transition-all"
                style={{ boxShadow: '0 0 8px rgba(57,255,20,0.05)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#39ff14">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            <div className="mt-8 border border-[#39ff14]/10 p-4 bg-[#39ff14]/[0.02]">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={12} className="text-[#39ff14]/50" />
                <span className="text-[10px] text-[#39ff14]/30 font-mono-cyber">system.info</span>
              </div>
              <p className="text-[10px] text-white/15 font-mono-cyber leading-relaxed">
                {'>'} imfineinusa@gmail.com<br />
                {'>'} {c.hours}<br />
                {'>'} {c.response}
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              {[
                { name: 'name', type: 'text', placeholder: c.namePlaceholder },
                { name: 'phone', type: 'tel', placeholder: c.phonePlaceholder },
                { name: 'email', type: 'email', placeholder: c.emailPlaceholder },
              ].map((field) => (
                <input key={field.name} type={field.type} name={field.name}
                  value={formData[field.name]} onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-transparent border border-white/8 text-white placeholder-white/15 focus:outline-none focus:border-[#39ff14]/40 transition-colors text-sm font-mono-cyber" />
              ))}
              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder={c.messagePlaceholder} rows={4}
                className="w-full px-4 py-3 bg-transparent border border-white/8 text-white placeholder-white/15 focus:outline-none focus:border-[#39ff14]/40 transition-colors resize-none text-sm font-mono-cyber" />
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1 accent-[#39ff14]" defaultChecked />
                <label htmlFor="consent" className="text-[10px] text-white/15 font-mono-cyber">{c.consent}</label>
              </div>
              <button type="submit"
                className="w-full py-4 bg-[#39ff14] text-[#0a0a0f] font-bold text-xs tracking-[0.15em] cyber-clip-sm transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Orbitron', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
                {submitted ? c.submitted : <><Send size={14} /> {c.submitBtn}</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
