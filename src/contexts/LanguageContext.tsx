
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

type Translations = {
  [key: string]: {
    pt: string;
    en: string;
  };
};

// Traduções do site
const translations: Translations = {
  // Cabeçalho
  'nav.home': {
    pt: 'Início',
    en: 'Home',
  },
  'nav.about': {
    pt: 'Sobre',
    en: 'About',
  },
  'nav.projects': {
    pt: 'Projetos',
    en: 'Projects',
  },
  'nav.skills': {
    pt: 'Habilidades',
    en: 'Skills',
  },
  'nav.contact': {
    pt: 'Contato',
    en: 'Contact',
  },
  // Seção Hero
  'hero.title': {
    pt: 'Olá, eu sou',
    en: 'Hello, I am',
  },
  'hero.subtitle': {
    pt: 'Desenvolvedor Web',
    en: 'Web Developer',
  },
  'hero.cta': {
    pt: 'Conheça meu trabalho',
    en: 'See my work',
  },
  // Seção Sobre
  'about.title': {
    pt: 'Sobre Mim',
    en: 'About Me',
  },
  'about.description': {
    pt: 'Sou um desenvolvedor apaixonado por criar soluções web inovadoras e funcionais. Com experiência em diversas tecnologias modernas, busco sempre entregar projetos de alta qualidade.',
    en: 'I am a developer passionate about creating innovative and functional web solutions. With experience in various modern technologies, I always seek to deliver high-quality projects.',
  },
  // Seção Projetos
  'projects.title': {
    pt: 'Meus Projetos',
    en: 'My Projects',
  },
  'projects.viewProject': {
    pt: 'Ver Projeto',
    en: 'View Project',
  },
  // Seção Habilidades
  'skills.title': {
    pt: 'Minhas Habilidades',
    en: 'My Skills',
  },
  // Seção Contato
  'contact.title': {
    pt: 'Entre em Contato',
    en: 'Get In Touch',
  },
  'contact.name': {
    pt: 'Nome',
    en: 'Name',
  },
  'contact.email': {
    pt: 'E-mail',
    en: 'Email',
  },
  'contact.message': {
    pt: 'Mensagem',
    en: 'Message',
  },
  'contact.send': {
    pt: 'Enviar',
    en: 'Send',
  },
  // Footer
  'footer.rights': {
    pt: 'Todos os direitos reservados',
    en: 'All rights reserved',
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
