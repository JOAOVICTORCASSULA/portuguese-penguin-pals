
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

type Skill = {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 90, icon: '💻', category: 'frontend' },
    { name: 'JavaScript', level: 85, icon: '🧠', category: 'frontend' },
    { name: 'React', level: 80, icon: '⚛️', category: 'frontend' },
    { name: 'Node.js', level: 75, icon: '🔄', category: 'backend' },
    { name: 'Python', level: 70, icon: '🐍', category: 'backend' },
    { name: 'UI/UX Design', level: 65, icon: '🎨', category: 'design' },
    { name: 'Figma', level: 80, icon: '🔍', category: 'design' },
    { name: 'TypeScript', level: 75, icon: '📝', category: 'frontend' },
    { name: 'Docker', level: 60, icon: '🐳', category: 'other' },
  ];

  const categories = [
    { id: 'all', label: t('skills.all') },
    { id: 'frontend', label: t('skills.frontend') },
    { id: 'backend', label: t('skills.backend') },
    { id: 'design', label: t('skills.design') },
    { id: 'other', label: t('skills.other') },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center mb-4">
            <span className="h-px w-8 bg-red-600 mr-3"></span>
            <h2 className="text-red-600 uppercase tracking-wider text-sm font-mono">
              {t('skills.subtitle')}
            </h2>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-mono">
            {t('skills.title')}
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full text-sm font-mono uppercase tracking-wider transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-transparent border border-red-600/20 text-gray-400 hover:border-red-600/60'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-transparent border border-red-600/20 hover:border-red-600/50 transition-colors"
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-white font-mono">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-gradient-to-r from-red-900 to-red-600 h-2.5 rounded-full relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-50"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 font-mono">
                  <span>0%</span>
                  <span>{skill.level}%</span>
                  <span>100%</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
