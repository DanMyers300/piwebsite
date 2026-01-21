# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website built with Vite, TypeScript, Tailwind CSS v4, and React Router. The project uses Bun as the package manager and has Nix flake support for reproducible development environments.

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
  - `/contact` → Contact

### Component Organization
- `src/components/` - Shared UI components (Header, Footer, MenuBar, SlideShow, CallToAction, etc.)
- `src/pages/` - Full page components for each route
- `src/assets/` - Static assets (images like logo.png, gun.jpg, baby.jpg, corporate.jpg)

### Styling
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
