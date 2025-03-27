
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Gitlab, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';

type PlatformLink = {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
  description: {
    pt: string;
    en: string;
  };
};

const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const platformLinks: PlatformLink[] = [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com/username',
      icon: <Github className="h-12 w-12" />,
      description: {
        pt: 'Confira meus projetos de código aberto e repositórios pessoais.',
        en: 'Check out my open-source projects and personal repositories.',
      },
    },
    {
      id: 2,
      name: 'GitLab',
      url: 'https://gitlab.com/username',
      icon: <Gitlab className="h-12 w-12" />,
      description: {
        pt: 'Projetos privados e colaborações com equipes.',
        en: 'Private projects and team collaborations.',
      },
    },
    {
      id: 3,
      name: 'Portfolio',
      url: 'https://myportfolio.com',
      icon: <Globe className="h-12 w-12" />,
      description: {
        pt: 'Meu site de portfólio com trabalhos selecionados.',
        en: 'My portfolio website with selected works.',
      },
    },
    {
      id: 4,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: <Linkedin className="h-12 w-12" />,
      description: {
        pt: 'Meu perfil profissional e experiência de trabalho.',
        en: 'My professional profile and work experience.',
      },
    },
    {
      id: 5,
      name: 'Twitter',
      url: 'https://twitter.com/username',
      icon: <Twitter className="h-12 w-12" />,
      description: {
        pt: 'Compartilho atualizações sobre tecnologia e desenvolvimento.',
        en: 'I share updates about technology and development.',
      },
    },
    {
      id: 6,
      name: 'Instagram',
      url: 'https://instagram.com/username',
      icon: <Instagram className="h-12 w-12" />,
      description: {
        pt: 'Momentos do meu dia a dia como desenvolvedor.',
        en: 'Moments from my daily life as a developer.',
      },
    },
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center mb-4">
            <span className="h-px w-8 bg-red-600 mr-3"></span>
            <h2 className="text-red-600 uppercase tracking-wider text-sm font-mono">
              {t('projects.subtitle')}
            </h2>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-mono">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            {t('projects.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformLinks.map((platform) => (
            <a 
              key={platform.id} 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-transparent h-full border border-red-600/20 overflow-hidden group-hover:border-red-600/60 transition-all rounded-xl">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-red-600/10 mb-6 text-red-600 group-hover:bg-red-600/20 transition-all">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">{platform.name}</h3>
                  <p className="text-gray-400 line-clamp-3">{platform.description[language]}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
