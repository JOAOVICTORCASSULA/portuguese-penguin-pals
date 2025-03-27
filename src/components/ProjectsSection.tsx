
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

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
  github?: string;
};

const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
      github: 'https://github.com',
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
      github: 'https://github.com',
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-transparent border border-red-600/20 overflow-hidden group hover:border-red-600/60 transition-all rounded-2xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-64 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 opacity-100 group-hover:opacity-90 transition-opacity`}></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all duration-500 ${hoveredId === project.id ? 'scale-110 blur-sm' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 flex items-center justify-center z-20 opacity-0 ${hoveredId === project.id ? 'opacity-100' : ''} transition-opacity duration-300`}>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="bg-black/50 border-white/20 text-white hover:bg-red-600 hover:text-white rounded-full" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                    {project.github && (
                      <Button variant="outline" size="icon" className="bg-black/50 border-white/20 text-white hover:bg-red-600 hover:text-white rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-red-600/10 text-red-500 text-xs px-3 py-1 rounded-full font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
