# Slik Engine

<div align="center">

**Design at the speed of thought**

![npm version](https://img.shields.io/npm/v/create-slik?style=flat-square)
![License: MIT](https://img.shields.io/npm/l/create-slik?style=flat-square)
![npm downloads](https://img.shields.io/npm/dm/create-slik?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/FaizyabHussain07/slik-engine?style=flat-square)

[Website](https://slik-dev.vercel.app) · [Documentation](https://slik-dev.vercel.app/docs) · [GitHub](https://github.com/FaizyabHussain07/slik-engine) · [Report Issue](https://github.com/FaizyabHussain07/slik-engine/issues)

</div>

---

## Overview

Slik Engine is a production-ready SaaS boilerplate that helps you ship beautiful, full-stack applications in under 60 seconds. Choose your stack, pick a design vibe, and get a complete project with authentication, database, and UI components pre-configured.

Perfect for indie hackers, startups, and developers who want to focus on building their product instead of setting up infrastructure.

## Quick Start

```bash
npx create-slik@latest
```

Answer three simple questions:

```bash
✦ slik — design at the speed of thought

◆ Project name? my-app
◆ Pick a stack? Next.js 15
◆ Pick a vibe? Bento

◇ Creating your project...
  ✓ Template cloned
  ✓ Dependencies installed

✦ Your Slik project is ready!

  Next steps:
  cd my-app
  Fill in .env.local with your Supabase credentials
  npm run dev

  Docs → https://slik-dev.vercel.app/docs
```

## Available Stacks & Vibes

| Stack | Description | Bento | Frost | Mono |
|-------|-------------|-------|-------|------|
| **Next.js 15** | SSR with App Router | ✅ | ✅ | ✅ |
| **React (Vite)** | SPA with Vite | ✅ | ✅ | ✅ |
| **Vanilla HTML** | Zero framework | ✅ | ✅ | ✅ |

### Design Themes

- **Bento** — Dark editorial grid layout with lime accent (#c8f135) and DM Serif Display typography
- **Frost** — Glassmorphism light theme with backdrop blur and indigo accents
- **Mono** — Minimal monochrome design with tight typography and black/white palette

## Features

### Core Functionality
- 🎯 **Landing Page** — Hero, Features, Pricing, Testimonials, and CTA sections
- 🔐 **Authentication** — Login, Signup, and Password Reset with Supabase
- 📊 **User Dashboard** — Stats overview, Projects management, Activity feed, Settings
- 👤 **Admin Panel** — User management with role-based access control
- 🗄️ **Database** — PostgreSQL with Row Level Security (RLS) policies

### Tech Stack
- **Framework** — Next.js 15 / React / Vanilla HTML
- **Database** — Supabase (PostgreSQL)
- **Authentication** — Email + Google OAuth
- **Styling** — Tailwind CSS with custom design tokens
- **TypeScript** — Fully typed codebase
- **Responsive** — Mobile-first design

### Developer Experience
- ⚡️ Instant project scaffolding
- 🎨 Pre-built UI components
- 📦 Optimized production build
- 🔒 Security best practices
- 📱 Responsive out of the box

## Getting Started

### 1. Create a Supabase Project

Visit [supabase.com](https://supabase.com) and create a new project.

### 2. Run Database Migrations

Execute the initial SQL migration from your project:

```bash
# From your project directory
supabase/migrations/001_initial.sql
```

### 3. Configure Authentication

Enable Google OAuth in your Supabase dashboard:
- Go to Authentication → Providers → Google
- Add your OAuth credentials
- Set the redirect URL to your site URL

### 4. Set Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-app/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions
├── public/          # Static assets
├── supabase/        # Database migrations
├── .env.local       # Environment variables
└── package.json     # Dependencies
```

## Documentation

- [Getting Started Guide](https://slik-dev.vercel.app/docs/getting-started)
- [Authentication](https://slik-dev.vercel.app/docs/authentication)
- [Database Schema](https://slik-dev.vercel.app/docs/database)
- [Customization](https://slik-dev.vercel.app/docs/customization)
- [Deployment](https://slik-dev.vercel.app/docs/deployment)

## Contributing

We welcome contributions! Please read our [Contributing Guide](https://github.com/FaizyabHussain07/slik-engine/blob/main/CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](https://github.com/FaizyabHussain07/slik-engine/blob/main/LICENSE) file for details.

## Support

- 📖 [Documentation](https://slik-dev.vercel.app/docs)
- 🐛 [Report Issues](https://github.com/FaizyabHussain07/slik-engine/issues)
- 💬 [Discussions](https://github.com/FaizyabHussain07/slik-engine/discussions)

---

<div align="center">

Built with ❤️ by [Faizyab Hussain](https://github.com/FaizyabHussain07)

[⭐ Star us on GitHub](https://github.com/FaizyabHussain07/slik-engine) — it helps!

</div>
