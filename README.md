# hijrahassalam.com

Personal website and portfolio of **Hijrah Assalam** — Senior Full-Stack Engineer (PHP/Laravel/Vue.js) and Applied AI Researcher.

## About

Production-grade engineer building systems that serve thousands of users daily at Universitas Sebelas Maret. Researching explainable AI for medical imaging — using Grad-CAM as a diagnostic tool, not decoration.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Styling:** Tailwind CSS v4, design tokens in `src/styles/global.css` (paper / navy / gold, kawung motif)
- **Type:** Plus Jakarta Sans (self-hosted via Fontsource), JetBrains Mono for small metadata
- **Content:** case studies as Markdown in `src/content/work/`, profile facts in `src/data/profile.ts`
- **Analytics:** Plausible + GA4 (`public/analytics.js`)
- **Hosting:** Netlify (`netlify.toml`: `npm run build` → `dist/`)

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Structure

```
src/
├── pages/index.astro          # Homepage
├── pages/work/[slug].astro    # Case study template
├── content/work/*.md          # One file per project (add a file = add a case study)
├── data/profile.ts            # Single source of truth: links, experience, recognition
├── layouts/BaseLayout.astro   # <head>, SEO, JSON-LD, analytics
├── components/                # Header, footer
└── styles/global.css          # Design system
public/
├── hire.html, research.html, contact.html, now.html, 404.html   # Legacy pages, pending migration
├── assets/                    # Legacy assets (still used by legacy pages)
└── cv/Hijrah_Assalam_CV.pdf
```

## Contact

- **Email:** hijrahassalam@gmail.com
- **GitHub:** [hijrahassalam](https://github.com/hijrahassalam)
- **LinkedIn:** [hijrahassalam](https://linkedin.com/in/hijrahassalam)

## License

All rights reserved. © 2026 Hijrah Assalam.
