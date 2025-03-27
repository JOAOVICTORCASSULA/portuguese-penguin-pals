
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8 border-t border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-red-600 font-bold text-2xl">João Billo</a>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} João Billo - {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
