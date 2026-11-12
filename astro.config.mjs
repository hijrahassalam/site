// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hijrahassalam.com',
  integrations: [
    sitemap({
      // Legacy static pages in /public, until they are migrated to Astro.
      customPages: ['hire', 'research', 'contact', 'now'].map(
        (p) => `https://hijrahassalam.com/${p}.html`,
      ),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
