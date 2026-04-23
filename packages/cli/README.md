# **create-slik** — Design at the speed of thought

![npm version](https://img.shields.io/npm/v/create-slik) ![License: MIT](https://img.shields.io/badge/license-MIT-blue) ![npm downloads](https://img.shields.io/npm/dm/create-slik) ![GitHub stars](https://img.shields.io/github/stars/FaizyabHussain07/slik-engine)

## Quick Start

```bash
npx create-slik@latest
```

## How It Works

The CLI asks 3 questions, then generates a full-stack SaaS in under 60 seconds:

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

## Stack + Vibe Matrix

|              | Bento | Frost | Mono |
|--------------|-------|-------|------|
| Next.js 15   |  ✅   |  🔜   |  🔜  |
| React (Vite) |  ✅   |  🔜   |  🔜  |
| HTML         |  ✅  |  🔜   |  🔜  |

## What's Included

- 🎯 Landing page (Hero, Features, Pricing, Testimonials, CTA)
- 🔐 Auth pages (Login, Signup, Reset Password) with Supabase
- 📊 User Dashboard (Stats, Projects, Activity, Settings)
- 👤 Admin Panel (User management, role-based access)
- 🗄️ Supabase integration (Email + Google OAuth, PostgreSQL, RLS)
- 🔷 TypeScript fully typed
- 🎨 Tailwind CSS with custom design tokens
- 📱 Fully responsive (mobile first)

## Design Themes

- **Bento**: Dark editorial grid-based layout, lime accent (#c8f135), DM Serif Display font
- **Frost**: Glassmorphism light theme, backdrop blur, indigo accent
- **Mono**: Pure minimal monochrome, black/white only, tight typography

## After Install

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL migration: `supabase/migrations/001_initial.sql`
3. Enable Google OAuth in your Supabase dashboard
4. Fill `.env.local` with your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run `npm run dev` → open [localhost:3000](http://localhost:3000)

## Contributing

PRs welcome — read [CONTRIBUTING.md](https://github.com/FaizyabHussain07/slik-engine/blob/main/CONTRIBUTING.md)

## Links

- **Website**: https://slik-dev.vercel.app
- **GitHub**: https://github.com/FaizyabHussain07/slik-engine
- **Docs**: https://slik.dev/docs
- **Issues**: https://github.com/FaizyabHussain07/slik-engine/issues

---

MIT License © [Faizyab Hussain](https://github.com/FaizyabHussain07)
