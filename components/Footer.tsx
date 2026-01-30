
import React, { useRef, useState } from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import { SplitGlassLogo } from './ui/SplitGlassLogo';
import { useLanguage } from '../lib/i18n';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  // Spotlight Logic for the large logo
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="relative z-20 bg-black" id="footer">
      
      <footer className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:flex-row md:justify-between border-t border-white/5">
        <div className="flex flex-col justify-start gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <SplitGlassLogo className="h-9 w-auto text-white" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {t('foot.desc')}
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white/40 hover:text-[#2979FF] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-white/40 hover:text-[#2979FF] transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold text-sm">{t('foot.prod')}</p>
            <a href="#how-it-works" className="text-sm text-white/40 hover:text-white transition-colors">{t('foot.how')}</a>
            <a href="#pricing" className="text-sm text-white/40 hover:text-white transition-colors">{t('nav.pricing')}</a>
            <a href="#faq" className="text-sm text-white/40 hover:text-white transition-colors">{t('nav.faq')}</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <p className="text-white font-bold text-sm">{t('foot.comp')}</p>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{t('nav.about')}</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{t('foot.blog')}</a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{t('nav.contact')}</a>
          </div>

          <div className="flex flex-col gap-4">
             <p className="text-white font-bold text-sm">{t('foot.legal')}</p>
             <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{t('foot.privacy')}</a>
             <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{t('foot.terms')}</a>
          </div>
        </div>
      </footer>

      {/* Resend-style Large Footer Logo with Spotlight */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="group relative hidden sm:flex items-center justify-center overflow-hidden bg-black py-32 border-t border-white/5 cursor-crosshair select-none"
      >
          {/* Static Dark Logo - Barely visible until lit */}
          <div className="relative z-10 w-full max-w-[1000px] px-8 transition-opacity duration-700">
             {/* Using a very dark grey to simulate the 'glass' look on black */}
             <SplitGlassLogo className="w-full h-auto text-[#111]" />
          </div>

          {/* Blue Ambient Glow - Follows Mouse */}
          <div 
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
            style={{
                opacity,
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(41, 121, 255, 0.15), transparent 40%)`
            }}
          />
          
          {/* Cyan Core Highlight - Sharper, brighter core for the premium feel */}
           <div 
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20 mix-blend-screen"
            style={{
                opacity,
                background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(0, 229, 255, 0.1), transparent 60%)`
            }}
          />
      </div>

      {/* Footer Branding */}
      <div className="relative overflow-hidden bg-black pb-8 pt-4 select-none pointer-events-none">
        <div className="text-center text-[10px] text-white/10 uppercase tracking-[0.2em] font-mono">
           © {currentYear} SPLITGLASS Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
