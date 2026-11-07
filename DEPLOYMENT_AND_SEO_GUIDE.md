# 🚆 RailPNR Live: Free Hosting & SEO Traffic Playbook

Your high-performance Indian Railways PNR Status & Confirmation Prediction web application is built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS 4**.

---

## ⚡ 1. How to Host 100% Free on Vercel

Vercel provides a permanent **free tier ($0/month)** with global edge CDN, automated SSL/HTTPS, and zero server maintenance.

### Step-by-Step Deployment:
1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete Indian Railways PNR live website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/railpnr-live.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub.
   - Click **"Add New Project"** ➔ **"Import"** your `railpnr-live` repository.
   - Keep default settings (Framework preset: Next.js).
   - (Optional) In **Environment Variables**, add:
     - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com` (or your vercel app URL)
     - `RAPIDAPI_KEY`: *(Optional)* Your RapidAPI key for live CRIS/IRCTC queries. If omitted, the built-in deterministic simulator handles all requests reliably.
   - Click **Deploy**. In under 60 seconds, your site is live worldwide!

---

## 🌐 2. Add a Custom Domain (Free SSL)

Google ranks websites on custom domains (e.g., `railpnrstatus.in`, `pnrchecklive.com`) higher and faster than default subdomains.

1. Buy a cheap `.in` or `.com` domain (usually ₹299 - ₹499/year on Namecheap, GoDaddy, or Cloudflare).
2. Go to **Vercel Dashboard ➔ Project ➔ Settings ➔ Domains**.
3. Type your domain (e.g. `www.yourdomain.com`).
4. Update the 2 DNS records (A record & CNAME) provided by Vercel in your domain registrar.
5. Vercel automatically generates and auto-renews free SSL certificates!

---

## 🚀 3. How to Get Organic Google Traffic (SEO Strategy)

Indian Railways PNR queries get **over 35 million searches per month** on Google India. We built this application to rank for high-intent keywords:

### What is Already Built-in:
- **Server-Side Prerendering (SSG/SSR)**: Instant TTFB (Time to First Byte) and sub-second page loads.
- **Automated `/sitemap.xml`**: Updates dynamically for search engine bots.
- **Automated `/robots.txt`**: Configured to direct crawlers to your sitemap while guarding the internal API.
- **Schema.org Structured Data (JSON-LD)**:
  - `WebApplication` schema for rich app card previews.
  - `FAQPage` schema targeting Google's **"People Also Ask"** accordion snippets.
- **OpenGraph & Twitter Cards**: High-CTR previews when users share ticket status on WhatsApp, Facebook, or Telegram.

### 3 Steps to Start Ranking on Google:
1. **Google Search Console**:
   - Visit [search.google.com/search-console](https://search.google.com/search-console).
   - Add your domain as a property.
   - Verify ownership via DNS TXT record or HTML tag.
2. **Submit Sitemap**:
   - In Search Console, click **Sitemaps** in the left sidebar.
   - Enter `sitemap.xml` and click **Submit**. Google will crawl your pages within 24-48 hours.
3. **Keyword Expansion Pages (Programmatic SEO)**:
   - In the future, you can generate static pages for top 500 train routes:
     - `/train/12952-mumbai-rajdhani-express`
     - `/train/22436-vande-bharat-express`
     - `/pnr-status-delhi-to-mumbai`

---

## 💰 4. Monetizing Your Website

Once your daily traffic reaches 1,000+ visitors:
1. **Google AdSense**: Placeholders are already pre-styled in `src/components/AdPlaceholder.tsx`. Replace with your `ca-pub-XXXXXXXXXX` AdSense ad unit code.
2. **Travel Affiliate Programs**:
   - **MakeMyTrip / ixigo / EaseMyTrip**: Earn ₹20 - ₹50 per hotel or bus booking commission.
   - **RailRestro / Zoop**: Earn 10% commission on food ordered to train seats.
   - **Amazon Travel Gear**: Luggage, travel pillows, power banks.

---

## 🔑 5. Optional: Plug in a Live Paid/Free RapidAPI Key

The website is engineered with a **zero-breakage fallback**:
- If no API key is provided, it runs a deterministic realistic simulation that returns full coach, berth, probability, and charting status.
- If you want 100% live CRIS production queries:
  1. Sign up on [RapidAPI.com](https://rapidapi.com).
  2. Subscribe to any Indian Railways PNR Status API (many offer 500 free requests/month).
  3. Add `RAPIDAPI_KEY` in your `.env.local` or Vercel Environment Variables.
  4. The code automatically picks it up inside `src/lib/pnr-service.ts`.
