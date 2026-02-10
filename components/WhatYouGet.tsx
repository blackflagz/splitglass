
import React from 'react';
import { motion } from 'framer-motion';
import { Target, ClipboardCheck, FileSpreadsheet, AlertTriangle } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { useLanguage } from '../lib/i18n';

const cards = [
    { icon: Target, color: '#2979FF', titleKey: 'wyg.card1_title', descKey: 'wyg.card1_desc' },
    { icon: ClipboardCheck, color: '#00E5FF', titleKey: 'wyg.card2_title', descKey: 'wyg.card2_desc' },
    { icon: FileSpreadsheet, color: '#2979FF', titleKey: 'wyg.card3_title', descKey: 'wyg.card3_desc' },
    { icon: AlertTriangle, color: '#FF6D00', titleKey: 'wyg.card4_title', descKey: 'wyg.card4_desc' },
];

export const WhatYouGet = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto" id="what-you-get">
            <SectionTitle
                number="03"
                title={t('wyg.title')}
                subtitle={t('wyg.subtitle')}
                tag={t('wyg.tag')}
            />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="group relative rounded-[24px] border border-white/10 bg-[#0A0A0A] p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-white/20"
                    >
                        {/* Top line accent */}
                        <div
                            className="absolute top-0 left-0 w-full h-[2px] opacity-60"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
                                boxShadow: `0 0 15px ${card.color}40`,
                            }}
                        />

                        {/* Icon */}
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all"
                            style={{ backgroundColor: `${card.color}15`, border: `1px solid ${card.color}30` }}
                        >
                            <card.icon className="w-6 h-6" style={{ color: card.color }} />
                        </div>

                        <h3 className="text-xl font-display font-bold text-white mb-3">{t(card.titleKey)}</h3>
                        <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                            {t(card.descKey)}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
