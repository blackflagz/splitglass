
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { useLanguage } from '../lib/i18n';
import { submitContact } from '../lib/api';

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const inputClasses = `w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#2979FF]/50 focus:ring-1 focus:ring-[#2979FF]/20 transition-all font-mono text-sm disabled:opacity-50`;

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="contact">
      <SectionTitle 
        number="06" 
        title={t('contact.title')} 
        tag={t('contact.tag')}
        subtitle={t('contact.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Decorative Side - Fluid Animation & Grid */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block relative min-h-[500px] rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/10 group"
        >
             {/* Fluid Background Blobs */}
             <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2979FF]/20 blur-[100px] animate-pulse" />
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00E5FF]/10 blur-[80px]" 
                    style={{ animation: 'spin 10s linear infinite' }}
                />
             </div>

             {/* Grid Map Visualization */}
             <div className="absolute inset-0 opacity-40" 
                  style={{ 
                    backgroundImage: 'linear-gradient(#2979FF 1px, transparent 1px), linear-gradient(90deg, #2979FF 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                  }} 
             />
             
             {/* Central Icon */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-[#2979FF]/30 flex items-center justify-center bg-[#2979FF]/5 backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(41,121,255,0.2)]">
                    <div className="absolute inset-0 rounded-full border border-[#2979FF]/20 animate-ping opacity-30 delay-1000"></div>
                    <div className="absolute inset-0 rounded-full border border-[#2979FF]/20 animate-ping opacity-30"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-8 h-8 text-[#2979FF]" aria-hidden="true">
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                </div>
             </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
        >
             <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-10 flex flex-col items-center text-center h-[500px] justify-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#2979FF]/10 flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-8 h-8 text-[#2979FF]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t('contact.success')}</h3>
                        <p className="text-white/60">{t('contact.success_desc')}</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="mt-8 text-sm text-[#2979FF] hover:text-white transition-colors underline underline-offset-4"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">{t('contact.name')}</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    className={inputClasses}
                                    disabled={status === 'loading'}
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">{t('contact.email')}</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    className={inputClasses}
                                    disabled={status === 'loading'}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">{t('contact.message')}</label>
                            <textarea 
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                                className={`${inputClasses} h-40 resize-none`}
                                disabled={status === 'loading'}
                                required
                            />
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                <AlertCircle className="w-4 h-4" />
                                {errorMessage}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={status === 'loading'}
                            className="w-full bg-white text-black hover:bg-[#2979FF] hover:text-white transition-all duration-300 rounded-xl h-14 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(41,121,255,0.4)]"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    {t('contact.sending')}
                                </>
                            ) : (
                                <>
                                    {t('contact.submit')}
                                    <Send className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                                </>
                            )}
                        </button>
                    </form>
                )}
             </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
