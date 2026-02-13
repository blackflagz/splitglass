import matter from 'gray-matter';

const postModules = import.meta.glob('./posts/*.md', { as: 'raw', eager: true });

export interface BlogPost {
    title: string;
    slug: string;
    description: string;
    date: string;
    lastUpdated: string;
    author: string;
    category: string;
    tags: string[];
    lang: string;
    content: string;
}

export function getAllPosts(): BlogPost[] {
    return Object.entries(postModules)
        .map(([, raw]) => {
            const { data, content } = matter(raw as string);
            return { ...data, content } as BlogPost;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return getAllPosts().find(p => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
    return getAllPosts().filter(p => p.category === category);
}
