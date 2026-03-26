import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Terminal } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="py-24 bg-[#0d0d1a] relative" id="contacts">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#39ff14]/50 font-mono-cyber">// CONTACT_US</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6" style={{ fontFamily: 'Orbitron' }}>
              CONTACTS
            </h2>
            <p className="text-white/25 mb-8 text-sm">Fill out the feedback form and we will contact you</p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Phone', value: '+1 (800) 100-13-89', href: 'tel:+18001001389', color: '#39ff14' },
                { icon: Mail, label: 'Email', value: 'dealer@h2element.com', href: 'mailto:dealer@h2element.com', color: '#00f0ff' },
                { icon: MapPin, label: 'Head Office', value: 'H2 Element International', href: null, color: '#ff2d95' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center"
                         style={{ border: `1px solid ${item.color}30`, boxShadow: `0 0 8px ${item.color}10` }}>
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-white/20 text-[10px] font-mono-cyber">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white/70 font-bold text-sm hover:text-white transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white/70 font-bold text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terminal-style info */}
            <div className="mt-8 border border-[#39ff14]/10 p-4 bg-[#39ff14]/[0.02]">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={12} className="text-[#39ff14]/50" />
                <span className="text-[10px] text-[#39ff14]/30 font-mono-cyber">system.info</span>
              </div>
              <p className="text-[10px] text-white/15 font-mono-cyber leading-relaxed">
                {'>'} sales@h2element.com<br/>
                {'>'} Operating hours: 24/7 support<br/>
                {'>'} Response time: {'<'} 2h
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              {['name', 'phone', 'email'].map((field) => (
                <input key={field} type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field} value={formData[field]} onChange={handleChange}
                  placeholder={field === 'name' ? 'Your name' : field === 'phone' ? 'Phone number' : 'Email'}
                  className="w-full px-4 py-3 bg-transparent border border-white/8 text-white placeholder-white/15 focus:outline-none focus:border-[#39ff14]/40 transition-colors text-sm font-mono-cyber"
                />
              ))}
              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder="Your message" rows={4}
                className="w-full px-4 py-3 bg-transparent border border-white/8 text-white placeholder-white/15 focus:outline-none focus:border-[#39ff14]/40 transition-colors resize-none text-sm font-mono-cyber" />

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1 accent-[#39ff14]" defaultChecked />
                <label htmlFor="consent" className="text-[10px] text-white/15 font-mono-cyber">
                  I consent to the processing of personal data
                </label>
              </div>

              <button type="submit"
                className="w-full py-4 bg-[#39ff14] text-[#0a0a0f] font-bold text-xs tracking-[0.15em] cyber-clip-sm transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Orbitron', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
                {submitted ? '// REQUEST_SENT' : <><Send size={14} /> SUBMIT REQUEST</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
