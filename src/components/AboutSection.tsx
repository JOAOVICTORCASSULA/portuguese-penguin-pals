
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden border border-red-600/20 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black/50"></div>
            <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border border-red-600/20 rounded-xl bg-black/50 backdrop-blur-sm">
                <h3 className="text-red-600 font-bold text-3xl">4+</h3>
                <p className="text-gray-400 mt-2 font-mono uppercase text-sm tracking-wider">
                  {t('about.years')}
                </p>
              </div>
              <div className="p-6 border border-red-600/20 rounded-xl bg-black/50 backdrop-blur-sm">
                <h3 className="text-red-600 font-bold text-3xl">50+</h3>
                <p className="text-gray-400 mt-2 font-mono uppercase text-sm tracking-wider">
                  {t('about.projects')}
                </p>
              </div>
              <div className="p-6 border border-red-600/20 rounded-xl bg-black/50 backdrop-blur-sm">
                <h3 className="text-red-600 font-bold text-3xl">20+</h3>
                <p className="text-gray-400 mt-2 font-mono uppercase text-sm tracking-wider">
                  {t('about.clients')}
                </p>
              </div>
              <div className="p-6 border border-red-600/20 rounded-xl bg-black/50 backdrop-blur-sm">
                <h3 className="text-red-600 font-bold text-3xl">5+</h3>
                <p className="text-gray-400 mt-2 font-mono uppercase text-sm tracking-wider">
                  {t('about.awards')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
