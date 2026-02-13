/**
 * Custom prerender script for SplitGlass
 * 
 * Builds the Vite app, serves dist/ with a simple static file server,
 * then uses Puppeteer to visit each route and save rendered HTML.
 * 
 * Usage: node scripts/prerender.js
 */

import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// Simple static file server that serves dist/ with SPA fallback
function createStaticServer(distDir) {
    const MIME_TYPES = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.woff2': 'font/woff2',
        '.woff': 'font/woff',
        '.ttf': 'font/ttf',
        '.ico': 'image/x-icon',
        '.txt': 'text/plain',
        '.xml': 'application/xml',
    };

    return http.createServer(async (req, res) => {
        let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);

        try {
            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) {
                filePath = path.join(filePath, 'index.html');
            }
            const content = await fs.readFile(filePath);
            const ext = path.extname(filePath);
            res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
            res.end(content);
        } catch {
            // SPA fallback: serve index.html for all not-found routes
            try {
                const indexHtml = await fs.readFile(path.join(distDir, 'index.html'));
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(indexHtml);
            } catch {
                res.writeHead(500);
                res.end('Internal Server Error');
            }
        }
    });
}

async function discoverBlogRoutes() {
    const postsDir = path.join(ROOT, 'blog', 'posts');
    const files = await fs.readdir(postsDir);
    return files
        .filter(f => f.endsWith('.md'))
        .map(f => `/blog/${f.replace('.md', '')}`);
}

async function main() {
    console.log('📦 Building app...');
    const { execSync } = await import('child_process');
    execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });

    // Discover routes
    const blogRoutes = await discoverBlogRoutes();
    const routes = ['/', '/blog', ...blogRoutes];
    console.log(`\n🔍 Discovered ${routes.length} routes:`);
    routes.forEach(r => console.log(`   ${r}`));

    // Start static server
    const server = createStaticServer(DIST);
    const port = await new Promise((resolve) => {
        server.listen(0, () => resolve(server.address().port));
    });
    console.log(`\n🚀 Static server on http://localhost:${port}`);

    // Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    let successCount = 0;

    for (const route of routes) {
        const url = `http://localhost:${port}${route}`;
        console.log(`\n📄 Rendering: ${route}`);

        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

            // Wait a bit extra for React hydration and dynamic content
            await page.evaluate(() => new Promise(r => setTimeout(r, 500)));

            const html = await page.content();

            // Determine output path
            let outPath;
            if (route === '/') {
                outPath = path.join(DIST, 'index.html');
            } else {
                const routeDir = path.join(DIST, route.replace(/^\//, ''));
                await fs.mkdir(routeDir, { recursive: true });
                outPath = path.join(routeDir, 'index.html');
            }

            await fs.writeFile(outPath, html);
            console.log(`   ✅ Saved: ${path.relative(DIST, outPath)}`);
            successCount++;
        } catch (err) {
            console.error(`   ❌ Failed: ${err.message}`);
        }
    }

    await browser.close();
    server.close();

    console.log(`\n🎉 Pre-rendered ${successCount}/${routes.length} routes into dist/`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
