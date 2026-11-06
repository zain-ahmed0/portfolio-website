import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zain-ahmed.dev',
  vite: {
    plugins: [tailwindcss()]
  },

  trailingSlash: 'never',
  integrations: [sitemap()]
});