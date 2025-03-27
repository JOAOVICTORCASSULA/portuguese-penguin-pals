
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

type Skill = {
  name: string;
  level: number;
  icon: string;
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 90, icon: '💻' },
    { name: 'JavaScript', level: 85, icon: '🧠' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'Node.js', level: 75, icon: '🔄' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'UI/UX Design', level: 65, icon: '🎨' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-black border-red-600/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-red-800 to-red-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
