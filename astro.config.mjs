// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ruhestarter.de',
  integrations: [tailwind({ applyBaseStyles: false })]
});
