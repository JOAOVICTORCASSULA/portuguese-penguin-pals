
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando envio (em uma implementação real, aqui você chamaria uma API)
    setTimeout(() => {
      setIsSubmitting(false);
      // Resetar formulário ou mostrar mensagem de sucesso
    }, 1500);
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center mb-4">
            <span className="h-px w-8 bg-red-600 mr-3"></span>
            <h2 className="text-red-600 uppercase tracking-wider text-sm font-mono">
              {t('contact.subtitle')}
            </h2>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 font-mono">
            {t('contact.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informações de contato */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-8 font-mono">{t('contact.getInTouch')}</h3>
            
            <div className="space-y-8">
              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center border border-red-600/20 group-hover:border-red-600/60 transition-colors">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 font-mono">Email</h4>
                  <a href="mailto:contact@joaobillo.com" className="text-gray-400 hover:text-red-600 transition-colors">
                    contact@joaobillo.com
                  </a>
                </div>
              </div>
              
              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center border border-red-600/20 group-hover:border-red-600/60 transition-colors">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 font-mono">{t('contact.phone')}</h4>
                  <a href="tel:+5511999999999" className="text-gray-400 hover:text-red-600 transition-colors">
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center border border-red-600/20 group-hover:border-red-600/60 transition-colors">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 font-mono">{t('contact.location')}</h4>
                  <p className="text-gray-400">
                    São Paulo, Brasil
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-xl text-white font-bold mb-6 font-mono">{t('contact.social')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-red-600/20 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-red-600/20 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-red-600/20 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-red-600/20 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-red-600/20 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulário de contato */}
          <div className="order-1 lg:order-2">
            <div className="p-8 border border-red-600/20 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                {t('contact.sendMessage')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 font-mono">
                    {t('contact.name')}
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    required 
                    className="bg-black/50 border-red-600/20 focus:border-red-600 focus:ring-red-600 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 font-mono">
                    {t('contact.email')}
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-black/50 border-red-600/20 focus:border-red-600 focus:ring-red-600 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 font-mono">
                    {t('contact.message')}
                  </label>
                  <Textarea 
                    id="message" 
                    required 
                    rows={5}
                    className="bg-black/50 border-red-600/20 focus:border-red-600 focus:ring-red-600 text-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sending')}...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      {t('contact.send')} <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
