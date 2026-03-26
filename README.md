# Fat Foogo Tattoo — Website

**Lead Score: 78/100 — TIER 1 HOT**

Custom Tattoo Studio Website for Fat Foogo Tattoo in Bregenz, Vorarlberg, Austria.

---

## Lead Analysis

### The Problem (Pain Point)
**Website: fat-foogo.at is TEXT ONLY — no portfolio, no photos, no atmosphere**

Tattoo studios LIVE from their portfolio. When a potential customer lands on a tattoo studio website, they want to SEE the art. They want to feel the vibe. They want to know: "Can this artist do what I want?" Without photos, there is no trust signal. No visual proof. No emotional hook.

**The hard truth:** A tattoo website without images is like a restaurant menu without photos of food.

### The Opportunity
- Online booking/contact form could **double inquiries**
- Bregenz has several tattoo studios — differentiation via a portfolio website is **crucial**
- A professional dark-artisan website positions Fat Foogo as the **premium choice** in the region
- Conversion-focused: every section leads to one action — **contact / call / book**

### Outreach Angle
> "Eure Website hat keinen einzigen Tattoo — wie sollen Kunden sehen ob sie euch vertrauen?"

Show, don't tell. This website proves the quality before they even call.

---

## What Was Built

A dark, premium, artisan tattoo studio website featuring:
- **Hero** — Full-screen cinematic entrance with CTA to call or contact
- **Artist Section** — Bio, specialization, style tags
- **Portfolio Grid** — 5 tattoo style categories with imagery
- **Process Section** — 4-step consultation-to-healing journey
- **Pricing** — Transparent sizing tiers, no hidden costs
- **Hygiene & Safety** — Trust signals that close hesitant customers
- **Contact Form + Google Maps** — Full conversion stack
- **Footer** — All essential info at a glance

### Design
- **Dark Artisan Aesthetic** — Charcoal (#1A1A1A), Blood Red (#CC0000), Gold (#C9A84C)
- **Fonts:** Bebas Neue (headings) + DM Sans (body)
- **Full responsive** — Mobile-first, works on all devices
- **Dark mode only** — Fits the tattoo studio vibe perfectly

---

## Tech Stack

- **Next.js 15** (React, TypeScript)
- **Tailwind CSS v3**
- **Google Fonts** (Bebas Neue + DM Sans)
- **Unsplash** (placeholder imagery)

---

## Setup & Deployment

### Local Development

```bash
cd fat-foogo-tattoo
npm install
npm run dev
```

### Build for Production

```bash
npm install
npx tailwindcss -i ./app/globals.css -o ./public/output.css
npm run build
```

### Deploy to Coolify

```bash
# Build the Docker image on your Coolify server:
# Repository: https://github.com/YOUR_GITHUB/fat-foogo-tattoo
# Build Pack: Dockerfile (auto-detected)
# Port: 3000
# Environment Variables:
#   NODE_ENV=production

# Or use the Coolify web UI:
# 1. Add new repository → your GitHub repo
# 2. Set build pack to "Dockerfile"
# 3. Set port to 3000
# 4. Deploy
```

### Git Push (after connecting GitHub)

```bash
cd fat-foogo-tattoo
git init
git add .
git commit -m "Initial commit — Fat Foogo Tattoo website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB/fat-foogo-tattoo.git
git push -u origin main
```

---

## Environment Variables (optional)

```env
NEXT_PUBLIC_STUDIO_PHONE=+43557452285
NEXT_PUBLIC_STUDIO_EMAIL=info@fat-foogo.at
NEXT_PUBLIC_STUDIO_ADDRESS=Bregenz, Vorarlberg
```

---

## File Structure

```
fat-foogo-tattoo/
├── app/
│   ├── layout.tsx       # Root layout + fonts + metadata
│   ├── page.tsx         # Main page (all sections)
│   └── globals.css      # Tailwind + custom styles
├── public/
│   └── output.css       # Compiled Tailwind CSS
├── package.json
├── tailwind.config.ts
├── README.md
└── .gitignore
```

---

## TODO / Next Steps

- [ ] Replace Unsplash placeholder images with actual Fat Foogo work
- [ ] Add Instagram feed integration (most tattoo studios use IG as portfolio)
- [ ] Connect contact form to email service (Resend, SendGrid, or n8n)
- [ ] Add online booking calendar (Cal.com or similar)
- [ ] Add real Google Maps embed with exact studio address
- [ ] SEO: Add structured data / Schema.org for LocalBusiness
- [ ] Add Impressum + Datenschutz pages (legal requirement in Austria)
- [ ] Performance: Switch to Next.js Image optimization for all photos
