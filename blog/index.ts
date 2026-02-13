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

/**
 * Browser-compatible frontmatter parser.
 * Replaces gray-matter which requires Node.js Buffer.
 */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };

    const frontmatter = match[1];
    const content = match[2];
    const data: Record<string, unknown> = {};

    for (const line of frontmatter.split('\n')) {
        const colonIdx = line.indexOf(':');
        if (colonIdx === -1) continue;

        const key = line.slice(0, colonIdx).trim();
        let value: unknown = line.slice(colonIdx + 1).trim();

        // Remove surrounding quotes
        if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }

        // Parse arrays: ["item1", "item2"]
        if (typeof value === 'string' && value.startsWith('[')) {
            try {
                value = JSON.parse(value);
            } catch {
                // leave as string
            }
        }

        data[key] = value;
    }

    return { data, content };
}

export function getAllPosts(): BlogPost[] {
    return Object.entries(postModules)
        .map(([, raw]) => {
            const { data, content } = parseFrontmatter(raw as string);
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
