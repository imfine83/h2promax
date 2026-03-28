import React from "react";
import "./App.css";
import { LanguageProvider, rtlLangs } from "./contexts/LanguageContext";
import { useLanguage } from "./contexts/LanguageContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import PresentationSection from "./components/PresentationSection";
import ProductCatalog from "./components/ProductCatalog";
import ProductionSection from "./components/ProductionSection";
import DealerNetwork from "./components/DealerNetwork";
import CaseStudies from "./components/CaseStudies";
import BecomeDealerSection from "./components/BecomeDealerSection";
import NewsSection from "./components/NewsSection";
import CertificatesSection from "./components/CertificatesSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import DealerPackageSection from "./components/DealerPackageSection";

function AppInner() {
  const { isRtl } = useLanguage();
  return (
    <div className="App" dir={isRtl ? 'rtl' : 'ltr'}>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PresentationSection />
      <ProductCatalog />
      <ProductionSection />
      <TeamSection />
      <DealerNetwork />
      <CaseStudies />
      <BecomeDealerSection />
      <DealerPackageSection />
      <NewsSection />
      <CertificatesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
