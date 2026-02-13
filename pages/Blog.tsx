import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { getAllPosts } from '../blog';
import { useDocumentMeta } from '../lib/useDocumentMeta';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'marches-publics', label: 'Marchés Publics' },
    { id: 'guides', label: 'Guides' },
    { id: 'comparatifs', label: 'Comparatifs' },
    { id: 'ia-btp', label: 'IA & BTP' },
];

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const allPosts = getAllPosts();
    const posts = activeCategory === 'all'
        ? allPosts
        : allPosts.filter(p => p.category === activeCategory);

    useDocumentMeta({
        title: 'Blog — SplitGlass | Intelligence des marchés publics au Maroc',
        description: 'Articles, guides et analyses sur les marchés publics au Maroc, BPU, DQE, BPDE et l\'extraction automatique des bordereaux de prix.',
        url: 'https://splitglass.com/blog',
        lang: 'fr',
    });

    return (
        <div className="min-h-screen bg-[#020204] selection:bg-[#2979FF]/30 selection:text-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2979FF]/30 bg-[#2979FF]/10 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2979FF] animate-pulse" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2979FF]">
                                Blog
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                            Intelligence des marchés publics
                        </h1>
                        <p className="text-lg text-white/50 max-w-2xl mx-auto">
                            Guides, analyses et outils pour maîtriser les appels d'offres au Maroc.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <div className="max-w-5xl mx-auto px-6 pb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                ? 'bg-[#2979FF] text-white'
                                : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Post Grid */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                {posts.length === 0 ? (
                    <div className="text-center py-20 text-white/30">
                        <p className="text-lg">Aucun article dans cette catégorie pour le moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="group block bg-[#080808] border border-white/5 rounded-xl p-6 hover:border-[#2979FF]/30 transition-all duration-300 h-full"
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

                                    <h2 className="text-lg font-bold text-white mb-2 group-hover:text-[#2979FF] transition-colors leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-white/40 mb-4 line-clamp-3 leading-relaxed">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#2979FF] text-sm font-medium">
                                        Lire l'article
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                                            {post.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="flex items-center gap-1 text-[10px] text-white/25 font-mono">
                                                    <Tag className="w-2.5 h-2.5" />{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
