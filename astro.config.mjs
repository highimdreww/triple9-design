import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const site = process.env.SITE_URL || 'https://example.github.io';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],

  build: {
    format: 'directory'
  },

  vite: {
    build: {
      cssMinify: true
    }
  }
});
