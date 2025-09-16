// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/guides/deploy/cloudflare/
export default defineConfig({
  site: 'https://aesso.com',
  output: 'server',
  integrations: [sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
      persist: { path: './.cache/wrangler/v3' }
    },
    imageService: 'compile',
    wasmModuleImports: true
  }),
  image: {
    service: passthroughImageService()
  },
  vite: {
    ssr: {
      external: ['node:buffer']
    }
  }
});
