
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, FileSpreadsheet } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { useLanguage } from '../lib/i18n';

// --- VISUAL COMPONENTS (Placeholders for Future Videos) ---

const RadarVisual = ({ color }: { color: string }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    {/* Grid Background */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
      }}
    />
    {/* Radar Sweep */}
    <div className="relative w-full h-full animate-[spin_4s_linear_infinite]">
      <div
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-top-left -translate-y-[1px]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 270deg, ${color}40 360deg)`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
    {/* Blip */}
    <motion.div
      animate={{ scale: [1, 2], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      className="absolute w-4 h-4 rounded-full"
      style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}
    />
  </div>
);

const PulseVisual = ({ color }: { color: string }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ scale: [1, 3], opacity: [0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        className="absolute border rounded-full"
        style={{
          width: '60px',
          height: '60px',
          borderColor: color,
          borderWidth: '2px'
        }}
      />
    ))}
    <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/10">
      <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }} />
    </div>
  </div>
);

const ChartVisual = ({ color }: { color: string }) => (
  <div className="absolute inset-0 flex items-end justify-center gap-2 pb-10 px-10 opacity-80">
    {[40, 70, 50, 90, 60].map((height, i) => (
      <motion.div
        key={i}
        initial={{ height: '20%' }}
        animate={{ height: [`${height}%`, `${height - 10}%`, `${height}%`] }}
        transition={{ duration: 2 + i, repeat: Infinity, ease: "easeInOut" }}
        className="w-full rounded-t-sm backdrop-blur-sm"
        style={{
          backgroundColor: `${color}40`, // 25% opacity
          borderTop: `2px solid ${color}`,
          boxShadow: `0 -10px 20px -5px ${color}40`
        }}
      />
    ))}
    {/* Data Line overlay */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: `drop-shadow(0 0 5px ${color})` }}>
      <motion.path
        d="M0 150 C 50 150, 50 100, 100 100 C 150 100, 150 180, 200 180 C 250 180, 250 80, 350 80"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="opacity-50"
      />
    </svg>
  </div>
);

const SplitGlassIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 973 814"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
    style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
  >
    <path
      d="M323.279,553.23l-218.171,-0c-0.086,-2.01 -0.129,-4.031 -0.129,-6.064l-0,-528.554c0,-3.051 0.097,-6.075 0.291,-9.071l840.694,-0c3.846,0 7.657,0.077 11.433,0.231l0,192.223c0,-24.692 -24.58,-44.739 -54.855,-44.739c-1.173,0 -2.338,0.03 -3.493,0.089l-607.776,0l0,347.727c0,0.215 0.112,4.121 0.112,5.679c0,20.643 13.622,37.957 31.894,42.478Zm541.372,251.163l-840.694,0c-3.846,0 -7.657,-0.077 -11.433,-0.231l-0,-192.223c0,24.692 24.58,44.739 54.855,44.739c1.173,0 2.338,-0.03 3.493,-0.089l607.776,0l-0,-296.746l-34.754,-0.041l-153.308,0l0,69.378l59.43,1.146c19.885,-3.536 34.004,-12.414 34.004,-22.796l-0,145.574c-3.659,0.084 -7.351,0.126 -11.078,0.126c-0.025,0 -0.05,0 -0.076,0l-182.954,-2.182l-0,-123.809l0.079,0.002l0.18,-63.005l-0,-103.531l1.057,0l0,-1.317l469.464,-0c1.875,0 3.465,0.552 4.029,1.317l0.09,0c0.002,0.05 0.004,0.101 0.006,0.151c0.08,0.148 0.123,0.303 0.123,0.462l0,534.004c0,3.051 -0.097,6.075 -0.291,9.071Z"
    />
  </svg>
);

// --- MAIN COMPONENT ---

const BigFeatureCard = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      className="col-span-1 md:col-span-3 relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-10 md:p-16 group min-h-[400px]"
    >
      {/* Background Gradient & Glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2979FF]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2979FF] opacity-[0.05] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00E5FF] opacity-[0.05] blur-[80px]" />

      {/* Top Tech Line - BOLDER */}
      <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#2979FF] to-transparent opacity-50 shadow-[0_0_15px_#2979FF]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 h-full">
        {/* Visual Element - Fluid Core with Logo */}
        <div className="relative w-full md:w-1/3 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Background Fluid Glow */}
            <div className="absolute inset-0 rounded-full bg-[#2979FF]/10 blur-3xl animate-pulse" />

            {/* Fluid Ring Animation */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center p-[2px] overflow-hidden">
              {/* Rotating Gradient 1 */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#2979FF_90deg,transparent_180deg)] animate-[spin_4s_linear_infinite]" />

              {/* Rotating Gradient 2 (Reverse & Offset) */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_0deg,#00E5FF_90deg,transparent_180deg)] animate-[spin_6s_linear_infinite_reverse] opacity-70 mix-blend-screen" />

              {/* Inner Circle Mask */}
              <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-full z-10" />
            </div>

            {/* Center Logo Container */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2979FF] to-[#00E5FF] flex items-center justify-center shadow-[0_0_50px_rgba(41,121,255,0.5)] border border-white/20">
                <SplitGlassIcon className="w-12 h-12 text-white fill-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-left">
          <div className="text-[#2979FF] font-mono text-xs uppercase tracking-widest mb-4">{t('feat.core')}</div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{t('feat.engine')}</h3>
          <p className="text-white/30 font-mono text-sm mb-6">{t('feat.engine_sub')}</p>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
            {t('feat.engine_desc')}
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
              <Database className="w-4 h-4 text-[#2979FF]" />
              <span className="text-sm text-white/80">{t('feat.context')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
              <FileSpreadsheet className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-sm text-white/80">{t('feat.native')}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface SmallFeatureCardProps {
  title: string;
  description: string;
  visual: React.ReactNode;
  color?: string;
}

const SmallFeatureCard = ({ title, description, visual, color = "#2979FF" }: SmallFeatureCardProps) => {
  const { t, language } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="group relative rounded-[24px] border border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col min-h-[360px] transition-all duration-300 hover:border-white/20"
    >
      {/* Top Gradient Line - BOLDER & GLOWING */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] opacity-100 transition-opacity duration-500 z-20"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 20px ${color}`
        }}
      />

      {/* Visual Viewport (Video Placeholder) */}
      <div className="relative h-[180px] w-full bg-black/20 border-b border-white/5 overflow-hidden group-hover:bg-black/40 transition-colors">
        {/* This is where the VIDEO will go later. For now, using CSS Animations. */}
        {visual}

        {/* Inner Shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />
      </div>

      {/* Corner Micro-Brackets */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/50 transition-colors rounded-tl-lg z-20" />
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/50 transition-colors rounded-tr-lg z-20" />

      {/* Content Body */}
      <div className="p-8 flex-1 flex flex-col justify-between relative z-10 bg-gradient-to-b from-transparent to-[#000000]">
        <div>
          <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
          <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{description}</p>
        </div>

        <div className="mt-6 flex items-center text-[10px] font-mono uppercase tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
          {t('feat.explore')} <ArrowRight className={`w-3 h-3 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
        </div>
      </div>
    </motion.div>
  )
}

export const Features = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="features">
      <SectionTitle
        number="02"
        title={t('feat.title')}
        subtitle={t('feat.subtitle')}
        tag={t('feat.tag')}
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Main Feature - Large Horizontal Card */}
        <BigFeatureCard />

        {/* Bento Modules - Video Ready */}
        <SmallFeatureCard
          title={t('feat.discovery')}
          description={t('feat.discovery_desc')}
          visual={<RadarVisual color="#2979FF" />}
          color="#2979FF"
        />
        <SmallFeatureCard
          title={t('feat.alerts')}
          description={t('feat.alerts_desc')}
          visual={<PulseVisual color="#00E5FF" />}
          color="#00E5FF"
        />
        <SmallFeatureCard
          title={t('feat.tracking')}
          description={t('feat.tracking_desc')}
          visual={<ChartVisual color="#2979FF" />}
          color="#2979FF"
        />
      </motion.div>
    </section>
  );
};
