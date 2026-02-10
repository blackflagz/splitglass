# Google for Startups Cloud Program — Website Verification Fix Guide

## Context for AI Agent

The user applied to the **Google for Startups Cloud Program** and received a rejection email stating:

> "We were not able to verify the company website you provided on your application — this means the link either did not load, led to a different page that did not match your company domain, or did not contain enough information about your company describing your product."

### Root Cause Analysis

The website is a **Single Page Application (SPA)** — React/Vite — hosted on **Cloudflare Pages**. When Google's verification crawler visits the site, it sees an empty HTML shell (`<div id="root"></div>` + a JS bundle) because:

1. **SPA Problem**: The HTML served contains no static business content. All content is rendered client-side via JavaScript. Non-JS crawlers see nothing useful.
2. **Cloudflare Bot Blocking**: Cloudflare Pages blocks certain bot user agents (returning error code 1010/403), potentially blocking Google's internal verification tools.
3. **Email Obfuscation**: Cloudflare's Scrape Shield replaces plain-text email addresses with JS-decoded scripts, making contact info invisible to non-JS crawlers.

---

## PART 1: Code Changes Required

### 1.1 — Create `/public/startup-profile.html` (Static Verification Page)

Create a **fully static HTML page** at `/public/startup-profile.html` that contains all company information readable without JavaScript. This is the most critical file.

