# Aesso Website

Aesso design studio website built with Astro v5 and deployed on Cloudflare Workers.

## 🚀 Tech Stack

- **Framework**: [Astro v5](https://astro.build/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Media Storage**: [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/)
- **Styling**: Native CSS with custom properties
- **Font**: Suisse Intl

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Workers
npx wrangler deploy
```

## 📁 Project Structure

```
/
├── src/
│   ├── config/       # Configuration files
│   ├── layouts/      # Astro layouts
│   ├── pages/        # Page components
│   └── styles/       # Global styles
├── public/           # Static assets
├── dist/             # Build output
└── wrangler.toml     # Cloudflare Workers config
```

## 🖼️ Media Management

All images and videos are hosted on Cloudflare R2 for optimal performance and no bandwidth limits. Media files are not included in the repository.

## 🌍 Environment

- **Production**: https://aesso.com
- **Development**: https://aesso-website.lorestudio.workers.dev

## 📝 License

© 2025 Aesso, LLC. All rights reserved.
