# Open Canvas Marketing: website

The full Open Canvas website. Every page is rendered on the server, so search engines receive complete HTML with all the SEO tags.

**Stack:**
- Next.js 16: React 19 running on Node.js
- TypeScript
- self-hosted brand fonts: Jost, DM Sans and JetBrains Mono

**Lighthouse (local test):**
- SEO: 100 on every page tested
- Best practices: 100
- Accessibility: 96–100
- Performance: 92–97

---

## 1. Run it on your computer

You need **Node.js 20.9 or newer** (download it from nodejs.org).

```bash
npm install
cp .env.example .env.local      # then open .env.local and fill it in
npm run dev                     # http://localhost:3000
```

To test the real production build:

```bash
npm run build
npm start                       # http://localhost:3000
```

---

## 2. Before you go live: fill in your details

| What | Where |
|---|---|
| Your domain (**required**) | `.env` / host settings → `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com` |
| Email, WhatsApp, city, address, socials, founder LinkedIn | `src/lib/site.ts` (one file) |
| Prices, payment terms, notice period | `src/app/(site)/pricing/page.tsx`: search for `[` |
| Your bio, languages | `src/app/(site)/about/page.tsx` |
| FAQ answers with brackets | each service page under `src/app/(site)/services/…` |
| Legal text | `src/app/(site)/privacy/page.tsx`, `src/app/(site)/terms/page.tsx` (**have a lawyer review**) |
| Article publish date | `src/lib/routes.ts` → `articleDates` |

**Tip:** search the project for `[`. Every placeholder is in square brackets.

**How placeholders behave:**
- Anything still in brackets in `site.ts` is **left out of Google's structured data automatically**, so a placeholder never gets published to Google.
- An FAQ answer that still contains a placeholder is also kept out of the FAQ structured data until you fill it in.

---

## 3. Connect the forms

The site has three forms, and they send to `/api/audit` and `/api/subscribe`:
- **Book a free audit**
- **Checklist sign-up** on the homepage
- **Newsletter** on Insights

Choose one or both of these delivery options in your environment variables:
- **Email (SMTP):**
  - Set `CONTACT_TO_EMAIL`, plus `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS`.
  - Your email provider (Google Workspace, Zoho Mail, Hostinger, cPanel mail) gives you these details.
  - Visitors get an automatic "we got your request" email unless `AUTO_REPLY=false`.
- **Webhook:**
  - Set `FORMS_WEBHOOK_URL` to a Zapier, Make or n8n "Catch hook" URL.
  - From there, send leads to HubSpot or Zoho CRM, WhatsApp, Google Sheets, Mailchimp or Klaviyo.
  - You can also set `AUDIT_WEBHOOK_URL` and `SUBSCRIBE_WEBHOOK_URL` separately.

**Checklist PDF:** set `CHECKLIST_URL` to the PDF's link and SMTP will email it to everyone who signs up.

**Spam protection:** every form has a hidden honeypot field and per-visitor rate limiting.

**If neither option is set:** in production the forms show a clear "not connected yet" message, so no lead is ever silently lost.

**After a successful submission:**
- Audit requests go to `/thank-you/audit`.
- Checklist sign-ups go to `/thank-you/checklist`.
- Use these two URLs as conversion goals in Google Analytics or Google Ads.

---

## 4. Deploy and connect your domain

Pick **one** of these.

### Option A: Vercel (easiest, free to start)
1. Put this folder in a GitHub repository, or use the `vercel` command-line tool.
2. Go to vercel.com → **Add New Project** → import the repo. Vercel detects Next.js by itself.
3. Under **Settings → Environment Variables**, add the variables from `.env.example`. `NEXT_PUBLIC_SITE_URL` is required.
4. Under **Settings → Domains**, add `yourdomain.com` and `www.yourdomain.com`, and set **www** as primary (or the other way round, to match `NEXT_PUBLIC_SITE_URL`).
5. At your domain registrar (GoDaddy, Namecheap and so on), add the DNS records Vercel shows you. Usually these are:
   - `A  @  76.76.21.21`
   - `CNAME  www  cname.vercel-dns.com`
6. HTTPS is issued automatically within minutes.

### Option B: cPanel / Hostinger / any host with "Setup Node.js App"
**Namecheap shared hosting:** follow `NAMECHEAP.md`. It includes a one-command packaging script (`scripts/package-namecheap.sh`).

1. Build it on your computer:
   ```bash
   STANDALONE=1 npm run build
   ```
2. Upload these to the app folder on the server:
   - the whole `.next/standalone` folder (it already includes the fonts for the share images)
   - `.next/static` → into `.next/standalone/.next/static`
   - `public` → into `.next/standalone/public`
3. In **Setup Node.js App**:
   - Node version: 20 or newer
   - Startup file: `server.js`
   - Add your environment variables
   - Click **Start**
