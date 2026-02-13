# Webapp Agent Execution Brief: SEO & Blog Infrastructure for splitglass.com

> **Context**: You are modifying the SplitGlass webapp at `c:\Users\Hamza\Desktop\DEPLOY`.
> This webapp is a **Vite + React 19 + TypeScript SPA** using Tailwind CDN, Framer Motion, and Three.js. Deployed on **Cloudflare Pages**. Currently has no routing — it's a single-page landing site.
>
> **Objective**: Add blog infrastructure and SEO optimizations to rank for Moroccan public procurement keywords, outrank competitor Datao.ma, and get cited by AI search engines (ChatGPT, Gemini, Perplexity).

---

## ⚠️ CRITICAL SEO RULES (Feb 2026 Standards)

These rules MUST be followed. Violations will hurt SEO or trigger penalties:

| Rule | Detail | Source |
|---|---|---|
| **FAQ schema is RESTRICTED** | Only for government and healthcare sites since August 2023. Do NOT add FAQPage schema to commercial sites. | Google Aug 2023 |
| **HowTo schema is DEPRECATED** | Rich results removed September 2023. Never recommend or implement. | Google Sept 2023 |
| **INP replaces FID** | FID was fully removed from Chrome tools Sept 9, 2024. Only reference INP (Interaction to Next Paint). Target: < 200ms. | Google 2024 |
| **AI crawlers DON'T execute JavaScript** | GPTBot, ClaudeBot, PerplexityBot cannot render JS. SSR or pre-rendering is **essential** for GEO. | claude-seo Feb 2026 |
| **Brand mentions > Backlinks for AI** | Brand mentions correlate 3× more strongly with AI visibility than backlinks (Ahrefs Dec 2025 study). | Ahrefs Dec 2025 |
| **Optimal AI citation passage** | 134-167 words per self-contained answer block for maximum AI citability. | claude-seo GEO skill |
| **Scaled Content Abuse enforcement** | Google's June 2025 enforcement wave targets AI-generated content at scale. ≥30-40% content must be genuinely unique per page. | Google 2025 |
| **Freshness is a RETRIEVAL signal** | AI-cited content is 25.7% fresher than regular Google results. ChatGPT/Perplexity list citations newest-to-oldest. Updating old content causes AI mention spikes. | Ahrefs 2026 study |
| **86% of AI sources are platform-unique** | Only 7 of top 50 domains appear on ALL THREE platforms (Google AIO, ChatGPT, Perplexity). Each needs separate optimization. | Ahrefs 75K brand study |
| **Long-tail sub-query fanning** | AI assistants decompose complex prompts into dozens of long-tail sub-queries, then combine answers. Ranking for niche sub-queries = inclusion in AI responses. | Ahrefs 2026 study |
| **Tree-walking algorithm** | Google AI reads content via semantic HTML tree structure top-to-bottom, chunking paragraph by paragraph. Well-structured content = easier processing = higher citation. | Ahrefs 2026 study |

---

## 📊 GEO Platform Intelligence (Ahrefs 75K Brand Study)

This data determines WHERE to focus brand mention efforts for each AI platform:

| AI Platform | Preferred Sources | Citation Optimization |
|---|---|---|
| **Google AI Overviews** | YouTube, Reddit, Quora, highly-linked pages | Get mentioned on pages with high backlink counts |
| **ChatGPT** | Publishers, news outlets (Reuters, AP), high-traffic pages | Get mentioned on pages with high organic traffic |
| **Perplexity** | Niche/regional sites, health/finance blogs, localized content | Get mentioned on topically relevant niche sites |

### Brand Mention Signal Strength
| Signal | Correlation with AI Citations |
|---|---|
| YouTube mentions | ~0.737 (strongest) |
| Reddit mentions | High |
| Wikipedia presence | High |
| LinkedIn presence | Moderate |
| Domain Rating (backlinks) | ~0.266 (weak) |

**Only 11% of domains** are cited by both ChatGPT and Google AI Overviews for the same query.

