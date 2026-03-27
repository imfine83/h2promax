import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import HowItWorks from "./components/HowItWorks";
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

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
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

export default App;
