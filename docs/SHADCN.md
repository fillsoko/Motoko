# shadcn/ui — motoko overrides

## General rules

All shadcn/ui components must be restyled to the motoko monochrome palette. No default shadcn colours, no blue/purple accents, no coloured focus rings.

## Override approach

1. Install components via `npx shadcn-ui@latest add <component>`
2. Components land in `src/components/ui/`
3. Immediately restyle to use motoko design tokens

## Token mapping

| shadcn default     | motoko override       |
|--------------------|-----------------------|
| `--background`     | `#0A0A08`             |
| `--foreground`     | `#FFFFFF`             |
| `--card`           | `#1A1A1A`             |
| `--card-foreground`| `#FFFFFF`             |
| `--primary`        | `#FFFFFF`             |
| `--primary-foreground` | `#0A0A08`         |
| `--secondary`      | `#1A1A1A`             |
| `--secondary-foreground` | `#FFFFFF`       |
| `--muted`          | `#141414`             |
| `--muted-foreground` | `#666666`           |
| `--accent`         | `#1A1A1A`             |
| `--accent-foreground` | `#FFFFFF`          |
| `--border`         | `#2A2A2A`             |
| `--input`          | `#2A2A2A`             |
| `--ring`           | `#FFFFFF`             |
| `--radius`         | `0.5rem`              |

## Focus states

- Focus ring: `ring-white/20` — subtle white glow, not coloured
- Focus-visible only — no permanent outlines

## Components likely needed for MVP

- `Button` — primary and secondary variants
- `Card` — fleet bike cards, tour cards
- `Badge` — spec labels (optional)

Do not install components speculatively. Only add what is actively used.
