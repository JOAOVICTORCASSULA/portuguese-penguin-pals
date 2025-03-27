
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d94c6ea77b?q=80&w=1974')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          <span className="block">{t('hero.title')}</span>
          <span className="block mt-2 text-red-600">João Billo</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <a href="#projects">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium">
              {t('hero.cta')}
            </Button>
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
