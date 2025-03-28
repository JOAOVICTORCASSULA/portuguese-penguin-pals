
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-mono">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
