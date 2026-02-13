
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { getAllPosts } from '../blog';
import { useLanguage } from '../lib/i18n';

export const FeaturedBlog: React.FC = () => {
    const { t } = useLanguage();
    const posts = getAllPosts().slice(0, 3);

    if (posts.length === 0) return null;

    return (
        <section className="relative py-32 px-6 overflow-hidden" id="blog-section">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2979FF]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2979FF]/30 bg-[#2979FF]/10 mb-6">
                        <BookOpen className="w-3 h-3 text-[#2979FF]" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2979FF]">
                            Blog
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Intelligence des marchés publics
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto">
                        Guides, analyses et stratégies pour maîtriser les appels d'offres au Maroc.
                    </p>
                </motion.div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="group block h-full bg-[#080808] border border-white/5 rounded-xl p-6 hover:border-[#2979FF]/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 rounded-md bg-[#2979FF]/10 text-[#2979FF] text-xs font-mono uppercase">
                                        {post.category}
                                    </span>
                                    <span className="text-white/20 text-xs flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(post.date).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#2979FF] transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-white/40 mb-4 line-clamp-3 leading-relaxed">
                                    {post.description}
                                </p>

                                <div className="flex items-center gap-2 text-[#2979FF] text-sm font-medium mt-auto">
                                    Lire l'article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#2979FF]/30 hover:bg-[#2979FF]/5 transition-all duration-300 text-sm font-semibold"
                    >
                        Voir tous les articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
