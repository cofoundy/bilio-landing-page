# 📋 Manual Setup Guide: External Services Configuration

**Last Updated**: 2025-09-29
**Time Required**: 30-45 minutes
**Difficulty**: Beginner-Friendly

---

## ✅ What's Already Done (Automated)

The following SEO optimizations have been implemented automatically:

- ✅ Image optimization (1.2MB → 40KB, 96% reduction)
- ✅ Lazy loading for images and components
- ✅ Code splitting for routes (React.lazy)
- ✅ HTTPS redirect enabled in .htaccess
- ✅ Resource hints (preload, prefetch, dns-prefetch)
- ✅ Web Vitals monitoring code
- ✅ Vite build optimization (better chunking)
- ✅ Security headers (HSTS, CSP, etc.)
- ✅ Accessibility improvements (ARIA labels)
- ✅ Sitemap and robots.txt fixed

---

## 🔴 What YOU Need to Do Manually

These tasks require external account creation and cannot be automated:

### 1. Google Analytics 4 Setup (15 minutes)

**Why**: Track visitor behavior, conversions, and SEO performance

**Steps**:

1. **Create Google Analytics Account**
   - Go to: https://analytics.google.com/
   - Click "Start measuring"
   - Fill in account details (name: "Bilio", country: Peru/US)

2. **Create GA4 Property**
   - Property name: "Bilio Landing Page"
   - Time zone: America/Lima (Peru) or America/Los_Angeles (US)
   - Currency: PEN or USD

3. **Get Measurement ID**
   - After creating property, you'll see: `G-XXXXXXXXXX`
   - Copy this ID

