# hijrahassalam.com

Personal site and portfolio of **Hijrah Assalam** — AI Builder, Full-Stack Engineer, and Applied AI researcher.

Positioning: *builds production AI products and full-stack systems, with a growing research direction in biomedical AI.*

Design language: **Pixel Tech Adventure** — professional core, pixel shell. Visual-first storytelling, dark navy foundation, semantic accent colours, restrained motion.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 5 (static output) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite`, tokens in `src/styles/global.css` |
| Content | Astro Content Collections (`glob` loader) |
| Images | `astro:assets` (automatic WebP + responsive widths) |
| Sitemap | `@astrojs/sitemap` |
| Analytics | GA4 `G-9YYE9X6L4E` |
| Hosting | Vercel (static build, `dist/`) |

Client-side JS is limited to three small scripts: the mobile nav toggle, the scroll-reveal observer, and the contact form handler.

---

## Commands

```bash
npm install
npm run dev        # local dev server
npm run check      # Astro + TypeScript diagnostics
npm run build      # static build → dist/
npm run preview    # serve the built output
```

Regenerate the OG image, apple-touch icon, and avatar derivatives:

```bash
node scripts/build-images.mjs
```

---

## Structure

```
src/
├── assets/                 # source images (optimised at build time)
├── components/             # HeroScene, PlayerHUD, QuestPanel, ProductVisual,
│                           # ProductionRecord, JourneyWorldMap, JourneyNode,
│                           # ResearchFlow, MetricBlock, SaveScreen, PixelLabel,
│                           # PixelButton, StatusIndicator, Nav, Footer
├── content/
│   ├── projects/           # asistendiet, bidiktender, penugasan-uns,
│   │                       # bundagizi, learn-quran, ai-agent-tooling
│   ├── research/           # covid-cxr-gradcam
│   └── now/                # quest log entries
├── content.config.ts       # collection schemas
├── layouts/BaseLayout.astro
├── lib/accent.ts           # semantic colour + status label mapping
├── pages/
│   ├── index.astro         # opening scene, active quests, production network,
│   │                       # world map, research flow, save screen, terminal CTA
│   ├── work/index.astro
│   ├── work/[slug].astro   # project detail (flow diagram, metrics, stack)
│   ├── research.astro
│   ├── journey.astro
│   ├── now.astro
│   ├── hire.astro
│   ├── contact.astro
│   └── 404.astro
└── styles/global.css       # design tokens, pixel primitives, motion
```

`legacy/` holds the previous static HTML site (pre-Astro) for reference. It is not part of the build.

---

## Design system

### Semantic colour mapping

| Meaning | Token | Hex |
|---|---|---|
| Engineering | `cyan-400` | `#38C7FF` |
| Products / production | `mint-400` | `#45E6B5` |
| Research | `violet-400` | `#A78BFA` |
| Journey / progress | `amber-400` | `#FBCB5D` |

Surfaces: `--color-bg-deep` `#050A18` → `--color-bg-elevated` `#121E33`.
Text: `--color-ink` `#F4F7FC`, `--color-ink-2` `#9DAAC0`, `--color-ink-3` `#64748B`.

### Typography

Two systems only: **Inter** for everything readable, **VT323** for pixel accents — HUD labels, section eyebrows, badges, buttons, and footer microcopy. Pixel font is never used for body copy or for values that carry real information (product names, durations, metrics); those stay in Inter so they read instantly.

### Pixel UI rules

- Border radius 2–6px; notched corners (`.px-frame`) reserved for HUD windows
- Thin outlined panels instead of heavy rounded SaaS cards
- Motion 150–350ms, one-shot reveals, full `prefers-reduced-motion` support
- Scroll reveal only applies when JS is present (`html.js`) — without JS all content stays visible for crawlers and no-JS users

---

## Content editing

Add a project by dropping a Markdown file into `src/content/projects/`. Frontmatter drives the cards, detail page, flow diagram, metrics, and stack blocks — no repeated markup.

Key fields: `title`, `positioning`, `category` (`current` | `production` | `tooling`), `status`, `statusKind`, `accent`, `role`, `scale`, `flow`, `metrics`, `stack`, `highlights`, `hasDetail`.

Update the quest log by editing `src/content/now/`.

---

## Deployment

Vercel project: `hijrahassalam-site` (team `bundagizi-s-projects`). Framework auto-detected as Astro; build `astro build`, output `dist`.

The domain `www.hijrahassalam.com` currently points to a separate Vercel project on a different account. `vercel.json` keeps 301 redirects from the old `.html` URLs so nothing breaks when the domain is moved.

---

## Contact form

`src/pages/contact.astro` reads `PUBLIC_FORMSPREE_ID`. When set, submissions POST to Formspree. When unset, the form does **not** pretend to succeed — it opens the visitor's mail client with the message prefilled, so nothing is silently lost.

The previous site posted to `https://formspree.io/f/FORM_ID` (a placeholder), so submissions were never delivered.
