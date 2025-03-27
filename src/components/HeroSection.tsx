
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Creative Technologist'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing effect
      typingInterval = setInterval(() => {
        if (charIndex <= currentRole.length) {
          setTypedText(currentRole.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Pause before erasing
          pauseTimeout = setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      }, 100);
    } else {
      // Erasing effect
      typingInterval = setInterval(() => {
        if (charIndex >= 0) {
          setTypedText(currentRole.substring(0, charIndex));
          charIndex--;
        } else {
          clearInterval(typingInterval);
          // Move to next role
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setIsTyping(true);
        }
      }, 50);
    }

    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, [isTyping, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block text-xs font-mono bg-red-600/10 text-red-600 px-4 py-2 rounded-full uppercase tracking-wider">
              {t('hero.welcome')}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-white leading-tight">
              <span className="block">João Billo</span>
              <div className="h-16 flex items-center">
                <span className="text-red-600 flex items-center font-normal">
                  &lt;{typedText}<span className="animate-pulse">|</span>&gt;
                </span>
              </div>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-xl font-light">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg font-medium group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-red-600/40 text-white hover:bg-red-600/10 rounded-full px-8 py-6 text-lg font-medium">
                  {t('hero.contact')}
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 aspect-square rounded-full overflow-hidden p-2 border-2 border-red-600/30 relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974" 
              alt="João Billo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-white/50 hover:text-white transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