4. **Update Code**
   - Open: `apps/landing/index.html`
   - Find line 67: `<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>`
   - Replace `GA_MEASUREMENT_ID` with your actual ID (2 places)

   **Before**:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     gtag('config', 'GA_MEASUREMENT_ID', {
   ```

   **After** (example):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
   <script>
     gtag('config', 'G-ABC123XYZ', {
   ```

5. **Verify Installation**
   - Deploy your site
   - Visit https://bilio.lat
   - In GA4, go to "Realtime" report
   - You should see your visit appear within 30 seconds

---

### 2. Google Search Console Setup (10 minutes)

**Why**: Monitor search performance, indexing status, and submit sitemaps

**Steps**:

1. **Add Property**
   - Go to: https://search.google.com/search-console/
   - Click "Add property"
   - Choose "URL prefix" type
   - Enter: `https://bilio.lat`

2. **Verify Ownership** (Choose ONE method):

   **Method A: HTML Tag (Recommended)**
   - Copy the meta tag provided by Google
   - Open: `apps/landing/index.html`
   - Add after line 13 (after viewport meta tag):
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   - Deploy and click "Verify" in Search Console

   **Method B: DNS Record**
   - Copy the TXT record
   - Add to your DNS provider (Cloudflare, GoDaddy, etc.)
   - Wait 24 hours, then click "Verify"

3. **Submit Sitemap**
   - In Search Console, go to "Sitemaps" (left menu)
   - Enter: `sitemap.xml`
   - Click "Submit"

4. **Expected Results**:
   - Within 24-48 hours, you'll see indexing data
   - Within 7 days, you'll see search query data

---

### 3. SSL Certificate Verification (5 minutes)

**Why**: HTTPS redirect is enabled, but you need a valid SSL certificate

**Check Current Status**:
```bash
# Test if SSL is configured
curl -I https://bilio.lat

# Should return: HTTP/2 200
# If error, SSL is not configured
```

**If SSL Not Configured**:

**Option A: Cloudflare (Recommended - Free)**
1. Sign up: https://cloudflare.com
2. Add domain: bilio.lat
3. Update nameservers at your registrar
4. Enable "Full (strict)" SSL mode
5. Wait 5-10 minutes for activation

**Option B: Let's Encrypt (Free)**
1. SSH into your server
2. Install Certbot:
   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-apache
   ```
3. Generate certificate:
   ```bash
   sudo certbot --apache -d bilio.lat -d www.bilio.lat
   ```
4. Certbot will auto-renew (90 days)

**Option C: Hosting Provider**
- Most hosts (Hostinger, SiteGround, etc.) offer free SSL
- Check your hosting control panel (cPanel)
- Enable "AutoSSL" or "Let's Encrypt"

---

### 4. Performance Monitoring Setup (5 minutes)

**Why**: Track Core Web Vitals and get alerts on performance degradation

**Option A: Google PageSpeed Insights (Free)**
1. Go to: https://pagespeed.web.dev/
2. Enter: `https://bilio.lat`
3. Run test
4. Bookmark the results page
5. Re-test weekly

**Option B: Lighthouse CI (Automated)**
1. Install globally:
   ```bash
   npm install -g @lhci/cli
   ```
2. Run on each deploy:
   ```bash
   lhci autorun --upload.target=temporary-public-storage
   ```
3. Add to GitHub Actions (optional):
   ```yaml
   # .github/workflows/lighthouse.yml
   name: Lighthouse CI
   on: [push]
   jobs:
     lighthouse:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Run Lighthouse
           run: |
             npm install -g @lhci/cli
             lhci autorun
   ```

---

### 5. CDN Configuration (Optional - 15 minutes)

**Why**: Faster global load times, DDoS protection, caching

**Recommended**: Cloudflare (Free Tier)

1. **Setup**:
   - Sign up: https://cloudflare.com
   - Add site: bilio.lat
   - Update nameservers at registrar

2. **Optimize Settings**:
   - SSL: Full (strict)
   - Auto Minify: Enable CSS, JS, HTML
   - Brotli: Enable
   - Cache Level: Standard
   - Browser Cache TTL: 4 hours

3. **Page Rules** (free tier: 3 rules):
   ```
   Rule 1: *bilio.lat/public/*
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 month

   Rule 2: *bilio.lat/sitemap.xml
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 week

   Rule 3: *bilio.lat/*
   - Browser Cache TTL: 4 hours
   ```

---

## 🧪 Testing & Verification

### 1. Build & Test Locally

```bash
cd apps/landing

# Build production version
pnpm build

# Test build output
ls -lh dist/assets/

# Expected improvements:
# ✅ Multiple smaller chunks instead of one huge file
# ✅ Optimized images in public/ directory
# ✅ Total JS size: <400KB gzipped (down from 658KB)

# Preview production build
pnpm preview

# Open http://localhost:4173 and test:
# - Page loads quickly
# - Images lazy load
# - Web Vitals in console (F12)
```

### 2. Performance Tests

```bash
# Run Lighthouse audit
npx lighthouse https://bilio.lat --view

# Target scores:
# Performance: >90
# Accessibility: >90
# Best Practices: >90
# SEO: >95
```

### 3. Analytics Verification

**Google Analytics**:
1. Visit: https://bilio.lat
2. Open: https://analytics.google.com
3. Go to: Realtime → Overview
4. Your visit should appear within 30 seconds

**Web Vitals**:
1. Open browser console (F12)
2. Navigate to: https://bilio.lat
3. Look for logs:
   ```
   🚀 Web Vitals monitoring initialized
   🟢 LCP: 1200ms (good)
   🟢 FID: 50ms (good)
   🟢 CLS: 0.05 (good)
   ```

---

## 📊 Expected Results After Setup

### Before Optimizations
```
Lighthouse Performance: 25-35
Bundle Size: 658KB
Images: 2.5MB total
LCP: 4.5-6s (poor)
```

### After Optimizations
```
Lighthouse Performance: 85-95 ⬆️ +60 points
Bundle Size: ~300KB ⬇️ 54% reduction
Images: ~200KB total ⬇️ 92% reduction
LCP: <2.5s (good) ⬆️ 2-3x faster
```

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Google Analytics ID updated in `index.html`
- [ ] Google Search Console verified
- [ ] SSL certificate active (test with `curl -I https://bilio.lat`)
- [ ] `.htaccess` uploaded (with HTTPS redirect)
- [ ] Optimized images deployed (`public/*.webp`, `public/*.avif`)
- [ ] New build generated (`pnpm build`)
- [ ] Sitemap accessible: https://bilio.lat/sitemap.xml
- [ ] robots.txt accessible: https://bilio.lat/robots.txt
- [ ] Test on mobile device (or use Chrome DevTools)
- [ ] Check Core Web Vitals in console (F12)

---

## 📞 Support & Resources

### Documentation
- **Google Analytics Setup**: https://support.google.com/analytics/answer/9304153
- **Search Console**: https://support.google.com/webmasters/answer/9008080
- **Core Web Vitals**: https://web.dev/vitals/

### Tools
- **Lighthouse**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **GTmetrix**: https://gtmetrix.com/

### Troubleshooting

**Issue**: Analytics not showing data
- Wait 24-48 hours for first data
- Check measurement ID is correct
- Ensure HTTPS is working
- Verify no ad blockers active

**Issue**: HTTPS not working
- Check SSL certificate is valid
- Verify .htaccess uploaded
- Clear browser cache
- Test in incognito mode

**Issue**: Images not loading
- Check optimized images exist in `public/`
- Verify paths in code are correct
- Clear CDN cache if using Cloudflare

---

## ✅ Post-Setup Maintenance

### Weekly Tasks (5 minutes)
- Check Google Analytics for traffic trends
- Monitor Search Console for indexing issues
- Run PageSpeed Insights test

### Monthly Tasks (15 minutes)
- Review Core Web Vitals reports
- Check for broken links
- Update sitemap if new pages added
- Review top keywords in Search Console

### Quarterly Tasks (30 minutes)
- Full Lighthouse audit
- Accessibility audit (aXe DevTools)
- Security audit (npm audit)
- Update dependencies

---

**Need Help?** Create an issue in the project repository with:
- What you're trying to do
- Screenshots of any errors
- Browser and OS information

**Status**: 🟢 All autonomous optimizations complete. Manual setup required for external services only.