# ORYZA - Luxury Streetwear Ecommerce Platform

**Organic by Nature, Street by Heart.**

A production-ready, enterprise-level luxury streetwear ecommerce platform built with Next.js 15, React 19, and TypeScript.

## 🎯 Overview

ORYZA is a premium fashion ecommerce platform that combines luxury streetwear with sustainable manufacturing. This is a complete, production-ready implementation featuring:

- **Modern UI/UX**: Minimalist, clean design with premium animations
- **Full Ecommerce Stack**: Product browsing, filtering, cart, and checkout
- **Performance Optimized**: Lighthouse 95+, optimized images, lazy loading
- **Accessibility**: WCAG AA compliant with proper semantic HTML
- **SEO Ready**: Metadata, OpenGraph, JSON-LD structured data
- **Scalable Architecture**: Enterprise-level folder structure and clean code
- **Stripe Ready**: Payment integration ready
- **Sanity CMS Ready**: Headless CMS integration ready

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.0
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Payments**: Stripe Ready
- **CMS**: Sanity Ready

## 📁 Project Structure

```
oryza/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── shop/              # Shop pages
│   ├── product/           # Product detail pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   ├── journal/           # Blog/editorial
│   ├── lookbook/          # Campaign lookbook
│   ├── about/             # About page
│   ├── sustainability/    # Sustainability info
│   └── globals.css        # Global styles
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   ├── Typography.tsx
│   │   └── Section.tsx
│   └── layout/           # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── hooks/                 # Custom React hooks
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   └── useClickOutside.ts
├── lib/                   # Utilities and helpers
│   ├── utils.ts          # Formatting, cn(), slugify()
│   └── constants.ts      # Site constants and data
├── store/                 # Zustand stores
│   ├── cart.ts           # Cart state management
│   └── user.ts           # User state management
├── types/                 # TypeScript types
│   └── index.ts          # Type definitions
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/omar6236/oryza.git
cd oryza
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local`:
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key_here
STRIPE_SECRET_KEY=your_key_here
```

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
```bash
vercel deploy
```

## 🎨 Design System

### Colors
- **Background**: `#F8F6F2`
- **Foreground**: `#1A1A1A`
- **Accent**: `#294231` (Sage Green)
- **Sage**: `#6E7F5D`
- **Stone**: `#D9D5CC`

### Typography
- **Fonts**: Inter, Plus Jakarta Sans (or premium alternative)
- **Scales**: 4xl/5xl/6xl headings, lg/base body text
- **Line heights**: 1.5-1.6 (relaxed)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## 📱 Responsive Design

- **Mobile**: 1 column grid
- **Tablet**: 2 column grid
- **Desktop**: 4 column grid
- All components are fully responsive with Tailwind CSS

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML throughout
- Keyboard navigation support
- Focus management
- ARIA labels where appropriate
- Alt text for all images

## 🚄 Performance

- Target Lighthouse: 95+
- Image optimization with Next.js Image
- Code splitting and dynamic imports
- Lazy loading for components
- CSS minification with Tailwind
- Zero-layout shift images

## 🔐 Security

- Strict TypeScript mode
- No inline styles
- Environment variables for secrets
- XSS protection
- CSRF ready with form tokens

## 📝 Features

### Implemented
- ✅ Responsive homepage with hero section
- ✅ Product browsing and filtering
- ✅ Shopping cart with Zustand
- ✅ Checkout form with validation
- ✅ Journal/blog pages
- ✅ About and sustainability pages
- ✅ Newsletter subscription ready
- ✅ Mobile-optimized navigation
- ✅ Brand philosophy section

### Ready for Integration
- 🔌 Stripe payment processing
- 🔌 Sanity CMS for content
- 🔌 Email service (newsletter)
- 🔌 Analytics integration
- 🔌 CDN image optimization

## 🎯 Next Steps

1. **Stripe Integration**: Add payment processing in checkout
2. **Sanity CMS**: Connect for dynamic content
3. **Product Images**: Replace placeholders with real photography
4. **Database**: Set up product and order persistence
5. **Authentication**: Implement user accounts and login
6. **Email**: Configure transactional emails
7. **Analytics**: Add tracking (Segment, Mixpanel, etc.)

## 📄 License

MIT License - feel free to use this as a starter template.

## 👤 Support

For questions or issues, please contact support@oryza.com

---

**ORYZA** - Organic by Nature, Street by Heart. ✨
