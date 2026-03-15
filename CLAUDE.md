# CLAUDE.md — motoko.de

## Project

**motoko.de** is the landing page for Motoko GmbH, a motorcycle rental and tours company in Germany. MVP scope: single-page Astro site, no auth, no DB, no e-commerce. Booking flows redirect to the external RIPE rental platform.

## Hard rules

- Never use colour outside the approved token set (see docs/DESIGN_SYSTEM.md)
- Never deviate from lowercase `motoko` wordmark — always Cormorant Garamond Light
- Never add animation libraries (GSAP, Framer Motion, etc.) without explicit approval
- All placeholder images must be aspect-ratio-correct dark grey boxes — never use Lorem Picsum or random stock
- If uncertain about a design decision, stop and ask rather than improvise
- No external font CDNs — self-host all fonts via fontsource
- Photography is black-and-white only, editorial style
- Motion: subtle fade-ins and scroll-reveals only, no bouncy transitions
- Zero colour accents — strictly monochrome identity

## Tech stack

- Astro 4.x, TypeScript, Tailwind CSS v3, pnpm
- shadcn/ui components permitted but must be restyled to monochrome (see docs/SHADCN.md)
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
