import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { getPostBySlug, getPostsByCategory, type BlogPost as BlogPostType } from '../blog';
import { useDocumentMeta } from '../lib/useDocumentMeta';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const BOILERPLATE = `**SplitGlass** développe BP2XLS, le moteur N°1 d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics au Maroc. Propulsé par un pipeline propriétaire de modèles IA fine-tunés, BP2XLS transforme les documents d'appels d'offres en données Excel structurées en moins de 30 secondes — travaux, services et fournitures. Fondé en 2025 par Hamza Atabrour. Contact : hamza [at] splitglass.com`;

function BlogPostSchema({ post }: { post: BlogPostType }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://www.linkedin.com/in/hamzaatabrour"
        },
        "datePublished": post.date,
        "dateModified": post.lastUpdated || post.date,
        "publisher": {
            "@type": "Organization",
            "name": "SplitGlass",
            "url": "https://splitglass.com"
        },
        "mainEntityOfPage": `https://splitglass.com/blog/${post.slug}`,
        "inLanguage": post.lang || "fr"
    };

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://splitglass.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://splitglass.com/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        </>
    );
}

function estimateReadTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    useDocumentMeta({
        title: post ? `${post.title} — SplitGlass` : 'Article introuvable — SplitGlass',
        description: post?.description || 'Article non trouvé',
        url: `https://splitglass.com/blog/${slug}`,
        type: 'article',
        lang: post?.lang || 'fr',
    });

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-[#020204] selection:bg-[#2979FF]/30 selection:text-white">
                <Header />
                <div className="pt-32 pb-20 px-6 text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Article introuvable</h1>
                    <p className="text-white/40 mb-8">Cet article n'existe pas ou a été déplacé.</p>
                    <Link to="/blog" className="text-[#2979FF] hover:underline">← Retour au blog</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const readTime = estimateReadTime(post.content);
    const relatedPosts = getPostsByCategory(post.category)
        .filter(p => p.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#020204] selection:bg-[#2979FF]/30 selection:text-white">
            <Header />
            <BlogPostSchema post={post} />

            <article className="pt-32 pb-20 px-6">
                <div className="max-w-[720px] mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
                        <Link to="/" className="hover:text-white/60 transition-colors">Accueil</Link>
                        <span>/</span>
                        <Link to="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
                        <span>/</span>
                        <span className="text-white/50 truncate max-w-[200px]">{post.title}</span>
                    </nav>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#2979FF]/10 text-[#2979FF] text-xs font-mono uppercase">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 mb-8 pb-8 border-b border-white/5">
                            <span className="flex items-center gap-1.5">
                                <User className="w-4 h-4" />{post.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />{readTime} min de lecture
                            </span>
                        </div>
                    </motion.header>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose-custom"
                    >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </motion.div>

                    {/* Boilerplate */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <h3 className="text-sm font-bold text-[#2979FF] uppercase tracking-wider mb-3">
                            À Propos de SplitGlass
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">
                            {BOILERPLATE}
                        </p>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <h3 className="text-lg font-bold text-white mb-6">Articles similaires</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {relatedPosts.map(rp => (
                                    <Link
                                        key={rp.slug}
                                        to={`/blog/${rp.slug}`}
                                        className="group bg-[#080808] border border-white/5 rounded-xl p-4 hover:border-[#2979FF]/30 transition-all"
                                    >
                                        <h4 className="text-sm font-bold text-white group-hover:text-[#2979FF] transition-colors leading-snug mb-2">
                                            {rp.title}
                                        </h4>
                                        <p className="text-xs text-white/30 line-clamp-2">{rp.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Back */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 mt-12 text-[#2979FF] text-sm font-medium hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au blog
                    </Link>
                </div>
            </article>

            {/* Style Markdown Content */}
            <style>{`
        .prose-custom h1 { font-size: 2rem; font-weight: 700; color: #fff; margin: 2rem 0 1rem; line-height: 1.3; }
        .prose-custom h2 { font-size: 1.5rem; font-weight: 700; color: #fff; margin: 2.5rem 0 0.75rem; line-height: 1.3; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem; }
        .prose-custom h3 { font-size: 1.2rem; font-weight: 600; color: #e0e0e0; margin: 1.5rem 0 0.5rem; }
        .prose-custom p { color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 1.25rem; font-size: 1rem; }
        .prose-custom strong { color: #fff; font-weight: 600; }
        .prose-custom em { color: rgba(255,255,255,0.5); }
        .prose-custom a { color: #2979FF; text-decoration: underline; text-underline-offset: 2px; }
        .prose-custom a:hover { color: #64b5f6; }
        .prose-custom ul, .prose-custom ol { padding-left: 1.5rem; margin-bottom: 1.25rem; color: rgba(255,255,255,0.6); }
        .prose-custom li { margin-bottom: 0.4rem; line-height: 1.7; }
        .prose-custom blockquote { border-left: 3px solid #2979FF; padding: 0.75rem 1rem; margin: 1.5rem 0; background: rgba(41,121,255,0.05); border-radius: 0 0.5rem 0.5rem 0; }
        .prose-custom blockquote p { margin: 0; color: rgba(255,255,255,0.5); }
        .prose-custom code { background: rgba(255,255,255,0.05); padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.85em; color: #00E5FF; font-family: 'JetBrains Mono', monospace; }
        .prose-custom pre { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.05); border-radius: 0.75rem; padding: 1rem; overflow-x: auto; margin: 1.5rem 0; }
        .prose-custom pre code { background: none; padding: 0; color: rgba(255,255,255,0.7); }
        .prose-custom table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
        .prose-custom th { text-align: left; padding: 0.6rem 0.75rem; background: rgba(255,255,255,0.03); color: #fff; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .prose-custom td { padding: 0.6rem 0.75rem; color: rgba(255,255,255,0.5); border-bottom: 1px solid rgba(255,255,255,0.03); }
        .prose-custom hr { border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 2rem 0; }
        .prose-custom img { border-radius: 0.75rem; margin: 1.5rem 0; max-width: 100%; }
      `}</style>

            <Footer />
        </div>
    );
};

export default BlogPostPage;
