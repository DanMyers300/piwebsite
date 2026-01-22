# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for **Watson Private Investigation Services Inc.**, built with Vite, TypeScript, Tailwind CSS v4, and React Router. The project uses Bun as the package manager and has Nix flake support for reproducible development environments.

## Development Commands

### Package Manager
This project uses **Bun** (not npm/yarn/pnpm). Use `bun` for all package operations:
- `bun install` - Install dependencies
- `bun run dev` - Start development server
- `bun run build` - Type check with `tsc -b` then build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build locally

### Nix Development
- `nix develop` - Enter development shell with Bun installed
- `nix run` - Build and preview the site (runs build then preview server with `--host` flag)

### Image Conversion
Convert images to webp format using:
```bash
nix-shell -p libwebp --run "cwebp -q 85 input.jpg -o output.webp"
```

## Architecture

### Routing Structure
The app uses React Router v7 with a single-page application layout:
- `src/App.tsx` - Main router configuration with layout wrapper (Header → MenuBar → Routes → Footer)
- `src/pages/` - Page components mapped to routes:
  - `/` → Home
  - `/about` → About
  - `/services` → Services
  - `/testimonials` → Testimonials
  - `/faqs` → FAQs
  - `/blog` → Blog
  - `/blog/search` → BlogSearch
  - `/blog/signs-of-a-cheating-spouse` → SignsOfACheatingSpouse
  - `/blog/best-way-to-hire-a-private-investigator` → BestWayToHireAPrivateInvestigator
  - `/blog/finding-a-private-investigator-infidelity` → FindingAPrivateInvestigatorInfidelity
  - `/contact` → Contact

### Component Organization
```
src/
├── components/
│   ├── blog/                    # Blog article components
│   │   ├── BestWayToHireAPrivateInvestigator.tsx
│   │   ├── FindingAPrivateInvestigatorInfidelity.tsx
│   │   └── SignsOfACheatingSpouse.tsx
│   ├── CallToAction.tsx         # Yellow CTA banner
│   ├── ContactForm.tsx          # Reusable contact form with optional highlights
│   ├── CustomerTestimonial.tsx  # Testimonial display component
│   ├── Footer.tsx               # 3-column footer with back-to-top button
│   ├── Header.tsx               # Header with phone numbers and "Buy My Book" button
│   ├── MenuBar.tsx              # Responsive nav with progressive collapse
│   ├── PageHero.tsx             # Reusable hero image with title overlay
│   ├── SecondCallToAction.tsx   # Secondary CTA component
│   ├── ServicesInclude.tsx      # Interactive tabbed services showcase
│   └── SlideShow.tsx            # Image carousel with text overlay
├── data/
│   └── blogData.ts              # Centralized blog post data with tags and content
├── pages/
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── BlogSearch.tsx           # Blog search with keyword and tag filtering
│   ├── Contact.tsx
│   ├── FAQs.tsx
│   ├── Home.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── assets/                      # All images in webp format
│   ├── andmore.webp
│   ├── civil.webp
│   ├── debugging.webp
│   ├── divorce.webp
│   ├── insurance.webp
│   ├── investigator.webp
│   ├── justice.webp
│   ├── LA.webp
│   └── logo.webp
├── App.tsx
├── main.tsx
└── index.css
```

### Key Reusable Components

**PageHero** - Used on all inner pages for consistent hero images:
```tsx
<PageHero image={LA} title="PAGE TITLE" imageAlt="Description" />
```

**ContactForm** - Reusable form with optional highlights sidebar:
```tsx
<ContactForm highlights={["Point 1", "Point 2"]} />
<ContactForm highlights={[]} />  // No highlights section
```

### Design Patterns

- **Color scheme**: Gray-800 for dark elements, Yellow-500 for accents
- **Page layout**: Most pages use 2/3 left column, 1/3 right sidebar pattern
- **Responsive**: Progressive menu collapse at sm/md/lg/xl breakpoints
- **Animations**:
  - PageHero has pulsing zoom animation (8s cycle)
  - SlideShow has fade transitions (8s interval)
  - Menu items have sliding orange underline on hover

### Blog System

Blog posts are defined in `src/data/blogData.ts` with:
- Title, excerpt, date, slug
- Tags array for categorization
- Full content for search indexing

Blog search (`/blog/search`) supports:
- Keyword search (searches title, content, tags)
- Tag filtering (clickable tags, URL parameter support: `?tag=tagname`)

## Styling
Uses **Tailwind CSS v4** via `@tailwindcss/vite` plugin (not the traditional PostCSS setup). No separate Tailwind config file is needed - configuration is done through CSS imports.

## TypeScript Configuration
Project uses multiple TypeScript configs:
- `tsconfig.json` - Base config that references other configs
- `tsconfig.app.json` - App source code configuration
- `tsconfig.node.json` - Node/Vite tooling configuration

## ESLint Configuration
Flat config format (`eslint.config.js`) with:
- TypeScript ESLint recommended rules
- React Hooks plugin
- React Refresh plugin for Vite HMR
- Ignores `dist` directory
