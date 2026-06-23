# Practice by Numbers — Web Platform

> A modern, performant marketing and product website for **Practice by Numbers (PbN)** — a comprehensive dental practice management platform trusted by hundreds of dental practices across the United States.

---

## Overview

This repository contains the full Next.js web platform for Practice by Numbers, rebuilt from the ground up with a focus on performance, SEO, scalability, and a pixel-perfect design system. The project replicates and improves upon the existing [practicebynumbers.com](https://practicebynumbers.com) experience with a modern stack, clean component architecture, and production-grade code quality.

---

## Tech Stack

| Layer           | Technology                                               |
| --------------- | -------------------------------------------------------- |
| Framework       | [Next.js 15](https://nextjs.org) (App Router)            |
| Language        | TypeScript                                               |
| Styling         | Tailwind CSS v4                                          |
| UI Components   | [shadcn/ui](https://ui.shadcn.com) (Radix UI primitives) |
| Icons           | [Lucide React](https://lucide.dev)                       |
| Font            | Inter (via `next/font`)                                  |
| Linting         | ESLint + Prettier                                        |
| Package Manager | npm                                                      |

---

## Project Structure

```
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — Header, Footer, GEO meta, JSON-LD
│   ├── manifest.ts             # PWA manifest with shortcuts
│   ├── page.tsx                # Home page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing — hero, latest post, top blogs, all blogs + pagination
│   │   └── [slug]/
│   │       ├── layout.tsx      # Blog post layout — Top Blogs section
│   │       └── page.tsx        # Dynamic blog post — hero, content, sidebar
│   ├── request-demo/
│   │   └── page.tsx            # Demo request page — form + customer reviews carousel
│   └── contact/
│       └── page.tsx            # Contact page
│
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   └── common/                 # Shared components (SimpleColumn, etc.)
│
├── sections/
│   ├── demo/                   # DemoHero, DemoForm, CustomerReviews
│   └── blog/                   # BlogHero, BlogFeatured, BlogListing, BlogPostContent
│
├── constants/                  # Static data — nav, blog posts, contact links
├── types/                      # TypeScript types — BlogPost, BlogPostMeta, NavLink
└── public/
    ├── icons/                  # PWA icons (all sizes)
    ├── images/                 # OG images, G2 badges, avatars
    └── screenshots/            # PWA screenshots
```

---

## Key Features

### Navigation

- Fully accessible **mega menu** built with shadcn `NavigationMenu` (Radix UI)
- `viewport={false}` for correct per-trigger dropdown positioning
- Mobile-responsive with collapsible drawer
- Active link tracking via Radix `data-active`

### Blog System

- **Blog listing page** — hero banner, featured latest post, top blogs sidebar, full paginated grid with live search
- **Dynamic blog posts** (`/blog/[slug]`) — structured with Next.js nested layouts:
  - `layout.tsx` → Top Blogs section (shared across all posts)
  - `page.tsx` → Hero (full-width) + Article content + Sticky sidebar (slots pattern)
- `generateStaticParams` for static generation of all known slugs
- Sidebar with related posts + demo CTA card

### Request Demo Page

- Two-column layout (left: value props, right: form)
- **Smart form** with two modes:
  - New customer — 6 fields with full validation
  - Existing customer (checkbox toggle) — 3-field focused form
- Field-level validation on blur + full validation on submit
- Loading state (spinner), success state (confirmation card), error state (alert banner)
- Customer reviews **carousel** (shadcn `Carousel` with `loop` and `align: start`)

### SEO & Performance

- Per-page `metadata` exports (title, description, OG, Twitter card, canonical)
- **JSON-LD schemas** per page: `WebPage`, `BreadcrumbList`, `Service`, `FAQPage`, `SoftwareApplication`
- Root layout handles `Organization` schema + GEO meta tags
- `manifest.ts` with PWA shortcuts for Demo, Contact, Blog, Pricing
- `next/font` for zero-layout-shift typography
- All images use `next/image` with proper `alt` text
- No scrollbar globally (clean UI across all browsers)

### Design System

- Brand gradient: `linear-gradient(265deg, #4844BE 0.4%, #211F58 92.2%)`
- Primary: `indigo-600` (#4844BE)
- Dark navy hero: `#1a1f5e`
- Light card bg: `#eef0f8`
- Consistent `rounded-xl` / `rounded-2xl` card treatment
- `shadcn/ui` components: Button, Input, Label, Checkbox, Select, Carousel, Pagination, NavigationMenu

---

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm 9+

### Installation

```bash
git clone https://github.com/your-org/pbn-web.git
cd pbn-web
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_SITE_URL=https://practicebynumbers.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX         # Google Analytics
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxx      # reCAPTCHA v2 site key
RECAPTCHA_SECRET_KEY=xxx                # reCAPTCHA v2 secret (server-side)
```

---

## shadcn Components Used

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add checkbox
npx shadcn@latest add select
npx shadcn@latest add carousel
npx shadcn@latest add pagination
npx shadcn@latest add navigation-menu
```

---

## Pages

| Route            | Description                           |
| ---------------- | ------------------------------------- |
| `/`              | Home                                  |
| `/blog`          | Blog listing with search + pagination |
| `/blog/[slug]`   | Dynamic blog post with sidebar        |
| `/request-demo`  | Demo request form + reviews           |
| `/pricing`       | Pricing plans                         |
| `/contact`       | Contact page                          |
| `/company/about` | About us                              |

---

## PWA

The app is PWA-ready with:

- `app/manifest.ts` — name, icons, theme color, display mode
- Home screen shortcuts: **Request Demo**, **Contact**, **Blog**, **Pricing**
- Maskable icons for Android adaptive icons
- Desktop + mobile screenshots for install prompt

---

## Component Patterns

### Slot Pattern (Blog Post)

Rather than drilling props through layout, the blog post page composes `hero` and `sidebar` as ReactNode slots and passes them to a pure layout component:

```tsx
// page.tsx
const hero = <BlogPostHero meta={...} />;
const sidebar = <BlogSidebar posts={sidebarPosts} />;

return (
  <BlogPostContent hero={hero} sidebar={sidebar}>
    {/* article content */}
  </BlogPostContent>
);
```

### Conditional Form

`DemoForm` uses a single `isCurrentCustomer` boolean to switch between two completely different field sets, each with independent validation state and touched tracking.

---

## Roadmap

- [ ] Connect form to CRM / HubSpot API
- [ ] Integrate real reCAPTCHA v2
- [ ] CMS integration (Sanity / WordPress headless) for blog content
- [ ] Add sitemap.ts for dynamic blog slugs
- [ ] Animations with Framer Motion on hero sections
- [ ] E2E tests with Playwright

---

## License

Private — © 2026 Practice by Numbers. All rights reserved.
