import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gingerdefino.github.io',
  base: '/rewearhudsonvalley/',
  // Enable strict mode for better error checking
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
