# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Architecture

This is a personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

### Project Structure

- **`app/`** - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with fonts (JetBrains Mono, Oswald), metadata, and SEO configuration
  - `page.tsx` - Homepage composing all sections
  - `globals.css` - CSS variables for design system colors and custom utilities

- **`components/`** - React components organized by purpose
  - `sections/` - Page sections (Header, HeroSection, AboutSection, ProjectsSection, SkillsSection, CTASection, Footer) with barrel export in `index.ts`
  - `ui/` - Reusable UI components (Button, ScrollToTop, SectionWrapper)
  - `SEO/` - SEO-related components (JsonLd)

- **`lib/constants.ts`** - Central configuration: site config, navigation items, projects data, skills data, social links, stats

- **`types/index.ts`** - TypeScript interfaces: NavItem, Project, Skill, ContactLink, SocialLink, SEOConfig

### Design System

CSS variables are defined in `globals.css`:
- Colors: `--color-bg-primary`, `--color-accent`, `--color-text-primary`, etc.
- Fonts: `--font-jetbrains-mono` (primary), `--font-oswald` (display)
- Skill-specific colors: `--color-csharp`, `--color-react`, etc.

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`).

### Key Configuration

- `next.config.ts` - Standalone output, optimized images (AVIF/WebP), security headers
- ESLint uses Next.js core-web-vitals and TypeScript configs
- Animations powered by Framer Motion
