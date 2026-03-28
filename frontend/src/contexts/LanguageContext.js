import React, { createContext, useContext, useState } from 'react';
import { en } from '../locales/en';
import { es } from '../locales/es';
import { he } from '../locales/he';

const translations = { en, es, he };
export const rtlLangs = ['he'];

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const isRtl = rtlLangs.includes(lang);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
