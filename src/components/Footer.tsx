
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-red-600 font-bold text-xl font-mono">
              <span className="text-white">&lt;</span>João Billo<span className="text-white"> /&gt;</span>
            </a>
            <p className="text-gray-500 mt-2 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <a 
              href="#home" 
              className="bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white p-3 rounded-full transition-colors mb-4"
            >
              <ArrowUp className="h-6 w-6" />
            </a>
            <div className="text-gray-500 text-sm font-mono">
              &copy; {currentYear} João Billo - {t('footer.rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
