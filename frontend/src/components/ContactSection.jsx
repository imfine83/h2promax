import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="py-24 bg-gray-900 text-white" id="contacts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - contact info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              CONTACTS
            </h2>
            <p className="text-gray-400 mb-8">
              Fill out the feedback form and we will contact you
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+18001001389" className="text-white font-bold hover:text-green-400 transition-colors">
                    +1 (800) 100-13-89
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email for dealers</p>
                  <a href="mailto:dealer@h2element.com" className="text-white font-bold hover:text-green-400 transition-colors">
                    dealer@h2element.com
                  </a>
                  <br />
                  <a href="mailto:sales@h2element.com" className="text-white font-bold hover:text-green-400 transition-colors">
                    sales@h2element.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Head Office</p>
                  <p className="text-white font-bold">H2 Element International</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1 accent-green-600" defaultChecked />
                <label htmlFor="consent" className="text-sm text-gray-400">
                  I consent to the processing of personal data in accordance with the privacy policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-sm tracking-wider rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  'SENT SUCCESSFULLY!'
                ) : (
                  <>
                    <Send size={16} />
                    SUBMIT REQUEST
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
