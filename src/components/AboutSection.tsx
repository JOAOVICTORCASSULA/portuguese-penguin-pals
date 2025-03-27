
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
        <div className="max-w-3xl space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('about.description')}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t('about.additional')}
          </p>
          <div className="border-l-2 border-red-600 pl-6 my-8">
            <p className="text-gray-300 text-lg italic">
              {t('about.quote')}
            </p>
          </div>
          <div className="space-y-4 mt-8">
            <h3 className="text-white text-xl font-bold font-mono">{t('about.education.title')}</h3>
            <div className="p-5 border border-red-600/20 rounded-xl bg-black/30 backdrop-blur-sm">
              <h4 className="text-white font-bold text-lg">2014 - 2018</h4>
              <p className="text-red-500 font-mono">{t('about.education.degree')}</p>
              <p className="text-gray-400 mt-2">{t('about.education.school')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