**Required content (customize all values):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[COMPANY NAME] — Startup Profile</title>
  <meta name="description" content="[One-line description of the company and what it does]">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://[DOMAIN]/startup-profile">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 720px; margin: 0 auto; padding: 40px 24px;
      background: #020204; color: #e0e0e0; line-height: 1.7;
    }
    h1 { color: #ffffff; font-size: 1.8rem; margin-bottom: 0.5rem; }
    h2 { color: #2979FF; font-size: 1.1rem; margin-top: 2rem; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em; }
    ul { padding-left: 1.2rem; }
    li { margin-bottom: 0.4rem; }
    a { color: #2979FF; }
    .meta { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid #333; font-size: 0.9rem; color: #888; }
    .meta p { margin: 0.3rem 0; }
    .back { display: inline-block; margin-top: 2rem; color: #2979FF; text-decoration: none; font-size: 0.85rem; }
    .back:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>[COMPANY NAME] — Startup Profile</h1>

  <p>[2-3 sentence description of what the company does, what problem it solves, and for whom]</p>

  <h2>Core Capabilities</h2>
  <ul>
    <li>[Capability 1]</li>
    <li>[Capability 2]</li>
    <li>[Capability 3]</li>
    <li>[Capability 4]</li>
  </ul>

  <h2>Target Customers</h2>
  <ul>
    <li>[Customer segment 1]</li>
    <li>[Customer segment 2]</li>
    <li>[Customer segment 3]</li>
  </ul>

  <div class="meta">
    <p><strong>Founder:</strong> [Founder Name]</p>
    <!-- IMPORTANT: Use [at] notation to prevent Cloudflare email obfuscation -->
    <p><strong>Contact:</strong> [email] [at] [domain].com</p>
    <p><strong>Website:</strong> <a href="https://[DOMAIN]">https://[DOMAIN]</a></p>
    <p><strong>Country:</strong> [Country]</p>
    <p><strong>Stage:</strong> [e.g., Private beta, MVP, Pre-seed, etc.]</p>
    <p><strong>Last updated:</strong> [YYYY-MM-DD]</p>
  </div>

  <a href="https://[DOMAIN]" class="back">← Back to [COMPANY NAME]</a>
</body>
</html>
```

**IMPORTANT**: Do NOT use `mailto:` links or plain `@` in emails — Cloudflare will obfuscate them with JavaScript, making them invisible to non-JS crawlers. Use `[at]` notation instead.

---

### 1.2 — Create `/public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://[DOMAIN]/sitemap.xml
```

---

### 1.3 — Create `/public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://[DOMAIN]/</loc>
    <lastmod>[YYYY-MM-DD]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://[DOMAIN]/startup-profile</loc>
    <lastmod>[YYYY-MM-DD]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

**NOTE**: Use `/startup-profile` (without `.html`) because Cloudflare Pages automatically strips `.html` extensions and redirects with 308. Keep URLs consistent everywhere.

---

### 1.4 — Update `index.html` (Main SPA Entry)

Add THREE things to your `index.html` `<head>`:

#### A) SEO Meta Tags
```html
<title>[COMPANY NAME] — [Tagline]</title>
<meta name="description" content="[Full description of company and product]">
<link rel="canonical" href="https://[DOMAIN]/">

<!-- OpenGraph -->
<meta property="og:title" content="[COMPANY NAME] — [Tagline]">
<meta property="og:description" content="[Description]">
<meta property="og:url" content="https://[DOMAIN]/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="[COMPANY NAME]">
```

#### B) JSON-LD Structured Data
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[COMPANY NAME]",
  "url": "https://[DOMAIN]",
  "description": "[Description]",
  "founder": { "@type": "Person", "name": "[Founder Name]" },
  "email": "[email]@[domain].com",
  "address": { "@type": "PostalAddress", "addressCountry": "[2-letter country code]" }
}
</script>
```

#### C) Noscript Fallback (CRITICAL)
Add this just before `</body>` or before the main `<script>` tag:

```html
<noscript>
  <div style="max-width:600px;margin:40px auto;padding:20px;color:#e0e0e0;font-family:sans-serif;">
    <h1>[COMPANY NAME] — [Tagline]</h1>
    <p>[2-3 sentence description of what the company does]</p>
    <p><strong>Founder:</strong> [Name] | <strong>Contact:</strong> [email] [at] [domain].com |
      <strong>Country:</strong> [Country] | <strong>Stage:</strong> [Stage]
    </p>
    <p><a href="/startup-profile" style="color:#2979FF;">View full startup profile →</a></p>
  </div>
</noscript>
```

---

### 1.5 — Add Verification Link to Footer

Add a "Program Verification" or "Startup Profile" link in your website footer pointing to `/startup-profile`.

---

## PART 2: Cloudflare Dashboard Configuration (CRITICAL)

After deploying the code changes, you MUST configure Cloudflare to stop blocking verification crawlers. This is just as important as the code changes.

### 2.1 — Disable Browser Integrity Check

1. Go to **Cloudflare Dashboard** → select your domain
2. Navigate to **Security → Settings**
3. Find **"Browser Integrity Check"** → **Turn it OFF**

This feature blocks requests that don't have standard browser HTTP headers. Google's internal verification tools may not send browser-like headers.

### 2.2 — Disable Bot Fight Mode

1. Go to **Security → Bots**
2. Find **"Bot Fight Mode"** → **Turn it OFF**
3. Also check **"Block AI Bots"** → set to **"Do not block (allow crawlers)"**

### 2.3 — Create a Cloudflare Worker (Bypass Bot Protection)

**This is the most important Cloudflare step.** Cloudflare Pages has platform-level bot blocking (error 1010) that cannot be disabled through dashboard settings alone. You need a Worker to bypass it.

#### Steps:

1. Go to **Compute & AI → Workers & Pages** → **Create** → **Create Worker**
2. Name it something like `[company]-bypass`
3. Replace the default code with:

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const bypassPaths = ['/', '/startup-profile', '/robots.txt', '/sitemap.xml'];

    if (bypassPaths.includes(url.pathname)) {
      // Forward request with a clean browser-like user agent
      const newRequest = new Request(request.url, {
        method: request.method,
        headers: new Headers({
          'User-Agent': 'Mozilla/5.0 Internal-Proxy',
          'Accept': request.headers.get('Accept') || '*/*',
        }),
      });
      return fetch(newRequest);
    }

    return fetch(request);
  }
}
```

4. Click **Deploy**
5. Go to the Worker's **Settings** tab
6. Under **"Domains & Routes"** → click **"+ Add"** → select **"Route"**
7. Set:
   - **Zone:** `[your-domain.com]`
   - **Route:** `[your-domain.com]/*`
   - **Failure mode:** `Fail open (proceed)` ← IMPORTANT: select this so your site stays up if Worker hits daily limit
8. Click **"Add route"**

### 2.4 — Disable Email Obfuscation (if found)

1. Go to **Security → Settings** or **Speed → Content Optimization**
2. Look for **"Email Address Obfuscation"** → Turn it OFF

If you can't find this setting, it may not be enabled — the `[at]` notation in the static HTML already works around this.

---

## PART 3: Build, Deploy & Verify

### 3.1 — Build and Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=[your-pages-project-name] --commit-dirty=true
```

Or if auto-deploying via GitHub:
```bash
git add -A
git commit -m "Add static verification pages + SEO metadata for Google Startups"
git push
```

### 3.2 — Run Verification Tests

Run ALL of these and ensure they return status 200:

```bash
# Test with different user agents
curl -s -o /dev/null -w "%{http_code}" -A "Python-urllib/3.13" https://[DOMAIN]/
curl -s -o /dev/null -w "%{http_code}" -A "Python-urllib/3.13" https://[DOMAIN]/startup-profile
curl -s -o /dev/null -w "%{http_code}" -A "Googlebot/2.1 (+http://www.google.com/bot.html)" https://[DOMAIN]/
curl -s -o /dev/null -w "%{http_code}" -A "Mozilla/5.0 (compatible; Google-InspectionTool/1.0)" https://[DOMAIN]/

# Test static files
curl -s -o /dev/null -w "%{http_code}" https://[DOMAIN]/robots.txt
curl -s -o /dev/null -w "%{http_code}" https://[DOMAIN]/sitemap.xml

# Verify content is present (should show company info, not empty HTML)
curl -s -A "Python-urllib/3.13" https://[DOMAIN]/startup-profile | grep -i "[COMPANY NAME]"
```

**Expected results**: ALL should be `200`. The content check should return lines containing your company name.

### 3.3 — Verify No Email Obfuscation

```bash
curl -s https://[DOMAIN]/startup-profile | grep "email"
```

You should see the plain-text email, NOT a `data-cfemail` encoded string or `[email protected]` placeholder.

---

## PART 4: Reply to Google

Reply to the **same email thread** from Google for Startups. Example:

> Hi Google for Startups team,
>
> Thank you for the update. I've made the following improvements to our website:
>
> 1. Added a static company profile page with full product information: https://[DOMAIN]/startup-profile
> 2. Updated SEO metadata, structured data (JSON-LD), and added a noscript fallback with company details
> 3. Added robots.txt and sitemap.xml for crawler accessibility
> 4. Ensured all pages are accessible to non-JavaScript crawlers
>
> Our website at https://[DOMAIN] now contains comprehensive information about our product, team, and company. The startup profile page at https://[DOMAIN]/startup-profile is a static HTML page specifically designed for crawler verification.
>
> Please re-process our application at your convenience.
>
> Best regards,
> [Your Name]

---

## Summary Checklist

- [ ] Created `/public/startup-profile.html` (static, no JS required)
- [ ] Created `/public/robots.txt`
- [ ] Created `/public/sitemap.xml` (using `/startup-profile` without `.html`)
- [ ] Updated `index.html` with SEO meta tags, JSON-LD schema, and `<noscript>` fallback
- [ ] Added "Program Verification" link in footer → `/startup-profile`
- [ ] Used `[at]` notation for emails (not `mailto:` or plain `@`) to avoid Cloudflare obfuscation
- [ ] Disabled Browser Integrity Check in Cloudflare Security settings
- [ ] Disabled Bot Fight Mode in Cloudflare Security → Bots
- [ ] Set Block AI Bots to "Do not block"
- [ ] Created Cloudflare Worker with bypass logic for verification paths
- [ ] Added Worker Route: `[domain]/*` with "Fail open" mode
- [ ] Built and deployed the site
- [ ] Verified ALL curl tests return 200
- [ ] Replied to Google on the same email thread
