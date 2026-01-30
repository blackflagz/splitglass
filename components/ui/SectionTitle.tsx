
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/i18n';

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, subtitle, tag = "Our Services" }) => {
  const { language } = useLanguage();
  
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#2979FF] mb-8">
        <span>{number} — {tag}</span>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-display font-bold tracking-tighter leading-[0.9] text-white mb-8 text-balance ${
           language === 'ar' 
             ? "text-[2.5rem] md:text-[3.5rem]" 
             : "text-[3.5rem] md:text-[5rem]"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className={`text-[#A0A0A0] max-w-3xl leading-relaxed font-light ${
           language === 'ar' ? "text-lg" : "text-xl"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