### What this means for SplitGlass:
- **YouTube**: Create BP2XLS demo videos showing PDF→Excel extraction
- **Reddit**: Post in r/Morocco, r/construction, r/govtech threads about BPU/DQE challenges
- **Niche sites**: Get mentioned on Moroccan BTP blogs, procurement forums
- **Content freshness**: Update existing articles regularly — each update can trigger AI mention spikes

---

## TASK 1: Add Client-Side Routing

### What to do
Install `react-router-dom` and add routing so the site supports multiple URL paths.

### Steps
1. Run `npm install react-router-dom`
2. Create a `pages/` directory alongside `components/`
3. Create `pages/Home.tsx` — move all current `App.tsx` JSX content here
4. Create `pages/Blog.tsx` — blog listing page (Task 3)
5. Create `pages/BlogPost.tsx` — individual article page (Task 3)
6. Update `App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  </BrowserRouter>
);
```

### Acceptance criteria
- `/` = current landing page (identical behavior)
- `/blog` = blog listing
- `/blog/some-slug` = individual posts
- Anchor links (`#pricing`, `#faq`) still work on homepage

---

## TASK 2: Schema Markup (Corrected for Feb 2026 Standards)

### ❌ DO NOT add FAQPage schema (restricted to gov/health since Aug 2023)
### ❌ DO NOT add HowTo schema (deprecated Sept 2023)

### ✅ DO add/update these schemas:

#### Update existing Organization schema (index.html line 21-32):
Add `sameAs`, `logo`, and `contactPoint`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SplitGlass",
  "url": "https://splitglass.com",
  "logo": "https://splitglass.com/logo.svg",
  "description": "Morocco-based startup building tender intelligence software for the construction industry. BP2XLS extracts pricing tables (BPU/BPDE/DQE) from tender PDFs into Excel.",
  "founder": { "@type": "Person", "name": "Hamza Atabrour" },
  "email": "hamza@splitglass.com",
  "address": { "@type": "PostalAddress", "addressCountry": "MA" },
  "sameAs": [
    "https://www.linkedin.com/company/splitglass",
    "https://github.com/splitglass"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hamza@splitglass.com",
    "contactType": "customer service"
  }
}
```

#### Add SoftwareApplication schema (new — after Organization schema):
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BP2XLS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI engine that extracts pricing tables (BPU, BPDE, DQE) from Moroccan tender PDFs and converts them into Excel files.",
  "url": "https://splitglass.com",
  "author": {
    "@type": "Organization",
    "name": "SplitGlass"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "MAD",
    "description": "Free tier available"
  }
}
```

#### Add WebSite schema with SearchAction (new):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SplitGlass",
  "url": "https://splitglass.com"
}
```

### On blog post pages (Task 3), add BlogPosting schema dynamically:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{post.title}",
  "description": "{post.description}",
  "author": {
    "@type": "Person",
    "name": "{post.author}",
    "url": "https://www.linkedin.com/in/hamzaatabrour"
  },
  "datePublished": "{post.date}",
  "dateModified": "{post.date}",
  "publisher": {
    "@type": "Organization",
    "name": "SplitGlass",
    "url": "https://splitglass.com"
  },
  "mainEntityOfPage": "https://splitglass.com/blog/{post.slug}",
  "inLanguage": "{post.lang}"
}
```

