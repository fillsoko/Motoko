# Design System — motoko

## Colour tokens

Strictly monochrome. No colour accents permitted.

| Token              | Value     | Usage                          |
|--------------------|-----------|--------------------------------|
| `--bg-primary`     | `#0A0A08` | Page background                |
| `--bg-surface`     | `#1A1A1A` | Cards, image placeholders      |
| `--bg-surface-alt` | `#141414` | Alternate surface / hover      |
| `--border`         | `#2A2A2A` | Card borders, dividers         |
| `--border-subtle`  | `#1F1F1F` | Subtle separators              |
| `--text-primary`   | `#FFFFFF` | Headings, body text            |
| `--text-secondary` | `#A0A0A0` | Captions, metadata, specs      |
| `--text-muted`     | `#666666` | Disabled states, fine print    |

## Typography

### Font stack

- **Display / Wordmark**: Cormorant Garamond Light (400)
- **Headings**: Cormorant Garamond Regular (400) or SemiBold (600)
- **Body**: Inter (400, 500)
- **Mono / Specs**: JetBrains Mono (400)

All fonts self-hosted via `@fontsource`.

### Scale

| Name   | Size      | Line-height | Weight | Font             |
|--------|-----------|-------------|--------|------------------|
| `hero` | 4rem      | 1.1         | 300    | Cormorant Garamond |
| `h1`   | 2.5rem    | 1.2         | 400    | Cormorant Garamond |
| `h2`   | 1.75rem   | 1.3         | 400    | Cormorant Garamond |
| `h3`   | 1.25rem   | 1.4         | 600    | Cormorant Garamond |
| `body` | 1rem      | 1.6         | 400    | Inter              |
| `small`| 0.875rem  | 1.5         | 400    | Inter              |
| `mono` | 0.8125rem | 1.5         | 400    | JetBrains Mono     |

## Spacing

Base unit: `0.25rem` (4px). Use Tailwind default spacing scale.

| Context         | Value       |
|-----------------|-------------|
| Section padding | `py-24`     |
| Card padding    | `p-6`       |
| Grid gap        | `gap-6`     |
| Content max-w   | `max-w-6xl` |

## Motion

- **Library**: Framer Motion via React islands (`client:visible`)
- **Allowed**: `opacity` fade-in, `translateY`/`translateX` scroll-reveals (max 24px travel), staggered children, animated text reveals, smooth accordion expand/collapse
- **Duration**: 300–600ms, ease-out `[0.25, 0.1, 0.25, 1]` only
- **Not allowed**: scale transforms, bouncy/spring easing, parallax on mobile
- **Prefers-reduced-motion**: respected — all motion disabled via `useReducedMotion()`

## Borders & radii

- Card radius: `rounded-lg` (0.5rem)
- Button radius: `rounded` (0.25rem)
- Border width: 1px, using `--border` token

## Buttons

| Variant   | Background   | Text           | Border         |
|-----------|-------------|----------------|----------------|
| Primary   | `#FFFFFF`   | `#0A0A08`      | none           |
| Secondary | transparent | `#FFFFFF`       | `1px --border` |
| Ghost     | transparent | `--text-secondary` | none       |

All buttons: `px-6 py-3`, uppercase tracking-widest, Inter 500, `text-sm`.
