# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Al Baha Tourism Website - A Next.js 14 tourism marketing website for Al Baha region in Saudi Arabia with full Arabic/RTL support. The site showcases local tourist destinations including Thee Ain Heritage Village, Raghdan Forest Park, and Jodur Entertainment Park.

## Development Commands

```bash
# Install dependencies (first time setup)
npm install

# Start development server at http://localhost:3000
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run ESLint checks
npm run lint
```

## Architecture & Key Patterns

### Tech Stack
- **Next.js 14.0.4** with file-based routing in `pages/`
- **TypeScript** with strict mode enabled
- **Tailwind CSS 3** with custom theme configuration
- **Arabic/RTL-first** design with Saudi Web custom font

### Component Structure
All pages use the `Layout` wrapper component which provides:
- Consistent Header and Footer across pages
- SEO meta tags and OpenGraph configuration
- Page-specific title and description props

### Styling System
The project uses Tailwind CSS with custom extensions defined in `tailwind.config.js`:
- **Primary colors**: Green gradient (50-900)
- **Secondary colors**: Amber (400-600)
- **Custom animations**: fade-in, slide-up, slide-down
- **Component classes** in `styles/globals.css`: `.btn-primary`, `.btn-secondary`, `.card`, `.container-custom`

### Page Architecture
Each destination page follows this pattern:
1. Hero section with background image
2. Introduction with location/hours
3. Features grid (4 columns)
4. Activities section with images
5. Facilities/tips section
6. Map embed with Google Maps
7. Photo gallery
8. Visit information

### Data Management
Currently using static data arrays defined within components. No API integration yet. Example pattern:
```tsx
const destinations = [
  { id: 1, title: "ذي عين", description: "...", image: "...", link: "/thee-ain", features: [...] }
];
```

## Key Components

- **Layout** (`components/Layout.tsx`): Master wrapper with SEO
- **Header** (`components/Header.tsx`): Fixed navigation with mobile menu
- **Hero** (`components/Hero.tsx`): Video background with fallback, autoplay handling
- **VideoModal** (`components/VideoModal.tsx`): Full-screen video player with escape key support
- **VideoSection** (`components/VideoSection.tsx`): Clickable video thumbnail that opens modal

## Arabic/RTL Considerations

- Document-level `dir="rtl"` and `lang="ar"` attributes
- All text alignment and flow follows RTL patterns
- Custom Saudi Web font loaded via @font-face in `styles/globals.css`
- Tailwind utilities work correctly with RTL (e.g., `mr-` becomes margin-right in RTL)

## Adding New Features

### To add a new destination page:
1. Create new file in `pages/` (e.g., `new-destination.tsx`)
2. Import and wrap content with `Layout` component
3. Add navigation link in `Header` component
4. Follow existing page structure from `thee-ain.tsx` or `raghdan-park.tsx`

### To modify theme colors:
Edit `tailwind.config.js` extend.colors section. Primary and secondary color scales are defined there.

### To add background videos:
1. Place video file in `public/videos/`
2. Reference in Hero component's `videoSrc` prop
3. Provide fallback image for mobile/error states

## Important Files & Locations

- Page routes: `pages/*.tsx`
- Reusable components: `components/*.tsx`
- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.js`
- TypeScript config: `tsconfig.json`
- Next.js config: `next.config.js`

## Current Limitations

- No backend API integration
- Static content only (no CMS)
- No booking or contact form functionality
- External image URLs not optimized through Next.js Image
- No state management system (Redux/Context API)
- No testing setup