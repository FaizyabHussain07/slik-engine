# **create-slik** — Design at the speed of thought

[![npm version](https://img.shields.io/npm/v/create-slik)](https://www.npmjs.com/package/create-slik)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/create-slik)](https://www.npmjs.com/package/create-slik)
[![GitHub stars](https://img.shields.io/github/stars/FaizyabHussain07/slik-engine)](https://github.com/FaizyabHussain07/slik-engine)

> Generate beautiful, production-ready SaaS applications in under 60 seconds.

## Quick Start

```bash
npx create-slik@latest
```

## Overview

**create-slik** is an open-source CLI that scaffolds full-stack SaaS applications with stunning design out of the box. Answer 3 simple questions and get a complete project with authentication, dashboards, admin panels, and more.

## How It Works

```bash
✦ slik — design at the speed of thought

◆ Project name? › my-app
◆ Pick a stack? › Next.js 15
◆ Pick a vibe? › Bento

◇ Creating your project
  my-app
  Stack   next-js
  Vibe    bento-sb

◇ Template cloned ✓
◇ Dependencies installed ✓

✦ Your Slik project is ready!
  ❶  cd my-app
  ❷  Fill .env.local with your Supabase credentials
  ❸  npm run dev

  Docs    → https://slik-dev.vercel.app/docs
  Issues  → https://github.com/FaizyabHussain07/slik-engine/issues
```

## Stack & Vibe Matrix

|              | Bento | Frost | Mono |
|--------------|-------|-------|------|
| Next.js 15   |  ✅   |  🔜   |  🔜  |
| React (Vite) |  ✅   |  ✅   |  🔜  |
| HTML         |  🔜   |  🔜   |  🔜  |

## What's Included

- 🎯 **Landing Page** — Hero, Features, Pricing, Testimonials, CTA
- 🔐 **Authentication** — Login, Signup, Reset Password with Supabase
- 📊 **User Dashboard** — Stats, Projects, Activity, Settings
- 👤 **Admin Panel** — User management, role-based access control
- 🗄️ **Supabase Integration** — Email + Google OAuth, PostgreSQL, RLS policies
- 🔷 **TypeScript** — Fully typed throughout
- 🎨 **Tailwind CSS** — Custom design tokens and utilities
- 📱 **Responsive** — Mobile-first design

## Design Themes

- **Bento** — Dark editorial grid-based layout with lime accent (#c8f135) and DM Serif Display typography
- **Frost** — Glassmorphism light theme with backdrop blur and indigo accent
- **Mono** — Pure minimal monochrome, black/white only with tight typography

## Getting Started

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Run the SQL migration** from `supabase/migrations/001_initial.sql`
3. **Enable Google OAuth** in your Supabase dashboard
4. **Configure your environment** in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. **Start the development server**:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](https://github.com/FaizyabHussain07/slik-engine/blob/main/CONTRIBUTING.md) before submitting a pull request.

## Links

- **Website**: https://slik-dev.vercel.app
- **Documentation**: https://slik-dev.vercel.app/docs
- **GitHub**: https://github.com/FaizyabHussain07/slik-engine
- **Issues**: https://github.com/FaizyabHussain07/slik-engine/issues

## License

MIT © [Faizyab Hussain](https://github.com/FaizyabHussain07)
