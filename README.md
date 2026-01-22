# Watson Private Investigation Services

A modern React website for Watson Private Investigation Services Inc., an Austin, Texas-based private investigation agency.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **React Router v7** for navigation
- **Bun** as the package manager

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed, or
- [Nix](https://nixos.org/) for reproducible development environment

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd piwebsite

# Install dependencies
bun install

# Start development server
bun run dev
```

### Using Nix

```bash
# Enter development shell
nix develop

# Or build and preview
nix run
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Type check and build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |

## Project Structure

```
src/
├── assets/          # Images (webp format)
├── components/      # Reusable UI components
│   └── blog/        # Blog article components
├── data/            # Data files (blog posts)
├── pages/           # Page components
├── App.tsx          # Router configuration
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Pages

- **Home** - Hero slideshow, services showcase, testimonials, CTAs
- **About** - Company history and founder bio
- **Services** - List of investigation services offered
- **Testimonials** - Client testimonials
- **FAQs** - Frequently asked questions
- **Blog** - Articles with search and tag filtering
- **Contact** - Contact form and company information

## Features

- Responsive design with mobile-first approach
- Progressive menu collapse on smaller screens
- Blog system with keyword and tag-based search
- Animated hero images and slideshow
- Reusable components (PageHero, ContactForm)
