
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileX, AlertOctagon, ClipboardX, Plus } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { SectionTitle } from './ui/SectionTitle';
import { useLanguage } from '../lib/i18n';

interface PainPoint {
  icon: React.ElementType;
  id: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
}

interface CardProps {
  item: PainPoint;
  index: number;
}

const HudCard: React.FC<CardProps> = ({ item, index }) => {
  const { t, language } = useLanguage();
  
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative h-full"
    >
      {/* Container Body */}
      <div className="relative h-full bg-[#080808] border border-white/5 p-8 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:bg-[#0A0A0A] overflow-hidden">
        
        {/* THE TOP GLOW LINE (Visual Consistency) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

        {/* Corner Brackets (The HUD Look) */}
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-cyan-500/50" />
        {/* Top Right */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-cyan-500/50" />
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-cyan-500/50" />
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-cyan-500/50" />

        {/* Technical Header ID */}
        <div className="flex items-center justify-between mb-8 font-mono text-xs tracking-widest text-white/30 group-hover:text-cyan-500/80 transition-colors">
          <span>[{item.id}]</span>
          <Plus className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Icon Area */}
        <div className="mb-6 relative inline-block">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          <item.icon className="w-8 h-8 text-white/40 group-hover:text-cyan-400 transition-colors duration-300 relative z-10" strokeWidth={1.5} />
        </div>
        
        {/* Typography */}
        <h4 className={`text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0 absolute top-20 ${language === 'ar' ? 'left-8' : 'right-8'}`}>
          {t(item.titleKey)}
        </h4>
        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-white transition-colors">
          {t(item.subtitleKey)}
        </h3>
        
        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">
          {t(item.descKey)}
        </p>

        {/* Bottom Technical Bar - Active State */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-cyan-500/50 transition-all duration-500 w-0 group-hover:w-full opacity-0 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};

export const UseCases = () => {
  const { t } = useLanguage();

  const painPoints: PainPoint[] = [
    { 
      icon: Clock, 
      id: "ERR_01",
      titleKey: "prob.time", 
      subtitleKey: "prob.time_sub",
      descKey: "prob.time_desc" 
    },
    { 
      icon: ClipboardX, 
      id: "ERR_02",
      titleKey: "prob.friction", 
      subtitleKey: "prob.friction_sub",
      descKey: "prob.friction_desc" 
    },
    { 
      icon: FileX, 
      id: "ERR_03",
      titleKey: "prob.system", 
      subtitleKey: "prob.system_sub",
      descKey: "prob.system_desc" 
    },
    { 
      icon: AlertOctagon, 
      id: "ERR_04",
      titleKey: "prob.risk", 
      subtitleKey: "prob.risk_sub",
      descKey: "prob.risk_desc" 
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#020204]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          number="01" 
          title={t('prob.title')} 
          subtitle={t('prob.subtitle')}
          tag={t('prob.tag')}
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {painPoints.map((point, idx) => (
            <HudCard key={idx} item={point} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
