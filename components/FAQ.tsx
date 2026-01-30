
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      q: t('faq.q1'),
      a: t('faq.a1')
    },
    {
      q: t('faq.q2'),
      a: t('faq.a2')
    },
    {
      q: t('faq.q3'),
      a: t('faq.a3')
    },
    {
      q: t('faq.q4'),
      a: t('faq.a4')
    },
    {
      q: t('faq.q5'),
      a: t('faq.a5')
    }
  ];

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto" id="faq">
      <div className="text-center mb-16">
         <span className="text-[#2979FF] font-mono text-xs uppercase tracking-widest">{t('faq.tag')}</span>
         <h2 className="text-4xl font-display font-bold text-white mt-4">{t('faq.title')}</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border border-white/5 rounded-xl bg-[#080808] overflow-hidden hover:border-[#2979FF]/30 transition-colors">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-white font-medium">{item.q}</span>
              {openIndex === i ? (
                <Minus className="w-4 h-4 text-[#2979FF]" />
              ) : (
                <Plus className="w-4 h-4 text-white/40" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-white/40 leading-relaxed text-sm">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