#### Add BreadcrumbList schema on blog pages:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://splitglass.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://splitglass.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "{post.title}" }
  ]
}
```

---

## TASK 3: Build Blog Infrastructure

### Dependencies
```bash
npm install react-markdown remark-gfm gray-matter
```

### Blog post format: `blog/posts/*.md`
```markdown
---
title: "Qu'est-ce qu'un Bordereau des Prix Unitaires (BPU) ? Guide Complet 2026"
slug: "guide-bpu-complet-2026"
description: "Tout savoir sur le BPU dans les marchés publics au Maroc."
date: "2026-02-15"
lastUpdated: "2026-02-15"
author: "Hamza Atabrour"
category: "marches-publics"
tags: ["BPU", "marchés publics", "Maroc"]
lang: "fr"
---

# Title

**Résumé** : [40-60 word quotable summary for LLM citation]

## [Content sections with question-based H2/H3 headings]

[Each major section should contain a 134-167 word self-contained answer block
that AI can quote without needing surrounding context]
```

> **FRESHNESS RULE**: The `lastUpdated` field is critical. AI-cited content is **25.7% fresher** than regular Google results. ChatGPT and Perplexity list citations newest-to-oldest. When updating old blog posts, always update `lastUpdated` AND `dateModified` in the BlogPosting schema.

### Blog loader: `blog/index.ts`
```typescript
const posts = import.meta.glob('./posts/*.md', { as: 'raw', eager: true });
import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  lang: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  return Object.entries(posts)
    .map(([, raw]) => {
      const { data, content } = matter(raw as string);
      return { ...data, content } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find(p => p.slug === slug);
}
```

### `pages/Blog.tsx` — Blog listing
- Dark theme: `bg-[#020204]`, cards with `bg-[#080808] border-white/5 rounded-xl`
- Hero: "Blog SplitGlass — Intelligence des marchés publics au Maroc"
- Grid of post cards: title, description, date, category badge
- Category filter: Marchés Publics, Guides, Comparatifs, IA & BTP
- Include Header and Footer components
- Dynamic meta: `<title>Blog - SplitGlass</title>`

### `pages/BlogPost.tsx` — Article page
- Max-width 720px content, dark theme
- Render markdown with `react-markdown` + `remark-gfm`
- Include dynamic BlogPosting + BreadcrumbList JSON-LD (from Task 2)
- **"À Propos" boilerplate** at end of every article:

> **SplitGlass** développe BP2XLS, le premier moteur IA marocain d'extraction automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des marchés publics. Fondé en 2025, SplitGlass transforme les documents d'appels d'offres en données Excel structurées en quelques secondes.

- "Articles similaires" section: 3 related posts from same category
- Publication date + author byline (E-E-A-T signal)

---

## TASK 4: Create `llms.txt` for AI Crawlers

This is a new standard (Dec 2025) that tells AI crawlers about your site's content.

### Create `public/llms.txt`:
```
# SplitGlass — Morocco's Tender Intelligence Platform

> BP2XLS is an AI engine that extracts pricing tables (BPU, BPDE, DQE) from Moroccan public tender PDFs and converts them into clean, bid-ready Excel files. Built for construction firms, BTP engineers, and procurement professionals in Morocco.

## Core Product
- [BP2XLS Engine](https://splitglass.com): AI-powered BPU/BPDE/DQE extraction from tender PDFs to Excel
- [Blog](https://splitglass.com/blog): Guides on Moroccan public procurement, BPU analysis, and tender intelligence

## Key Facts
- Founded: 2025, Morocco
- Founder: Hamza Atabrour
- Industry: GovTech / Construction Tech
- Supported Documents: BPU, BPDE, DQE, CPS from Moroccan public tenders (marchés publics)
- Technology: Vision Language Models (VLMs), OCR, AI-powered table extraction
- Contact: hamza@splitglass.com
```

---

## TASK 5: Update `robots.txt` for AI Crawlers

### Replace `public/robots.txt` with:
```
User-agent: *
Allow: /

# AI Search Crawlers - ALLOW for GEO visibility
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

# Training-only crawlers - BLOCK
User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: https://splitglass.com/sitemap.xml
```

---

## TASK 6: SEO Meta Tag Hook

### Create `lib/useDocumentMeta.ts`:
```typescript
import { useEffect } from 'react';

interface MetaConfig {
  title: string;
  description: string;
  url: string;
  type?: string;
  lang?: string;
}

export function useDocumentMeta(meta: MetaConfig) {
  useEffect(() => {
    document.title = meta.title;
    document.documentElement.lang = meta.lang || 'fr-MA';

    const setMeta = (attr: string, name: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.setAttribute('content', content);
    };

    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', meta.url);
    setMeta('property', 'og:type', meta.type || 'website');
  }, [meta]);
}
```

### Usage in BlogPost.tsx:
```typescript
useDocumentMeta({
  title: `${post.title} - SplitGlass`,
  description: post.description,
  url: `https://splitglass.com/blog/${post.slug}`,
  type: 'article',
  lang: post.lang
});
```

---

## TASK 7: Cloudflare Pages Config + Sitemap

### Create `public/_redirects`:
```
/* /index.html 200
```

### Update `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://splitglass.com/</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://splitglass.com/blog</loc>
    <lastmod>2026-02-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://splitglass.com/startup-profile</loc>
    <lastmod>2026-02-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

> As blog posts are added, update sitemap manually or create a build-time generator.

---

## TASK 8: Quick Fixes

### 8a. Fix Footer blog link (`components/Footer.tsx`, line 50):
```diff
-<a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{t('foot.blog')}</a>
+<a href="/blog" className="text-sm text-white/40 hover:text-white transition-colors">{t('foot.blog')}</a>
```

### 8b. Update `<html lang>` (`index.html`, line 2):
```diff
-<html lang="en" class="dark scroll-smooth">
+<html lang="fr-MA" class="dark scroll-smooth">
```

---

## TASK 9 (HIGH PRIORITY): Pre-rendering for AI Crawlers

> **Why this matters**: AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do NOT execute JavaScript. Without pre-rendering, your blog content is **invisible to every AI search engine**. This single task determines whether GEO works or not.

### Option A: Vite pre-render plugin (simpler)
```bash
npm install -D vite-plugin-prerender
```

```typescript
// vite.config.ts
import prerender from 'vite-plugin-prerender';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', '/blog', '/startup-profile'],
      // Add blog post routes as they are created
    })
  ],
});
```

### Option B: Migrate to Astro (best for SEO, bigger refactor)
Astro generates static HTML by default and is what Datao uses. Consider this as a future migration if the blog grows past 20 articles.

---

## TASK 10: GEO-Optimized Article Template

Every blog article MUST follow this structure to maximize AI citation probability.

> **WHY THIS STRUCTURE MATTERS**: Google AI uses a **tree-walking algorithm** that follows the semantic HTML structure of a page top-to-bottom. Content is chunked paragraph-by-paragraph and assessed for usefulness. Well-structured content with clear H1→H2→H3 hierarchy is significantly easier for AI to process and cite. Each section should make sense on its own but naturally connect to the next.

```markdown
# [Keyword-Rich Title with Year]

*Dernière mise à jour : [YYYY-MM-DD]* ← CRITICAL for freshness signal

**Résumé** : [40-60 word summary. Must be quotable by LLMs as-is.
Include: primary keyword, a statistic, and a clear answer.
Example: "Le Bordereau des Prix Unitaires (BPU) est un document contractuel
obligatoire dans les marchés publics au Maroc, encadré par le décret n° 2-22-431.
Il détaille les prix unitaires de chaque prestation dans un appel d'offres.
SplitGlass BP2XLS permet d'extraire automatiquement ces données depuis les PDF."]

## [First H2: Direct answer to the primary query]
[First 2 sentences = direct, definitive answer — group related thoughts]
[Then elaborate with 134-167 word self-contained passage — this is the
optimal length for AI citation. Keep each section focused on a SINGLE takeaway.
No long messy sections mixing multiple ideas.]

## [H2 matching long-tail sub-query / "People Also Ask" query]
[Another 134-167 word self-contained answer block]
[Long-tail queries are key: AI decomposes complex prompts into dozens of
sub-queries. Ranking for niche sub-queries = inclusion in AI responses.]

### [H3 with comparison table if applicable]
| Feature | Option A | Option B | BP2XLS |
|---|---|---|---|

## [More H2 sections with question-based headings]
[Each section = one focused topic. No buried conclusions.]

## À Propos de SplitGlass
SplitGlass développe BP2XLS, le premier moteur IA marocain d'extraction
automatique des bordereaux de prix (BPU/BPDE/DQE) depuis les PDF des
marchés publics. Fondé en 2025 par Hamza Atabrour, SplitGlass transforme
les documents d'appels d'offres en données Excel structurées en quelques
secondes. Contact : hamza@splitglass.com
```

### Content Quality Rules (avoid Google penalties)
- Each article: ≥ 1,500 words, ≥ 40% genuinely unique content
- No "mad-libs" patterns (not just swapping city/keyword names in templates)
- Each article must pass: "Would this be worth publishing standalone?"
- Include specific statistics with sources
- Include publication and last-updated dates (freshness = retrieval signal for AI)
- Author byline with credentials
- **Content structure**: Group related thoughts, one takeaway per section
- **No buried conclusions**: Put the key answer in the first 2 sentences of each section

### Content Freshness Protocol
- **On publish**: Set both `date` and `lastUpdated` in frontmatter
- **On update**: Change `lastUpdated`, update `dateModified` in BlogPosting schema
- **Refresh cycle**: Review all blog posts monthly; update facts, add new data
- **Why**: AI-cited content is 25.7% fresher than regular Google results. HubSpot saw 10,000+ new AI mentions after a single article update

---

## Competitor Comparison Page Template

For creating "Datao Alternative" and "X vs Y" pages:

### Structure
1. **Above fold**: Brief comparison summary with primary CTA
2. **Feature matrix table** (✅/❌/⚠️ format)
3. **Detailed comparison** by category
4. **After table CTA**: "Essayez BP2XLS gratuitement"
5. **Social proof** section
6. **Bottom CTA**: Final recommendation

### Schema for comparison pages
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BP2XLS by SplitGlass",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "MAD"
  }
}
```

### Fairness rules
- All competitor info must be verifiable from public sources
- Include "as of [date]" disclaimers on pricing
- Acknowledge competitor strengths honestly
- Clearly disclose affiliation

---

## Design System (Match Existing Site)

| Property | Value |
|---|---|
| Background | `#020204` |
| Text primary | `#ffffff` |
| Text muted | `rgba(255,255,255,0.4)` |
| Accent | `#2979FF` |
| Font headings | `Inter`, `letter-spacing: -0.04em` |
| Font body | `Inter` |
| Font code/tags | `JetBrains Mono` |
| Font Arabic headings | `Alexandria` |
| Font Arabic body | `Fustat` |
| Card style | `bg-[#080808] border border-white/5 rounded-xl` |
| Hover | `hover:border-[#2979FF]/30 transition-colors` |
| Animations | Framer Motion for scroll-reveal |

---

## Execution Order

1. **Task 1** — Routing (everything depends on it)
2. **Task 8** — Quick fixes (footer link + lang attribute)
3. **Task 3** — Blog infrastructure (main build)
4. **Task 6** — Meta tag hook
5. **Task 2** — Schema markup (Organization update + SoftwareApplication + BlogPosting)
6. **Task 4** — llms.txt for AI crawlers
7. **Task 5** — robots.txt for AI crawlers
8. **Task 7** — Cloudflare config + sitemap
9. **Task 9** — Pre-rendering (CRITICAL for GEO — without this, AI crawlers see nothing)
10. **Task 10** — Write first blog post using the GEO template

---

## First Blog Post to Write

Create `blog/posts/guide-bpu-complet-2026.md`:
- **Title**: "Qu'est-ce qu'un Bordereau des Prix Unitaires (BPU) ? Guide Complet 2026"
- **Target keyword**: "bordereau des prix unitaires"
- **Length**: 2,000+ words
- **Language**: French (fr-MA)
- **Sections**: Definition, legal context (décret 2-22-431), BPU structure, common errors, how BP2XLS automates extraction
- **Follow Task 10 template** exactly — include 134-167 word citation blocks
