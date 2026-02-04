import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://andrewkillinger.github.io',
  base: '/website/',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
