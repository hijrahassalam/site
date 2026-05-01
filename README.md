# hijrahassalam.com

Personal website and portfolio of **Hijrah Assalam** — Senior Full-Stack Engineer (PHP/Laravel/Vue.js) and Applied AI Researcher.

## About

Production-grade engineer building systems that serve thousands of users daily at Universitas Sebelas Maret. Researching explainable AI for medical imaging — using Grad-CAM as a diagnostic tool, not decoration.

## Tech Stack

- **Frontend:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **Styling:** CSS Custom Properties with dark/light theme support
- **Analytics:** Plausible.io (privacy-friendly, GDPR compliant)
- **Hosting:** Netlify
- **Domain:** hijrahassalam.com

## Pages

| Page | Description |
|------|-------------|
| [Home](https://hijrahassalam.com/) | Overview — stats, skills, featured projects, certifications |
| [Hire Me](https://hijrahassalam.com/hire.html) | Production experience, tech stack, remote readiness |
| [Research](https://hijrahassalam.com/research.html) | COVID-19 CXR detection with explainable CNN |
| [Contact](https://hijrahassalam.com/contact.html) | Contact form and direct links |
| [Now](https://hijrahassalam.com/now.html) | What I'm working on right now |

## Features

- Dark/light theme toggle with `localStorage` persistence
- `prefers-reduced-motion` support for accessibility
- Responsive design (mobile-first)
- Scroll-reveal animations via IntersectionObserver
- SEO: Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt
- Print-friendly styles

## Local Development

```bash
# Clone
git clone https://github.com/hijrahassalam/site.git
cd site

# Serve locally
python3 -m http.server 8000
# → http://localhost:8000
```

No build step required. Open `index.html` in a browser or use any static file server.

## Structure

```
site/
├── index.html              # Homepage
├── hire.html               # Hire me page
├── research.html           # Research page
├── contact.html            # Contact form
├── now.html                # Now page (Derek Sivers concept)
├── 404.html                # Custom 404
├── tailwind-config.js      # Shared Tailwind configuration
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css      # Design system
    ├── js/main.js          # Theme toggle, scroll reveals, form handler
    └── images/
        ├── profile.webp    # Profile photo
        ├── favicon.svg     # Favicon
        ├── og-image.svg    # Open Graph image template
        └── apple-touch-icon.svg
```

## Contact

- **Email:** hello@hijrahassalam.com
- **GitHub:** [hijrahassalam](https://github.com/hijrahassalam)
- **LinkedIn:** [hijrahassalam](https://linkedin.com/in/hijrahassalam)

## License

All rights reserved. © 2026 Hijrah Assalam.
