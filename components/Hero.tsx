
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Loader2, Users, AlertCircle, Check } from 'lucide-react';
import { PremiumButton } from './ui/PremiumButton';
import { AuroraBackground } from './ui/AuroraBackground';
import { submitWaitlist } from '../lib/api';
import { useLanguage } from '../lib/i18n';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await submitWaitlist(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <AuroraBackground className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-start order-2 lg:order-1"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2979FF]/30 bg-[#2979FF]/10 mb-8 mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2979FF] animate-pulse" />
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] text-[#2979FF] ${language === 'ar' ? 'tracking-normal font-bold' : ''}`}>
                  {t('hero.launching')}
                </span>
              </div>

              <h1 className={`font-anton tracking-wide mb-8 text-white relative uppercase ${
                language === 'ar' 
                  ? "text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.3]" 
                  : "text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1]"
              }`}>
                <span className="absolute inset-0 text-[#2979FF] blur-3xl opacity-20 select-none pointer-events-none">{t('hero.morocco')}</span>
                {t('hero.morocco')} <br />
                {t('hero.autonomous')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2979FF] to-[#00E5FF]">{t('hero.engine')}</span>
              </h1>
              
              <p className={`text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light ${
                language === 'ar' ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}>
                {t('hero.desc')}
              </p>

              <div className="max-w-md mx-auto lg:mx-0 mb-10 min-h-[50px]">
                 {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="w-full bg-[#2979FF]/10 border border-[#2979FF]/20 rounded-xl p-6 flex items-start gap-4 shadow-[0_0_30px_rgba(41,121,255,0.1)]"
                    >
                        <div className="mt-1 p-1 rounded-full bg-[#2979FF]/20 flex-shrink-0">
                            <Check className="w-4 h-4 text-[#2979FF]" />
                        </div>
                        <div className="text-start">
                            <h4 className="text-[#2979FF] font-bold text-sm mb-1">{t('hero.success')}</h4>
                            <p className="text-white/60 text-sm leading-relaxed">{t('hero.success_desc')}</p>
                        </div>
                    </motion.div>
                 ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 flex flex-col gap-2">
                          <input 
                            type="email" 
                            placeholder={t('hero.placeholder')} 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === 'loading'}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#2979FF]/50 focus:ring-1 focus:ring-[#2979FF]/20 transition-all font-mono text-sm shadow-[0_0_20px_rgba(41,121,255,0.05)] disabled:opacity-50"
                          />
                          {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-xs ps-2">
                                <AlertCircle className="w-3 h-3" />
                                {errorMessage}
                            </div>
                          )}
                      </div>
                      <PremiumButton 
                        variant="primary" 
                        size="md" 
                        className="rounded-xl whitespace-nowrap shadow-[0_0_20px_rgba(41,121,255,0.3)] h-[46px]"
                        disabled={status === 'loading'}
                      >
                         {status === 'loading' ? <Loader2 className="animate-spin w-4 h-4" /> : t('hero.cta')}
                      </PremiumButton>
                    </form>
                 )}
              </div>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-white/30 text-sm"
              >
                 <Users className="w-4 h-4 text-[#2979FF]" />
                 <span>{t('hero.social')}</span>
              </motion.div>
          </motion.div>

          {/* Right Column: Logo Scanning Animation */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
             <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full h-full max-w-[500px] flex items-center justify-center"
             >
                {/* Logo Container with 3D Float */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 w-80 h-80 flex items-center justify-center"
                >
                    {/* The Logo SVG */}
                    <div className="relative w-64 h-64 bg-black border border-white/10 rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden group">
                        {/* Inner Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                        
                        {/* The Provided Logo SVG */}
                        <svg 
                          viewBox="0 0 973 814" 
                          version="1.1" 
                          xmlns="http://www.w3.org/2000/svg" 
                          style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
                          className="w-44 h-44 relative z-10"
                        >
                          <path 
                            d="M323.279,553.23l-218.171,-0c-0.086,-2.01 -0.129,-4.031 -0.129,-6.064l-0,-528.554c0,-3.051 0.097,-6.075 0.291,-9.071l840.694,-0c3.846,0 7.657,0.077 11.433,0.231l0,192.223c0,-24.692 -24.58,-44.739 -54.855,-44.739c-1.173,0 -2.338,0.03 -3.493,0.089l-607.776,0l0,347.727c0,0.215 0.112,4.121 0.112,5.679c0,20.643 13.622,37.957 31.894,42.478Zm541.372,251.163l-840.694,0c-3.846,0 -7.657,-0.077 -11.433,-0.231l-0,-192.223c0,24.692 24.58,44.739 54.855,44.739c1.173,0 2.338,-0.03 3.493,-0.089l607.776,0l-0,-296.746l-34.754,-0.041l-153.308,0l0,69.378l59.43,1.146c19.885,-3.536 34.004,-12.414 34.004,-22.796l-0,145.574c-3.659,0.084 -7.351,0.126 -11.078,0.126c-0.025,0 -0.05,0 -0.076,0l-182.954,-2.182l-0,-123.809l0.079,0.002l0.18,-63.005l-0,-103.531l1.057,0l0,-1.317l469.464,-0c1.875,0 3.465,0.552 4.029,1.317l0.09,0c0.002,0.05 0.004,0.101 0.006,0.151c0.08,0.148 0.123,0.303 0.123,0.462l0,534.004c0,3.051 -0.097,6.075 -0.291,9.071Z"
                            fill="white"
                          />
                        </svg>

                        {/* Scanning Laser Line */}
                        <motion.div 
                          animate={{ top: ['-10%', '110%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                          className="absolute left-0 right-0 h-1 bg-[#00E5FF] shadow-[0_0_30px_#00E5FF] z-30 opacity-80 blur-[1px]"
                        />

                        {/* Scan Glow Area (Follows line) */}
                        <motion.div 
                          animate={{ top: ['-20%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                          className="absolute left-0 right-0 h-24 bg-gradient-to-b from-[#00E5FF]/0 via-[#00E5FF]/10 to-[#00E5FF]/0 z-20"
                        />
                    </div>
                </motion.div>

                {/* Outer Glow Ring */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="w-[500px] h-[500px] border border-[#2979FF]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[350px] h-[350px] border border-[#00E5FF]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>

                {/* Background Blobs - Reduced opacity as Aurora handles ambience */}
                <div className="absolute z-0 w-[400px] h-[400px] bg-[#2979FF] opacity-[0.05] blur-[100px] rounded-full animate-pulse" />
                
             </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 z-10">
        <ArrowDown className="w-5 h-5 animate-bounce text-[#2979FF]" />
      </div>
    </AuroraBackground>
  );
};
