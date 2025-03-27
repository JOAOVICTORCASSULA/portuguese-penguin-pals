
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
  'hero.welcome': {
    pt: 'Bem-vindo ao meu portfólio',
    en: 'Welcome to my portfolio',
  },
  'hero.subtitle': {
    pt: 'Desenvolvedor Web focado em criar experiências digitais excepcionais',
    en: 'Web Developer focused on creating exceptional digital experiences',
  },
  'hero.cta': {
    pt: 'Conheça meu trabalho',
    en: 'See my work',
  },
  'hero.contact': {
    pt: 'Contato',
    en: 'Contact',
  },
  // Seção Sobre
  'about.subtitle': {
    pt: 'Quem sou eu',
    en: 'Who I am',
  },
  'about.title': {
    pt: 'Sobre Mim',
    en: 'About Me',
  },
  'about.description': {
    pt: 'Sou um desenvolvedor apaixonado por criar soluções web inovadoras e funcionais. Com experiência em diversas tecnologias modernas, busco sempre entregar projetos de alta qualidade que atendam às necessidades do cliente e proporcionem uma experiência excepcional ao usuário.',
    en: 'I am a developer passionate about creating innovative and functional web solutions. With experience in various modern technologies, I always seek to deliver high-quality projects that meet client needs and provide an exceptional user experience.',
  },
  'about.additional': {
    pt: 'Minha abordagem combina pensamento criativo com métodos ágeis para resolver problemas complexos de forma eficiente. Estou sempre aprendendo e me adaptando às novas tendências e tecnologias para oferecer as melhores soluções possíveis.',
    en: 'My approach combines creative thinking with agile methods to efficiently solve complex problems. I am always learning and adapting to new trends and technologies to offer the best possible solutions.',
  },
  'about.quote': {
    pt: '"A simplicidade é o mais alto nível de sofisticação. Acredito que o melhor código é aquele que resolve problemas de forma clara e direta."',
    en: '"Simplicity is the ultimate sophistication. I believe that the best code is one that solves problems in a clear and straightforward way."',
  },
  'about.present': {
    pt: 'Presente',
    en: 'Present',
  },
  'about.experience.title': {
    pt: 'Experiência Profissional',
    en: 'Professional Experience',
  },
  'about.experience.job1.title': {
    pt: 'Desenvolvedor Frontend Sênior',
    en: 'Senior Frontend Developer',
  },
  'about.experience.job1.description': {
    pt: 'Desenvolvimento de aplicações web com React, TypeScript e Tailwind CSS. Liderança de equipe e implementação de melhores práticas.',
    en: 'Development of web applications with React, TypeScript and Tailwind CSS. Team leadership and implementation of best practices.',
  },
  'about.experience.job2.title': {
    pt: 'Desenvolvedor Web',
    en: 'Web Developer',
  },
  'about.experience.job2.description': {
    pt: 'Criação de sites responsivos e aplicações interativas usando HTML, CSS, JavaScript e frameworks modernos.',
    en: 'Creation of responsive websites and interactive applications using HTML, CSS, JavaScript and modern frameworks.',
  },
  'about.education.title': {
    pt: 'Educação',
    en: 'Education',
  },
  'about.education.degree': {
    pt: 'Bacharelado em Ciência da Computação',
    en: 'Bachelor of Computer Science',
  },
  'about.education.school': {
    pt: 'Universidade Federal do Brasil',
    en: 'Federal University of Brazil',
  },
  // Seção Projetos
  'projects.subtitle': {
    pt: 'Onde encontrar meu trabalho',
    en: 'Where to find my work',
  },
  'projects.title': {
    pt: 'Minhas Plataformas',
    en: 'My Platforms',
  },
  'projects.description': {
    pt: 'Confira minhas plataformas e redes sociais onde compartilho meus projetos, código e conteúdo relacionado ao desenvolvimento.',
    en: 'Check out my platforms and social networks where I share my projects, code and content related to development.',
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
