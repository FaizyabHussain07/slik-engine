// nexus — components/auth/ResetPasswordForm.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  // Check if we're in recovery mode (from email link)
  const isRecovery = searchParams.get('type') === 'recovery';

  useEffect(() => {
    // Check for hash fragment for recovery mode
    if (window.location.hash.includes('type=recovery')) {
      router.replace(window.location.pathname + window.location.hash);
    }
  }, [router]);

  async function handleRequestReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: process.env.NEXT_PUBLIC_SITE_URL + '/reset-password',
      });

      if (error) throw error;
      setSuccess(true);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSetNewPassword(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[420px] w-full bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-8 md:p-10">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="font-serif text-2xl text-[var(--text)]">
          Nexus<span className="text-[var(--accent)]">.</span>
        </div>
      </div>

      {!isRecovery ? (
        <>
          {/* Request Reset State */}
          {!success ? (
            <>
              <h1 className="font-serif text-[28px] text-[var(--text)] text-center mb-2">
                Reset your password
              </h1>
              <p className="text-sm text-[var(--muted)] text-center mb-6">
                Enter your email and we'll send you a reset link.
              </p>

              <form onSubmit={handleRequestReset} className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                />

                {error && (
                  <div className="bg-[var(--coral)]/10 border border-[var(--coral)]/30 rounded-[10px] px-4 py-3 text-sm text-[var(--coral)]">
                    {error}
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full" loading={loading}>
                  Send reset link
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-[var(--text)] mb-2">
                  Check your email
                </h2>
                <p className="text-sm text-[var(--muted)]">
                  We sent a reset link to your email. Link expires in 1 hour.
                </p>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* Set New Password State */}
          <h1 className="font-serif text-[28px] text-[var(--text)] text-center mb-2">
            Set new password
          </h1>
          <p className="text-sm text-[var(--muted)] text-center mb-6">
            Enter your new password below.
          </p>

          <form onSubmit={handleSetNewPassword} className="space-y-4">
            <div>
              <Input
                label="New password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-xs text-[var(--accent)] hover:underline mt-1"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <Input
              label="Confirm password"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="••••••••"
              autoComplete="new-password"
              error={password && confirmPassword && password !== confirmPassword ? "Passwords don't match" : ''}
            />

            {error && (
              <div className="bg-[var(--coral)]/10 border border-[var(--coral)]/30 rounded-[10px] px-4 py-3 text-sm text-[var(--coral)]">
                {error}
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full" loading={loading}>
              Update password
            </Button>
          </form>
        </>
      )}

      {/* Back Link */}
      <div className="text-center mt-6">
        <Link href="/login" className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}