4. Point the domain or subdomain at the app in cPanel. Turn on **SSL/TLS → AutoSSL** (Let's Encrypt).

### Option C: VPS (Ubuntu) with Nginx + PM2
```bash
git clone … && cd open-canvas-marketing
npm ci && npm run build
cp .env.example .env && nano .env
npx pm2 start npm --name opencanvas -- start   # runs on port 3000
npx pm2 save && npx pm2 startup
```
Nginx reverse proxy (`/etc/nginx/sites-available/opencanvas`):
```nginx
server {
  server_name yourdomain.com www.yourdomain.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```
Then run `sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com` for HTTPS.

**One address only:** www and non-www must end up at the same address. Most hosts can redirect one to the other. If yours can't, set `CANONICAL_REDIRECT=1` and the site will do it.

---

## 5. SEO already built in

**Every page has:**
- a unique title (50–70 characters) and meta description (around 120–165 characters)
- a canonical URL
- Open Graph and Twitter Card tags, with a **branded share image generated per page** (`/og`)
- exactly one H1, a logical heading order, and alt text on every image
- breadcrumbs, both visible and in structured data

**Structured data (JSON-LD):**

| Schema type | Where |
|---|---|
| `ProfessionalService` (your business) | site-wide |
| `WebSite` | site-wide |
| `WebPage`, `AboutPage`, `ContactPage`, `CollectionPage` | matching pages |
| `BreadcrumbList` | every inner page |
| `Service` with a catalogue of what's included | each service page |
| `FAQPage` | every page with an FAQ |
| `BlogPosting` with author | the article |
| `Person` (founder) | About page |
| `ItemList` | Services, Work and Insights |

**Crawling:**
- `sitemap.xml` (with images) and `robots.txt` are generated automatically.
- `/llms.txt` gives AI search engines (ChatGPT, Perplexity, Gemini) a clean summary of the site.

**Speed:**
- Every page is static HTML.
- Images are served automatically as AVIF/WebP at the right size.
- Fonts are self-hosted and preloaded, so text doesn't jump while loading.
- Very little JavaScript is sent to the browser.

**Icons and app install:** favicon, Apple touch icon, a web app manifest and the theme colour.

**Security headers and redirects:**
- HTTPS-only (HSTS), nosniff, referrer policy and frame protection.
- Common old URLs redirect permanently: `/blog` → `/insights`, `/about-us` → `/about`, `/portfolio` → `/work` and others (in `next.config.ts`).

**Staging copy:** set `NEXT_PUBLIC_NOINDEX=1` and the whole copy is hidden from search engines.

**Analytics:**
- Set `NEXT_PUBLIC_GA_ID` to switch on Google Analytics 4.
- A cookie banner appears automatically, and GA loads only after the visitor accepts.
- Visitors can change their choice with the "Cookie settings" link in the footer.

**Search Console and Bing:** paste only the verification code into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or `NEXT_PUBLIC_BING_SITE_VERIFICATION`.

---

## 6. After launch (30 minutes, do once)

1. **Google Search Console**
   - Add the domain and verify it (the DNS method is best).
   - Submit `https://www.yourdomain.com/sitemap.xml`.
   - Use **URL Inspection → Request indexing** for the homepage and the 7 service pages.
2. **Bing Webmaster Tools:** import the site from Search Console in one click. This also covers ChatGPT search, which uses Bing.
3. **Google Business Profile:**
   - Create it or claim it.
   - Use the same name, phone number and address as in `site.ts`, and add the website link.
4. **Check the structured data:** test your service and article URLs at search.google.com/test/rich-results.
5. **Check the share previews:**
   - Paste a link into LinkedIn's Post Inspector and Facebook's Sharing Debugger.
   - You should see the branded share image.
6. **Analytics:** add `NEXT_PUBLIC_GA_ID`. In GA4, mark `/thank-you/audit` as a key event (conversion).

---

## 7. Adding content later

**New article:**
1. Copy `src/app/(site)/insights/what-to-automate-first/` to a new folder.
2. Edit the text.
3. Add the page to `src/lib/routes.ts` and `articleDates`.

It then appears in the sitemap, `llms.txt` and the structured data automatically. Add a card for it on `src/app/(site)/insights/page.tsx`.

**Real case study:** copy `src/app/(site)/work/lead-assistant/` in the same way.
- Only publish client names, quotes and numbers the client has approved in writing.

**Logo files:**
- `src/components/Logo.tsx` draws the lockup with the brand font.
- Swap it for the outlined master SVG when it's ready.

---

## Project map

```
src/
  app/
    layout.tsx              site-wide <head>, fonts, footer, business schema
    page.tsx                homepage
    (site)/…                every other page (shares the header)
    api/audit, api/subscribe   form endpoints
    og/route.tsx            branded share images
    sitemap.ts, robots.ts, manifest.ts, llms.txt/
    globals.css             design tokens + design-system styles
  components/               Header, Footer, Logo, forms, filters, cookie banner
  lib/
    site.ts                 ← YOUR BUSINESS DETAILS
    routes.ts               ← page titles, descriptions, sitemap settings
    seo.ts                  metadata + structured-data builders
public/images, public/brand   photos and icons
```

**Licences:**
- The fonts (Jost, DM Sans, JetBrains Mono) are under the SIL Open Font License.
- Photography was generated for Open Canvas.
