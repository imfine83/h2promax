import React from 'react';
import { navItems } from '../data/mockData';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
              <path d="M12 8h6v12h12V8h6v32h-6V28H18v12h-6V8z" fill="#22C55E" />
              <text x="34" y="18" fontSize="12" fill="#22C55E" fontWeight="bold">2</text>
            </svg>
            <span className="font-bold text-white tracking-wider">ELEMENT</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-4">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-semibold tracking-wider hover:text-green-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} H2 ELEMENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
