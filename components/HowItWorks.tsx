
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Database, FileSpreadsheet, Scan } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { useLanguage } from '../lib/i18n';

// --- PIXEL-PERFECT SVG VISUALS ---

const UploadHUD = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#050505]">
    <div className="relative w-40 h-40">
        {/* Outer Brackets (Targeting System) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Corners */}
            <motion.path 
                d="M 20 30 L 20 20 L 30 20" 
                fill="none" stroke="#2979FF" strokeWidth="1" strokeOpacity="0.5"
                animate={{ d: ["M 20 30 L 20 20 L 30 20", "M 15 35 L 15 15 L 35 15", "M 20 30 L 20 20 L 30 20"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
                d="M 80 30 L 80 20 L 70 20" 
                fill="none" stroke="#2979FF" strokeWidth="1" strokeOpacity="0.5"
                animate={{ d: ["M 80 30 L 80 20 L 70 20", "M 85 35 L 85 15 L 65 15", "M 80 30 L 80 20 L 70 20"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
                d="M 20 70 L 20 80 L 30 80" 
                fill="none" stroke="#2979FF" strokeWidth="1" strokeOpacity="0.5"
                animate={{ d: ["M 20 70 L 20 80 L 30 80", "M 15 65 L 15 85 L 35 85", "M 20 70 L 20 80 L 30 80"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
                d="M 80 70 L 80 80 L 70 80" 
                fill="none" stroke="#2979FF" strokeWidth="1" strokeOpacity="0.5"
                animate={{ d: ["M 80 70 L 80 80 L 70 80", "M 85 65 L 85 85 L 65 85", "M 80 70 L 80 80 L 70 80"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Scanning Line */}
            <motion.line
                x1="20" y1="50" x2="80" y2="50"
                stroke="#2979FF" strokeWidth="1"
                strokeDasharray="4 2"
                animate={{ y1: [20, 80, 20], y2: [20, 80, 20], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </svg>

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
                animate={{ scale: [1, 0.9, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-lg bg-[#2979FF]/10 border border-[#2979FF]/30 flex items-center justify-center backdrop-blur-sm"
            >
                <Upload className="w-5 h-5 text-[#2979FF]" />
            </motion.div>
        </div>
        
        {/* Floating Upload Particles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: -30, opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
                />
             ))}
        </div>
    </div>
  </div>
);

const ExtractionHUD = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#050505]">
    <div className="relative w-40 h-40 flex items-center justify-center">
        {/* The Rotating Ring Container */}
        <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
            {/* Base Ring Track */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#00E5FF" strokeWidth="0.5" strokeOpacity="0.2" />
            
            {/* Active Segment (The "Loading" part) */}
            <circle 
                cx="50" cy="50" r="35" 
                fill="none" 
                stroke="#00E5FF" 
                strokeWidth="2" 
                strokeDasharray="60 160" // Creates a segment
                strokeLinecap="round"
                className="drop-shadow-[0_0_4px_rgba(0,229,255,0.8)]"
            />
        </svg>

        {/* Counter-Rotating Ticks (The "Notches" outside) */}
        <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite_reverse]" viewBox="0 0 100 100">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <line 
                    key={i}
                    x1="50" y1="10" x2="50" y2="15" 
                    stroke="#00E5FF" 
                    strokeWidth="1.5"
                    strokeOpacity={i % 2 === 0 ? 0.8 : 0.3}
                    transform={`rotate(${deg} 50 50)`}
                />
            ))}
        </svg>
        
        {/* Inner Static Container */}
        <div className="relative z-10 w-14 h-14 rounded-xl border border-[#00E5FF]/30 bg-[#00E5FF]/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.1)]">
             <Database className="w-6 h-6 text-[#00E5FF]" />
             {/* Tiny corner accents on the box */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00E5FF] opacity-50" />
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00E5FF] opacity-50" />
        </div>

        {/* Processing Text Effect */}
        <div className="absolute bottom-6 font-mono text-[8px] text-[#00E5FF] tracking-widest animate-pulse">
            PROCESSING
        </div>
    </div>
  </div>
);

const DownloadHUD = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-[#050505]">
    <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Grid Background (Excel) */}
        <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-[1px] opacity-20 rotate-45 scale-75">
             {[...Array(16)].map((_, i) => (
                 <motion.div 
                    key={i}
                    className="w-4 h-4 bg-[#2979FF]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                 />
             ))}
        </div>

        {/* Main Circle Outline */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#2979FF" strokeWidth="0.5" strokeOpacity="0.3" />
            <motion.circle 
                cx="50" cy="50" r="30" 
                fill="none" 
                stroke="#2979FF" 
                strokeWidth="2" 
                strokeDasharray="188" // Circumference
                strokeDashoffset="188"
                animate={{ strokeDashoffset: [188, 0] }} // Fill animation
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                transform="rotate(-90 50 50)"
            />
        </svg>

        {/* Center Success Icon */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-[#2979FF]/10 flex items-center justify-center border border-[#2979FF]/30">
             <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             >
                 <FileSpreadsheet className="w-6 h-6 text-[#2979FF]" />
             </motion.div>
        </div>
        
        {/* Checkmark particle */}
        <motion.div 
            className="absolute top-10 right-10 w-6 h-6 bg-[#00E5FF] rounded-full flex items-center justify-center shadow-[0_0_10px_#00E5FF]"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 1], delay: 1.5 }}
        >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </motion.div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const StepCard = ({ number, title, desc, visual, delay }: { number: string, title: string, desc: string, visual: React.ReactNode, delay: number }) => (
    <motion.div
        variants={fadeInUp}
        className="relative flex flex-col items-center text-center group"
    >
        {/* Glass Container for Visual */}
        <div className="relative w-full h-64 mb-10 rounded-[32px] bg-[#0A0A0A] border border-white/5 overflow-hidden group-hover:border-[#2979FF]/30 transition-all duration-500 shadow-2xl">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(41,121,255,0.05),transparent_70%)]" />
            
            {/* The Animated Visual */}
            {visual}

            {/* Step Number Badge - Floating Outside top left */}
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full border border-white/10 bg-black/80 backdrop-blur-md flex items-center justify-center font-mono text-xs text-white/40 group-hover:text-[#2979FF] group-hover:border-[#2979FF]/50 transition-colors z-20">
                {number}
            </div>
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-4">{title}</h3>
        <p className="text-white/40 leading-relaxed font-light max-w-xs mx-auto text-sm">
            {desc}
        </p>
    </motion.div>
);

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 bg-[#030303] border-t border-white/5 relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto relative z-20">
         <SectionTitle 
            number="03" 
            title={t('work.title')} 
            subtitle={t('work.subtitle')}
            tag={t('work.tag')}
         />

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* THE DATA PIPELINE (Connector Line) */}
          <div className="hidden md:block absolute top-[128px] left-[16%] right-[16%] h-[1px] bg-white/5 overflow-hidden z-0">
             {/* The moving pulse */}
             <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-[#2979FF] to-transparent opacity-100 shadow-[0_0_10px_#2979FF]"
             />
          </div>

          <StepCard 
            number="01"
            title={t('work.step1')}
            desc={t('work.step1_desc')}
            visual={<UploadHUD />}
            delay={0}
          />

          <StepCard 
            number="02"
            title={t('work.step2')}
            desc={t('work.step2_desc')}
            visual={<ExtractionHUD />}
            delay={0.2}
          />

          <StepCard 
            number="03"
            title={t('work.step3')}
            desc={t('work.step3_desc')}
            visual={<DownloadHUD />}
            delay={0.4}
          />

        </motion.div>
      </div>
    </section>
  );
};
