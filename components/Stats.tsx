
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';

export const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "50+", label: t('stats.analyzed') },
    { value: "30s", label: t('stats.time') },
    { value: "93%", label: t('stats.accuracy') }
  ];

  return (
    <section className="py-24 px-6 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[#2979FF] font-mono text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
