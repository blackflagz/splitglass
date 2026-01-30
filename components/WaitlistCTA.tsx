
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, PartyPopper, AlertCircle } from 'lucide-react';
import { PremiumButton } from './ui/PremiumButton';
import { fadeInUp } from '../lib/animations';
import { submitWaitlist } from '../lib/api';
import { useLanguage } from '../lib/i18n';

export const WaitlistCTA = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await submitWaitlist(email, company);
      setStatus('success');
      setEmail('');
      setCompany('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-40 px-6 relative overflow-hidden flex flex-col items-center bg-black border-t border-white/5" id="waitlist">
      {/* Electric Blue Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2979FF] opacity-[0.08] blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#2979FF]/30 bg-[#2979FF]/5 text-[#2979FF] text-xs font-mono mb-8 uppercase tracking-[0.2em]">
            {t('cta.tag')}
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-white tracking-tighter">
            {t('cta.title')} <br />
            {/* UPDATED: Neon White Text */}
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">{t('cta.title_sub')}</span>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            {t('cta.desc')}
          </p>

          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="relative max-w-md mx-auto flex flex-col gap-4"
              >
                 <input
                    type="text"
                    placeholder={t('cta.comp_ph')}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#2979FF]/50 focus:ring-1 focus:ring-[#2979FF]/20 transition-all font-mono text-sm disabled:opacity-50"
                  />
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder={t('cta.email_ph')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === 'loading'}
                      className={`w-full bg-[#0A0A0A] border ${status === 'error' ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#2979FF]/50 focus:ring-1 focus:ring-[#2979FF]/20 transition-all font-mono text-sm disabled:opacity-50 ${language === 'ar' ? 'pl-20 pr-6' : 'pr-40 pl-6'}`}
                    />
                    <div className={`absolute top-1/2 -translate-y-1/2 ${language === 'ar' ? 'left-1' : 'right-1'}`}>
                      <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="bg-white text-black hover:bg-[#2979FF] hover:text-white transition-colors rounded-lg h-10 px-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            {t('cta.btn')} 
                            <ArrowRight className={`w-3 h-3 ${language === 'ar' ? 'rotate-180' : ''}`} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {status === 'error' && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-red-400 text-xs justify-center"
                    >
                        <AlertCircle className="w-3 h-3" />
                        <span>{errorMessage}</span>
                    </motion.div>
                  )}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0A0A0A] border border-[#2979FF]/20 rounded-2xl p-10 max-w-md mx-auto flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#2979FF]/10 flex items-center justify-center text-[#2979FF]">
                  <PartyPopper className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{t('hero.success')}</h3>
                  <p className="text-white/40 text-sm">{t('hero.success_desc')}</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs text-white/30 hover:text-[#2979FF] transition-colors mt-2 underline uppercase tracking-widest"
                >
                  {t('cta.another')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
