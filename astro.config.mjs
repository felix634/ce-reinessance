// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- Correctly import the Astro integration

// https://astro.build/config
export default defineConfig({
  // Use the standard 'integrations' array for Astro plugins
  integrations: [tailwind()], 
});