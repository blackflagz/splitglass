
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PremiumButton } from './ui/PremiumButton';
import { SectionTitle } from './ui/SectionTitle';
import { useLanguage } from '../lib/i18n';

export const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('price.free'),
      price: "0 MAD",
      period: t('price.period'),
      desc: t('price.free_desc'),
      features: ["3 extractions/month", "Basic alerts", "Email support"],
      cta: t('price.cta_join'),
      highlight: false
    },
    {
      name: t('price.pro'),
      price: "299 MAD",
      period: t('price.period'),
      desc: t('price.pro_desc'),
      features: ["Unlimited extractions", "Priority alerts", "Bid tracking dashboard", "Priority support"],
      cta: t('price.cta_join'),
      highlight: true
    },
    {
      name: t('price.ent'),
      price: t('price.contact'),
      period: "",
      desc: t('price.ent_desc'),
      features: ["API Access", "Custom integrations", "Team management", "Dedicated account manager"],
      cta: t('price.cta_contact'),
      highlight: false
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="pricing">
      <SectionTitle 
        number="04" 
        title={t('price.title')} 
        tag={t('price.tag')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-2xl border flex flex-col transition-all duration-300 ${
              plan.highlight 
                ? 'bg-[#2979FF]/5 border-[#2979FF]/30 shadow-[0_0_30px_rgba(41,121,255,0.1)]' 
                : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'
            }`}
          >
            {plan.highlight && (
               <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#2979FF] to-[#00E5FF] rounded-t-2xl" />
            )}
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                 <span className="text-3xl font-display font-bold text-white">{plan.price}</span>
                 {plan.period && <span className="text-white/40 text-sm">{plan.period}</span>}
              </div>
              <p className="text-white/40 text-sm mt-4">{plan.desc}</p>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
               {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                     <Check className="w-4 h-4 text-[#2979FF]" />
                     {feat}
                  </li>
               ))}
            </ul>

            <PremiumButton 
               variant={plan.highlight ? 'primary' : 'secondary'} 
               className={`w-full ${!plan.highlight && 'border border-white/10 hover:border-white/20 text-white'}`}
               href="#waitlist"
            >
               {plan.cta}
            </PremiumButton>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
