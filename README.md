# AI PAY-LINK™

**Smart Payment Links Powered by AI**

A modern, dark-themed Next.js 14 application for creating and managing AI-powered payment links.

## 🚀 Live Preview

- **Local Development**: [http://localhost:3000](http://localhost:3000)
- **Production**: Deploy on [Vercel](https://vercel.com) for instant production preview

## 📋 Test Task Completion

This project fulfills all requirements of the AI PAY-LINK™ test task:

### ✅ Landing Page (/)
- Centered headline: "AI PAY-LINK™ — Smart Payment Links Powered by AI"
- Engaging subtitle
- Two primary action buttons:
  - **Create Payment Link** - Navigate to creation flow
  - **View Dashboard** - Access payment overview
- Premium dark-first design with gradient accents
- Fully responsive layout
- Built with shadcn/ui components

### ✅ Dashboard Page (/dashboard)
- **3-Card Analytics Layout**:
  - Total Earnings: $12,450.00
  - Total Payments: 342
  - Pending: 23
- **Payments Table** with columns:
  - Title
  - Amount
  - Status (with status badges)
- Mock data for demonstration
- Clean, scannable design

### ✅ Create Page (/create)
- Payment link creation form
- Real-time preview
- Form fields: Title, Amount, Description
- Action buttons using existing component library

### ✅ Navigation
- Top navigation bar with:
  - **AI PAY-LINK™** logo (gradient text)
  - Dashboard link
  - Create link
- Sticky positioning with backdrop blur
- Smooth hover transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Font**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard with stats & table
│   ├── create/
│   │   └── page.tsx          # Payment link creation
│   ├── layout.tsx            # Root layout with navbar
│   └── globals.css           # Global styles & theme
├── components/
│   ├── shared/
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── PrimaryButton.tsx # Gradient button
│   │   └── SecondaryButton.tsx # Outlined button
│   ├── home/
│   │   └── Hero.tsx          # Landing hero section
│   └── ui/                   # shadcn/ui components
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── button.tsx
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design System

### Color Palette
- **Background**: `#13161B` (Dark charcoal)
- **Primary**: `#9945FF` (Purple gradient)
- **Secondary**: `#14F195` (Teal accent)
- **Text Primary**: `#F7F7F7` (Off-white)
- **Text Secondary**: `#CECFD2` (Light gray)
- **Border**: `#22262F` (Subtle dark)

### Key Features
- **Dark Mode First**: Optimized for dark theme by default
- **Gradient Accents**: Purple-to-teal gradients for CTAs
- **Glassmorphism**: Backdrop blur effects for depth
- **Responsive**: Mobile-first approach
- **Clean Typography**: Geist font family for modern aesthetics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pay-link
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com/new)
3. Vercel will auto-detect Next.js and deploy
4. Get instant production URL

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## ✨ Component Reusability

All components are built with reusability in mind:

- **PrimaryButton**: Gradient background, customizable
- **SecondaryButton**: Outlined style with hover effects
- **Navbar**: Responsive navigation with sticky positioning
- **Card Components**: Flexible card system from shadcn/ui
- **Form Components**: Input, Label from shadcn/ui

## 🎯 Highlights

- **Clean Code**: Well-structured, type-safe TypeScript
- **Component Architecture**: Modular and maintainable
- **UI Polish**: Smooth animations and transitions
- **Performance**: Optimized Next.js build
- **Accessibility**: Semantic HTML and ARIA labels
- **Professional**: Production-ready code quality

## 📝 Notes

- All navigation links are functional
- Mock data used for demonstration purposes
- No backend required - frontend only implementation
- Ready for integration with payment APIs

## 👨‍💻 Development

Built with attention to:
- Code quality and structure
- TypeScript best practices
- Component composition
- UI/UX polish
- Responsive design
- Dark theme optimization

---

**AI PAY-LINK™** - Smart Payment Links Powered by AI
