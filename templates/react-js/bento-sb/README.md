# SmartDash - React + Supabase SaaS Dashboard

A modern, role-based SaaS dashboard built with React 18, Vite, TypeScript, Tailwind CSS, and Supabase. Features the premium Bento dark design theme.

## � Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Authentication & Database
- **React Router v6** - Routing
- **Lucide React** - Icons

## 📁 Project Structure

```
bento-sb/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   └── Sidebar.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Spinner.tsx
│   │   └── ProtectedRoute.tsx
│   ├── hooks/
│   │   ├── useAdmin.ts
│   │   └── useUser.ts
│   ├── lib/
│   │   ├── supabase.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── AdminDashboard.tsx
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── ResetPasswordPage.tsx
│   │   ├── SettingsPage.tsx
│   │   ├── SignupPage.tsx
│   │   └── UserDashboard.tsx
│   ├── types/
│   │   └── database.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── supabase/
│   └── migrations/
│       └── 001_initial.sql
├── .env.example
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [Supabase Console](https://supabase.com/dashboard)
2. Create a new project
3. Navigate to **Project Settings > API**
4. Copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Database Migration

1. In Supabase Console, go to **SQL Editor**
2. Copy the contents of `supabase/migrations/001_initial.sql`
3. Run the SQL script to create the `profiles` table and set up RLS policies

### 5. Start Development Server

```bash
npm run dev
```

## 👑 Creating an Admin User

By default, all new users have the `user` role. To create an admin:

1. Sign up a new account
2. In Supabase Console, go to **Table Editor > profiles**
3. Find your user and change the `role` field from `user` to `admin`
4. Log out and log back in to access the admin dashboard

## 🌐 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the dist folder
```

## 🎨 Bento Dark Theme

The project uses a custom dark theme with:

- **Background**: `#0a0a0a`
- **Surface**: `#111111`
- **Surface 2**: `#1a1a1a`
- **Accent**: `#c8f135` (lime green)
- **Fonts**: DM Serif Display, DM Mono, Geist

## � Features

- **Secure Authentication** - Email/password and OAuth (Google)
- **Role-Based Access Control** - User and Admin roles
- **Protected Routes** - Auth and admin role checking
- **User Management** - Admin can view and manage all users
- **Profile Settings** - Users can update their profile
- **Password Reset** - Email-based password recovery
- **Responsive Design** - Mobile-first with Tailwind CSS
- **Bento Grid Layout** - Modern card-based UI

## 📝 License

MIT
