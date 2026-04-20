// nexus — app/(auth)/reset-password/page.tsx

import { Suspense } from 'react';
import Link from 'next/link';
import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4">
      <Link href="/login" className="absolute top-6 left-6 text-xs text-[var(--muted)] hover:text-[var(--text)]">
        ← Back to sign in
      </Link>
      <Suspense fallback={<div className="max-w-[420px] w-full bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-8 md:p-10">Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
