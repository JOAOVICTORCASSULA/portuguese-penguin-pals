
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center mb-4">
            <span className="h-px w-8 bg-red-600 mr-3"></span>
            <h2 className="text-red-600 uppercase tracking-wider text-sm font-mono">
              {t('about.subtitle')}
            </h2>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-mono">
            {t('about.title')}
          </h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {t('about.description')}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('about.additional')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
