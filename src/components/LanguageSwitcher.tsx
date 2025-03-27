
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
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="rounded-full"
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2 text-xs font-bold">{language === 'pt' ? 'EN' : 'PT'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
