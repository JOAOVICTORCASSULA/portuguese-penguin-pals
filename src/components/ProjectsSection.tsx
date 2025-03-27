
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  image: string;
  tags: string[];
  url: string;
};

const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: {
        pt: 'Plataforma de e-commerce completa com sistema de pagamento, carrinho de compras e painel de administração.',
        en: 'Complete e-commerce platform with payment system, shopping cart, and admin panel.',
      },
      image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?q=80&w=1974',
      tags: ['React', 'Node.js', 'MongoDB'],
      url: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: {
        pt: 'Site de portfólio responsivo e moderno para um fotógrafo profissional.',
        en: 'Responsive and modern portfolio website for a professional photographer.',
      },
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1974',
      tags: ['HTML', 'CSS', 'JavaScript'],
      url: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: {
        pt: 'Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, notificações e sincronização na nuvem.',
        en: 'Task management application with drag-and-drop features, notifications, and cloud synchronization.',
      },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1974',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      url: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {t('projects.title')}
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-red-600/20 overflow-hidden hover:border-red-600/60 transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-red-600/10 text-red-500 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-red-600/40 text-red-500 hover:bg-red-600 hover:text-white" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {t('projects.viewProject')} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
