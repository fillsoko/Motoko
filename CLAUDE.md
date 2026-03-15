# CLAUDE.md — motoko.de

## Project

**motoko.de** is the landing page for Motoko GmbH, a motorcycle rental and tours company in Germany. MVP scope: single-page Astro site, no auth, no DB, no e-commerce. Booking flows redirect to the external RIPE rental platform.

## Hard rules

- Never use colour outside the approved token set (see docs/DESIGN_SYSTEM.md)
- Never deviate from lowercase `motoko` wordmark — always Cormorant Garamond Light
- Framer Motion is approved for subtle scroll-reveal and entrance animations (no bouncy/spring easing)
- All placeholder images must be aspect-ratio-correct dark grey boxes — never use Lorem Picsum or random stock
- If uncertain about a design decision, stop and ask rather than improvise
- No external font CDNs — self-host all fonts via fontsource
- Photography is black-and-white only, editorial style
- Motion: subtle fade-ins and scroll-reveals only, no bouncy transitions
- Zero colour accents — strictly monochrome identity

## Tech stack

- Astro 6.x, TypeScript, Tailwind CSS v4, npm
- React via @astrojs/react (Astro islands for interactive components)
- Framer Motion for scroll-reveal animations
- shadcn/ui components restyled to motoko palette (see docs/SHADCN.md)
- Deploy target: Vercel (static)
- Images: `<Image />` from `astro:assets`, lazy-loaded, proper alt text
- Responsive: mobile-first, landscape + portrait hero layout

## Commit conventions

Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`

## Docs

Read these before writing code:
- docs/DESIGN_SYSTEM.md — tokens, typography, spacing
- docs/BRAND.md — brand identity, voice, photography
- docs/ARCHITECTURE.md — folder structure, component conventions
- docs/SHADCN.md — shadcn/ui override rules
