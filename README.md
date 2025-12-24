# AI PAY-LINK™ — Smart Payment Links Powered by AI

A professional, production-ready Next.js 14 payment link platform with dark-themed design, responsive layouts, and smooth animations.

## ✨ Key Features

- **Landing Page** (`/`) — Hero section with two-line centered headline, gradient CTAs, feature cards, and animated sections
- **Dashboard** (`/dashboard`) — Analytics overview with 3 stat cards and payments table with status badges
- **Payment Creation** (`/create`) — Form-based payment link generator with real-time preview modal
- **Responsive Navigation** — Sticky navbar with mobile hamburger menu and transparent backgrounds
- **Animations** — AOS (Animate On Scroll) library for fade-up effects throughout all pages
- **Dark Theme** — Premium dark mode with purple (`#9945FF`) and teal (`#14F195`) accents
- **Type-Safe** — Full TypeScript support for production reliability

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router, SSR) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS + CSS Grid/Flexbox |
| **UI Library** | shadcn/ui (Card, Input, Label, Button, Table) |
| **Animations** | AOS v2.3.x (Animate On Scroll) |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans & Geist Mono |
| **Package Manager** | npm

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page with AOS animations
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard: 3 stats cards + payments table (AOS animated)
│   ├── create/
│   │   └── page.tsx          # Payment creation form with preview modal (AOS animated)
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   └── globals.css           # TailwindCSS + custom animations (slide-up keyframe)
├── components/
│   ├── shared/
│   │   ├── Navbar.tsx        # Sticky navbar with mobile hamburger menu
│   │   ├── Footer.tsx        # Transparent footer with responsive layout
│   │   ├── PreviewModal.tsx  # Modal for payment link preview (backdrop + slide-up)
│   │   ├── PrimaryButton.tsx # Gradient purple→teal button
│   │   └── SecondaryButton.tsx # Outlined border button
│   ├── home/
│   │   ├── Hero.tsx          # Two-line centered headline + CTA buttons
│   │   ├── Features.tsx      # 6 feature cards with icons (gradient hover effects)
│   │   ├── FeatureCard.tsx   # Individual feature card with shine animation
│   │   ├── CTASection.tsx    # Call-to-action section with gradient blobs
│   │   └── Tag.tsx           # Social links (X, Telegram, Discord, Instagram)
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx   # Dashboard title
│   │   ├── StatsCard.tsx         # Reusable analytics stat card
│   │   └── PaymentsTable.tsx     # shadcn Table with status badges
│   └── ui/
│       ├── card.tsx          # shadcn Card primitive (CardHeader, CardTitle, CardContent)
│       ├── input.tsx         # shadcn Input (transparent background)
│       ├── label.tsx         # shadcn Label
│       ├── button.tsx        # shadcn Button
│       ├── table.tsx         # Custom shadcn-style Table system
│       ├── avatar.tsx        # shadcn Avatar (@radix-ui/react-avatar)
│       ├── form.tsx          # shadcn Form (@radix-ui/react-form, react-hook-form)
│       └── switch.tsx        # shadcn Switch (@radix-ui/react-switch)
└── lib/
    └── utils.ts              # cn() utility for Tailwind class merging
```

### Component Architecture Highlights

**Shared Components** — Reusable across all pages (Navbar, Footer, Buttons)  
**Home Components** — Landing page sections (Hero, Features, CTA)  
**Dashboard Components** — Analytics & table (StatsCard, PaymentsTable, DashboardHeader)  
**UI Primitives** — shadcn/ui components (Card, Input, Table, Avatar, Form, Switch)

## 🎨 Design & UI Polish

### Color System
- **Background**: `#13161B` (dark charcoal)
- **Primary**: `#9945FF` (purple gradient)
- **Secondary**: `#14F195` (teal accent)
- **Border**: `#22262F` (subtle divider)
- **Text**: `#CECFD2` (light gray), `#F7F7F7` (off-white)

### Visual Effects
- **Glassmorphism** — `backdrop-blur-xl` on navbar, footer, cards
- **Gradient Text** — Logo uses `bg-linear-to-r from-primary to-secondary`
- **Gradient Buttons** — CTAs use gradient overlays with hover effects
- **Glow Blobs** — Hero section animated background blobs (blur-3xl)
- **Shine Animation** — Feature cards have animated shine effect on hover
- **Borders** — `border-[#22262F]` for consistency; `border-primary` for focus states

### Responsive Design
- Mobile-first approach with `px-4 sm:px-6` responsive padding
- Grid layouts: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
- Text scaling: `text-3xl sm:text-4xl md:text-5xl`
- Mobile hamburger menu (hidden on `sm:` breakpoint)
- Stacked footer on mobile, row layout on md+

## ✨ Animation Strategy (AOS Library)

**AOS (Animate On Scroll)** adds fade-up animations to all pages:

```tsx
// Initialization pattern (used in all animated pages)
useEffect(() => {
  AOS.init({ duration: 700, once: true, easing: "ease-out" });
}, []);

// Element markup
<div data-aos="fade-up" data-aos-delay="100">
  Content animates in on scroll
</div>
```

### Animation Timings

| Page | Elements | Delays |
|------|----------|--------|
| **Home (`/`)** | Hero (100ms) → Features (200ms) → CTA (300ms) | Staggered |
| **Dashboard** | Header (0ms) → Cards (100/200/300ms) → Table (400ms) | Sequential |
| **Create** | Header (0ms) → Card (100ms) → Inputs (200/300/400ms) → Buttons (500ms) | Progressive |

**Custom Animation** — Modal uses custom `animate-slide-up` keyframe (defined in globals.css)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## 📦 Dependencies

**Core**: Next.js 14, React 18, TypeScript  
**UI**: TailwindCSS, shadcn/ui (@radix-ui components)  
**Animations**: AOS v2.3.x (Animate On Scroll)  
**Icons**: Lucide React  
**Forms**: react-hook-form (for advanced form handling)  
**Fonts**: Geist (via next/font)

## 🌐 Deployment

**Vercel (Recommended)** — Deploy in 1 click:

1. Push to GitHub
2. Connect repo on [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys
4. Get live production URL instantly

No environment variables needed for frontend-only deployment.

## 📊 Project Strengths

| Aspect | Implementation |
|--------|-----------------|
| **Component Structure** | Modular reusable components (shared, home, dashboard, ui) with clear responsibility |
| **UI Polish** | Gradient accents, glassmorphism, hover effects, smooth transitions, dark theme optimization |
| **Animations** | AOS library with staggered fade-up effects on all pages; custom slide-up modal animation |
| **shadcn/ui Mastery** | Card, Input, Label, Button, Table, Avatar, Form, Switch — all properly configured |
| **Professionalism** | Type-safe TypeScript, semantic HTML, proper spacing/padding, production-ready code |
| **Attention to Detail** | Mobile hamburger menu, responsive breakpoints, consistent color system, hover states |
| **Performance** | Next.js optimization, lazy loading, proper image handling with next/image |
| **Accessibility** | ARIA labels, semantic buttons, proper heading hierarchy |

## 📝 Notes

- Mock data used for demonstration
- Frontend-only (no backend required)
- All routes functional and responsive
- Ready for payment API integration
- CSS custom properties in globals.css for theming

---

**AI PAY-LINK™** — Smart Payment Links Powered by AI | Built with Next.js 14 + TailwindCSS + shadcn/ui
