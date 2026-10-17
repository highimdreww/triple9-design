import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://highimdreww.github.io',

  base: '/triple9-design',

  trailingSlash: 'always',

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
