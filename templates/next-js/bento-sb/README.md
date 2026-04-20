# nexus — README.md

# Nexus

A modern SaaS project management tool built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Authentication**: Email/password and OAuth (Google) with Supabase
- **Dashboard**: Personal workspace with tasks, stats, and activity feed
- **Admin Panel**: User management and role-based access control
- **Landing Page**: Hero, features, pricing, social proof, and CTA sections
- **Responsive Design**: Mobile-first with Bento dark theme
- **Real-time Updates**: Powered by Supabase real-time subscriptions
- **Type Safety**: Full TypeScript with no implicit any

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Theme**: next-themes (dark mode only)
- **Fonts**: DM Serif Display, DM Mono, Geist

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd templates/next-js/bento-sb
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run Supabase migrations:
```bash
npx supabase db push
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
templates/next-js/bento-sb/
├── app/                      # Next.js app directory
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   └── reset-password/
│   ├── (dashboard)/         # Protected dashboard pages
│   │   ├── dashboard/
│   │   └── admin/
│   ├── api/                 # API routes
│   │   └── auth/callback/
│   ├── about/
│   ├── contact/
│   ├── features/
│   ├── pricing/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── admin/              # Admin components
│   ├── auth/               # Auth forms
│   ├── contact/            # Contact form
│   ├── dashboard/          # Dashboard components
│   ├── landing/            # Landing page sections
│   ├── layout/             # Navbar, Footer, Sidebar
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── hooks/              # React hooks
│   ├── supabase/           # Supabase utilities
│   └── utils.ts            # Helper functions
├── supabase/
│   └── migrations/         # Database migrations
└── public/                 # Static assets
```

## Design System

Nexus uses a custom Bento dark theme with CSS variables:

- **Colors**: Accent (yellow), Purple, Teal, Coral
- **Fonts**: DM Serif Display (headings), DM Mono (labels), Geist (body)
- **Radius**: 10px (small), 20px (cards)
- **Animations**: Fade-up, slide, bounce

## Authentication

The app uses Supabase Auth with:

- Email/password signup and login
- Google OAuth
- Password reset
- Protected routes with middleware
- Role-based access control (user/admin)

## Database

### Profiles Table

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE
);
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
- `NEXT_PUBLIC_SITE_URL`: Your site URL (for OAuth redirects)

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## License

MIT
