
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { useLanguage } from '../lib/i18n';

export const Pricing = () => {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t('price.starter'),
      desc: t('price.starter_desc'),
      price: t('price.starter_price'),
      period: t('price.starter_period'),
      features: [
        t('wyg.card3_title'),
        t('wyg.card4_title'),
        t('trust.item4'),
      ],
      cta: t('price.cta_start'),
      href: '#contact',
      highlight: false,
    },
    {
      name: t('price.pro'),
      desc: t('price.pro_desc'),
      price: t('price.pro_price'),
      period: t('price.pro_period'),
      features: [
        t('wyg.card1_title'),
        t('wyg.card2_title'),
        t('wyg.card3_title'),
        t('wyg.card4_title'),
        t('trust.item4'),
      ],
      cta: t('price.cta_join'),
      href: '#waitlist',
      highlight: true,
    },
    {
      name: t('price.ent'),
      desc: t('price.ent_desc'),
      price: t('price.contact'),
      period: '',
      features: [
        t('wyg.card1_title'),
        t('wyg.card2_title'),
        t('wyg.card3_title'),
        t('wyg.card4_title'),
        t('trust.item4'),
        'API',
      ],
      cta: t('price.cta_contact'),
      href: '#contact',
      highlight: false,
    },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="pricing">
      <SectionTitle
        number="06"
        title={t('price.title')}
        subtitle=""
        tag={t('price.tag')}
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className={`relative rounded-[24px] border p-8 flex flex-col transition-all duration-300 ${plan.highlight
                ? 'border-[#2979FF]/40 bg-[#2979FF]/5 shadow-[0_0_40px_rgba(41,121,255,0.1)]'
                : 'border-white/10 bg-[#0A0A0A] hover:border-white/20'
              }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2979FF] to-transparent shadow-[0_0_15px_#2979FF]" />
            )}

            <h3 className="text-xl font-display font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-white/40 text-sm mb-6">{plan.desc}</p>

            <div className="mb-8">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              {plan.period && (
                <span className="text-white/30 text-sm ml-1">{plan.period}</span>
              )}
            </div>

            <ul className="flex-1 flex flex-col gap-3 mb-8">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                  <Check className="w-4 h-4 text-[#2979FF] flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a href={plan.href} className="block">
              <button
                className={`w-full py-3 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${plan.highlight
                    ? 'bg-[#2979FF] text-white hover:bg-[#2979FF]/90 shadow-[0_0_20px_rgba(41,121,255,0.3)]'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {plan.cta}
                <ArrowRight className={`w-3 h-3 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
