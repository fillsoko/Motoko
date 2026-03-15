# Architecture — motoko.de

## Overview

Single-page Astro static site. No SSR, no API routes, no database. All interactive elements are vanilla JS or Astro islands (if needed).

## Folder structure

```
/
├── public/
│   ├── fonts/            # Self-hosted font files (if not using fontsource)
│   └── images/           # Static images (favicons, OG)
├── src/
│   ├── assets/
│   │   └── images/       # Optimised images via astro:assets
│   ├── components/
│   │   ├── ui/           # shadcn/ui restyled components
│   │   ├── Hero.astro
│   │   ├── Fleet.astro
│   │   ├── BikeCard.astro
│   │   ├── Tours.astro
│   │   ├── TourCard.astro
│   │   ├── Insurance.astro
│   │   ├── Guestbook.astro
│   │   ├── Contact.astro
│   │   ├── Nav.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   ├── styles/
│   │   └── global.css     # Tailwind directives + custom properties
│   └── data/
│       ├── bikes.ts       # Fleet data (name, specs, image, RIPE link)
│       └── tours.ts       # Tour data (route, distance, difficulty, Komoot link)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

## Component conventions

- All components are `.astro` files unless client-side interactivity is required
- Props are typed via TypeScript interfaces at the top of the component
- No prop drilling beyond 2 levels — use data files in `src/data/`
- Image placeholders: `<div>` with `bg-surface` and correct aspect ratio, not `<img>` tags

## Data layer

Static TypeScript files in `src/data/`. No CMS, no API calls. Data is hardcoded for MVP.

## Deployment

- Vercel static adapter
- No environment variables required for MVP
- No server-side functionality

## Navigation

Anchor-based scroll navigation within `index.astro`. Nav links point to `#hero`, `#fleet`, `#tours`, `#insurance`, `#guestbook`, `#contact`. Smooth scroll via CSS `scroll-behavior: smooth`.
