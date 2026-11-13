# hijrahassalam.com

Personal website and portfolio of **Hijrah Assalam** — Senior Full-Stack Engineer (PHP/Laravel/Vue.js) and Applied AI Researcher.

## About

Production-grade engineer building systems that serve thousands of users daily at Universitas Sebelas Maret. Researching explainable AI for medical imaging — using Grad-CAM as a diagnostic tool, not decoration.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Brand:** Kawung Convergence v1.1. Production SVGs in `src/brand/` are rendered theme-aware by `src/brand/theme-svg.ts` (symbol = `--logo-mark`, text = `currentColor`). Icons, manifest and OG share card in `public/`
- **Styling:** Tailwind CSS v4, design tokens in `src/styles/global.css` (Kawung Convergence palette, kawung motif, tumpal band)
- **Type:** Plus Jakarta Sans (self-hosted via Fontsource), JetBrains Mono for small metadata
- **Content:** case studies as Markdown in `src/content/work/`, profile facts in `src/data/profile.ts`
- **Analytics:** Plausible + GA4 (`public/analytics.js`)
- **Hosting:** Vercel serves the production domain (`vercel.json`); Netlify also builds deploy previews (`netlify.toml`)
- **Contact form:** [Web3Forms](https://web3forms.com). Set `web3formsKey` in `src/data/profile.ts`; while it is empty the page falls back to email links

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Structure

```
src/
├── pages/
│   ├── index.astro            # Homepage
│   ├── work/[slug].astro      # Case study template
│   ├── hire.astro             # Work with me
│   ├── research.astro         # Explainable medical AI research
│   ├── now.astro              # Now page (update monthly)
│   ├── contact/               # Contact form (Web3Forms) + thank-you page
│   └── 404.astro
├── content/work/*.md          # One file per project (add a file = add a case study)
├── data/profile.ts            # Single source of truth: links, experience, recognition
├── layouts/BaseLayout.astro   # <head>, SEO, JSON-LD, analytics
├── brand/                     # Kawung Convergence production SVGs + themeSvg helper
├── components/                # Header, footer, logo, symbol, seal, theme switcher, tumpal band
└── styles/global.css          # Design system and batik motifs
public/
├── analytics.js               # GA4 event tracking
├── assets/images/             # Favicon, OG image, profile photo
└── cv/Hijrah_Assalam_CV.pdf
```

## Contact

- **Email:** hijrahassalam@gmail.com
- **GitHub:** [hijrahassalam](https://github.com/hijrahassalam)
- **LinkedIn:** [hijrahassalam](https://linkedin.com/in/hijrahassalam)

## License

All rights reserved. © 2026 Hijrah Assalam.
