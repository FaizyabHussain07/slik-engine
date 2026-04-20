// nexus — app/(auth)/login/page.tsx

import Link from 'next/link';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4">
      <Link href="/" className="absolute top-6 left-6 text-xs text-[var(--muted)] hover:text-[var(--text)]">
        ← Back to Nexus
      </Link>
      <LoginForm />
    </div>
  );
}
