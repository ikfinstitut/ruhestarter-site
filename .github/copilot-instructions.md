# Copilot Instructions for Ruhestarter Site

## Project Overview
This is a **German-language Astro landing page** for Ruhestarter, a retirement planning service. The site uses Astro with TailwindCSS and deploys to Hetzner via GitHub Actions.

## Design System (Target State)
The brand conveys **Klarheit – Zuversicht – Bewegung** with nautical/compass themes for retirement navigation.

### Target Color Palette
- **Kompass-Blau** `#1F5B87`: Primary color for buttons, navigation (trust, depth, orientation)  
- **Ruhestarter-Gelb** `#F6C343`: Secondary/accent color for CTAs (optimism, energy)
- **Sand-Beige** `#F8F4EE`: Backgrounds, surfaces (warmth, stability)
- **Graphit-Grau** `#3A3A3A`: Text, icons (modern contrast without harshness)
- **Seegrün** `#3C8D7C`: Alternative accent for positive indicators (natural, calming)

### Target Typography
- **Inter** (Google Fonts) as primary: neutral, readable, modern
- **Hierarchy**: H1 (Inter Bold, 48px), H2 (Inter SemiBold, 32px), Body (Inter Regular, 16-18px, line-height 1.6)

### Current Implementation (Legacy)
- **Colors**: `petrol` (#0F5257), `sand` (#F2E9E4), `marine` (#1E3D58), `ocean` (#10828C)
- **Typography**: `font-sans` (Work Sans), `font-display` (DM Serif Display)
- **Component classes** in `src/styles/global.css`: `.btn-primary`, `.btn-secondary`, `.section` utilities
- **Base styles disabled** in Astro config - all styling through Tailwind utilities

## Architecture & Key Patterns

### Component Structure
- **Single-page architecture**: All content flows through `src/pages/index.astro`
- **Component composition**: Hero → WhatWhy → NewsletterForm → Footer  
- **Layout pattern**: All pages use `src/layouts/BaseLayout.astro` for consistent structure
- **German content**: All user-facing text in German with friendly "Du" tone (not formal "Sie")

### Key Component Patterns
- **NewsletterForm**: Uses Formspree integration at `https://formspree.io/f/mzblllaq` - update this URL for different deployments
- **Hero cards**: Glassmorphism pattern with `bg-white/70 backdrop-blur border border-petrol/10 shadow-card`
- **Responsive design**: Mobile-first with `sm:` and `lg:` breakpoints

## Development Workflow

- **Node.js 20** with **PNPM 9** for package management
- **TailwindCSS** for utility-first styling
- **Astro** framework for static site generation

### Essential Commands
```bash
pnpm dev          # Development server at localhost:4321
pnpm build        # Production build to dist/
pnpm preview      # Test production build locally
```

### File Organization Rules
- Components are **single-purpose** and **self-contained**
- Props are **documented with JSDoc** in component frontmatter
- **German comments** in code match the site's language
- No shared state - components receive data via props

## Deployment & Integration

### GitHub Actions Deployment
- Triggers on `main` branch pushes or manual dispatch
- Requires 5 Hetzner secrets: `HETZNER_HOST`, `HETZNER_USER`, `HETZNER_PORT`, `HETZNER_TARGET`, `HETZNER_SSH_KEY`
- Builds with Node 20 + PNPM 9, deploys `dist/*` via SCP

### External Dependencies
- **Beehiiv** for newsletter signup 
- **Google Fonts** for Work Sans + DM Serif Display (preconnected in BaseLayout)
- **Static hosting** optimized for Nginx serving

## Content Guidelines
- **Tone of Voice**: Friendly "Du" address, like an experienced companion ("Du bestimmst den Kurs")
- **Brand voice**: Clear, everyday language, no financial jargon ("ohne Fachchinesisch")
- **Emotional tone**: Encouraging, open, inspiring - avoid insurance/banking fear tactics
- **Key themes**: Nautical metaphors (compass, navigation, course), movement and clarity
- **SEO structure**: Proper meta tags, OG image at `/og-image.svg`  
- **Accessibility**: Semantic HTML, proper labels, focus management

## UI Element Patterns
- **Buttons**: Rounded corners (8px), clear color hierarchy (Kompass-Blau primary, Gelb secondary)
- **Cards**: Soft shadows, Sand-Beige backgrounds, generous whitespace for readability
- **Icons**: 2px line weight, 2px radius, unified nautical symbolism (compass needle animations)
- **Charts**: Minimalist, pastel colors, clean lines - avoid overwhelming dashboard feel

## When Making Changes
- Always test with `pnpm build && pnpm preview` before deploying
- **Design System Migration**: Gradually replace legacy colors/fonts with target design tokens
- Update newsletter form action URL for different environments  
- **Content Updates**: Use friendly "Du" tone, nautical metaphors, avoid formal "Sie"
- **Typography**: Migrate from Work Sans to Inter when updating components
- Maintain German language throughout - no English UI text
- Keep visual consistency with glassmorphism patterns during transition