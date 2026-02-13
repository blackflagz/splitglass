import fs from 'fs/promises';
import path from 'path';

export default async function () {
    // Discover blog post slugs from markdown filenames
    const postsDir = path.join(process.cwd(), 'blog', 'posts');
    const files = await fs.readdir(postsDir);
    const blogRoutes = files
        .filter(f => f.endsWith('.md'))
        .map(f => `/blog/${f.replace('.md', '')}`);

    return {
        routes: [
            "/",
            "/blog",
            ...blogRoutes
        ],
        outDir: "dist",
        serveDir: "dist",
        buildCommand: "npm run build",
        flatOutput: false,
        viewport: { width: 1200, height: 800 }
    };
}
