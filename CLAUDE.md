# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BackstoryWorks is a Next.js-based business website for a content creation and brand storytelling company. The site features a homepage, services page, about page, contact page, and blog section.

## Technology Stack

- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Geist Sans and Geist Mono (Google Fonts)
- **Development**: ESLint for code quality

## Development Commands

Since npm has permission issues in this environment, you may need to work around dependency installation:

```bash
# Development server (once dependencies are installed)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable React components
│   │   └── Navigation.tsx   # Main navigation component
│   ├── about/              # About page
│   │   └── page.tsx
│   ├── blog/               # Blog listing page
│   │   └── page.tsx
│   ├── contact/            # Contact page
│   │   └── page.tsx
│   ├── services/           # Services page
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with navigation
│   └── page.tsx            # Homepage
```

## Key Features

- **Fixed Navigation**: Navigation bar is fixed at the top with mobile responsive hamburger menu
- **Page Spacing**: All pages have `pt-16` class to account for fixed navigation
- **Responsive Design**: All pages are mobile-first responsive using Tailwind CSS
- **Brand Colors**: Primary blue theme (#2563eb) with proper hover states

## Component Architecture

- **Navigation Component**: Client-side component using `usePathname` for active states
- **Page Components**: Server-side components by default
- **Layout System**: Root layout includes navigation, individual pages handle their content

## Styling Guidelines

- Use Tailwind CSS classes for all styling
- Follow mobile-first responsive design patterns
- Maintain consistent spacing with Tailwind spacing scale
- Use the established blue color scheme (#2563eb, #1d4ed8, etc.)
- All pages should have `pt-16` for fixed navigation spacing

## Content Structure

- **Homepage**: Hero section, features section, and CTA
- **Services**: Grid layout showcasing three main services
- **About**: Company mission, what we do, and why choose us
- **Contact**: Contact information and contact form
- **Blog**: Blog post listing with sample posts

## Future Development Notes

- Blog posts will need individual post pages (`/blog/[id]`)
- Contact form needs backend integration
- Consider adding image optimization for better performance
- May need to add SEO meta tags for individual pages
- Could benefit from a footer component