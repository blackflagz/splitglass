
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Users, Globe } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { staggerContainer, fadeInUp } from '../lib/animations';
import { useLanguage } from '../lib/i18n';

const audiences = [
    { icon: Building2, key: 'wif.item1' },
    { icon: Briefcase, key: 'wif.item2' },
    { icon: Users, key: 'wif.item3' },
    { icon: Globe, key: 'wif.item4' },
];

export const WhoItsFor = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 px-6 bg-[#030303] border-t border-white/5 relative overflow-hidden" id="who-its-for">
            <div className="max-w-7xl mx-auto relative z-10">
                <SectionTitle
                    number="04"
                    title={t('wif.title')}
                    subtitle={t('wif.subtitle')}
                    tag={t('wif.tag')}
                />

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {audiences.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ y: -4 }}
                            className="group text-center p-8 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-[#2979FF]/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-5 text-white/30 group-hover:text-[#2979FF] group-hover:bg-[#2979FF]/10 transition-all">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <span className="text-white/80 text-sm font-medium">{t(item.key)}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
