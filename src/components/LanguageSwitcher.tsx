
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage} 
      className="rounded-full border-red-600/20 hover:bg-red-600/10 hover:border-red-600/40 text-gray-400 hover:text-white"
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe className="h-4 w-4 mr-2 text-red-600" />
      <span className="text-xs font-mono uppercase tracking-wider">{language === 'pt' ? 'EN' : 'PT'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
