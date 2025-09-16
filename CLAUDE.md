# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start Astro development server on localhost:4321
- `npm run build` - Build production-ready site to ./dist
- `npm run preview` - Preview production build locally
- `npm run check` - Run Astro type checking

### Deployment
- `npx wrangler deploy` - Deploy to Cloudflare Workers
- `npx wrangler r2 object put "aesso-media/<filename>" --file="<filepath>"` - Upload media to R2 bucket

## Architecture

### Tech Stack
- **Framework**: Astro v5 with server-side rendering (SSR)
- **Runtime**: Cloudflare Workers with Node.js compatibility
- **Media Storage**: Cloudflare R2 bucket (aesso-media) served via CDN at assets.aesso.com
- **Image Optimization**: Hybrid approach using R2 CDN for storage + Astro's image optimization

### Project Structure
- `src/pages/` - Astro page components (index, option-o, mail, destaire)
- `src/layouts/` - BaseLayout.astro defines HTML structure and metadata
- `src/components/` - Reusable components (ProjectLayout.astro for project pages)
- `src/config/cdn.ts` - CDN configuration and helper functions for R2 media URLs
- `src/images/` - Local optimized images imported directly in components
- `src/styles/` - Global CSS styles imported in BaseLayout

### Key Configuration Files
- `astro.config.mjs` - Configures Cloudflare adapter with image service, sitemap integration, and R2 remote patterns
- `wrangler.toml` - Cloudflare Workers configuration (R2 bucket binding currently disabled due to deployment issue)
- `tsconfig.json` - TypeScript configuration extending Astro's strict preset

### Media Management Strategy
The site uses a hybrid approach for media:
1. Small, critical images are stored locally in `src/images/` and imported directly for Astro optimization
2. Large media files are hosted on Cloudflare R2 and accessed via CDN (assets.aesso.com)
3. The `getCDNUrl()` helper in `src/config/cdn.ts` generates proper CDN URLs

### Deployment Notes
- Production URL: https://aesso.com
- Development preview: https://aesso-website.lorestudio.workers.dev
- Node.js version requirement: >=20.18.1
- Cloudflare compatibility date: 2024-09-23 with nodejs_compat flag