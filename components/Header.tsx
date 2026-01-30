
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { PremiumButton } from './ui/PremiumButton';
import { SplitGlassLogo } from './ui/SplitGlassLogo';
import { useLanguage, Language } from '../lib/i18n';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#how-it-works' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-black/80 backdrop-blur-2xl border-white/5 py-4' : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 group cursor-pointer">
            <SplitGlassLogo className="h-[30px] w-auto text-white" />
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[12px] font-semibold uppercase tracking-widest text-white/50 hover:text-[#2979FF] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all duration-300 ${
                  language === lang.code 
                    ? 'bg-[#2979FF] text-white shadow-lg shadow-[#2979FF]/20' 
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <PremiumButton size="sm" variant="primary" className="rounded-xl px-6" href="#waitlist">
            {t('nav.waitlist')}
          </PremiumButton>
        </div>

        <div className="md:hidden flex items-center gap-4">
           {/* Mobile Lang Switcher (Simplified) */}
           <button 
             onClick={() => setLanguage(language === 'en' ? 'fr' : language === 'fr' ? 'ar' : 'en')}
             className="text-white/60 text-xs font-bold border border-white/10 px-2 py-1 rounded-md"
           >
              {language.toUpperCase()}
           </button>

           <button 
            className="text-white/60 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-2xl font-display font-bold text-white/40 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-8 border-t border-white/5">
                <PremiumButton variant="primary" className="w-full py-5 rounded-2xl text-lg" href="#waitlist">{t('nav.waitlist')}</PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
