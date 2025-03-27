
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-800 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black/50"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-300 text-lg">
              {t('about.description')}
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 rounded-lg border border-red-600/20">
                <h3 className="text-red-600 font-bold">4+</h3>
                <p className="text-gray-300">Anos de Experiência</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-red-600/20">
                <h3 className="text-red-600 font-bold">50+</h3>
                <p className="text-gray-300">Projetos Completos</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-red-600/20">
                <h3 className="text-red-600 font-bold">20+</h3>
                <p className="text-gray-300">Clientes Satisfeitos</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-red-600/20">
                <h3 className="text-red-600 font-bold">5+</h3>
                <p className="text-gray-300">Prêmios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
