
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trash2, BrainCircuit, ClipboardCheck } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { useLanguage } from '../lib/i18n';

const items = [
    { icon: ShieldCheck, titleKey: 'trust.item1', descKey: 'trust.item1_desc', color: '#2979FF' },
    { icon: Trash2, titleKey: 'trust.item2', descKey: 'trust.item2_desc', color: '#00E5FF' },
    { icon: BrainCircuit, titleKey: 'trust.item3', descKey: 'trust.item3_desc', color: '#2979FF' },
    { icon: ClipboardCheck, titleKey: 'trust.item4', descKey: 'trust.item4_desc', color: '#00E5FF' },
];

export const TrustSection = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto" id="trust">
            <SectionTitle
                number="08"
                title={t('trust.title')}
                subtitle={t('trust.subtitle')}
                tag={t('trust.tag')}
            />

            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-[#050505] hover:border-white/10 transition-all duration-300"
                    >
                        <div
                            className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center mt-1"
                            style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}25` }}
                        >
                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-base mb-2">{t(item.titleKey)}</h4>
                            <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors">
                                {t(item.descKey)}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
