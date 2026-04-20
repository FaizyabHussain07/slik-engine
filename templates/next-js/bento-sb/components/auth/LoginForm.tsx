// nexus — components/auth/LoginForm.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

export function LoginForm() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGoogleSignIn() {
    setLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: process.env.NEXT_PUBLIC_SITE_URL + '/api/auth/callback',
        },
      });
      
      if (error) throw error;
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Map errors to user-friendly messages
        if (error.message === 'Invalid login credentials') {
          setError('Wrong email or password. Please try again.');
        } else if (error.message === 'Email not confirmed') {
          setError('Please confirm your email first. Check your inbox.');
        } else if (error.message.includes('Too many requests')) {
          setError('Too many attempts. Please wait a minute.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        return;
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError('Something went wrong. Please try again.');
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

      {/* Heading */}
      <h1 className="font-serif text-[28px] text-[var(--text)] text-center mb-2">
        Welcome back
      </h1>
      <p className="text-sm text-[var(--muted)] text-center mb-6">
        Sign in to your workspace
      </p>

      {/* Google OAuth */}
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full bg-[var(--surface2)] border border-[var(--border2)] rounded-[10px] py-3 text-sm text-[var(--text)] flex items-center justify-center gap-3 hover:bg-[var(--surface)] transition disabled:opacity-50 mb-6"
      >
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-[var(--border)]" />
        <span className="text-xs text-[var(--muted)]">or</span>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
        <div>
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-xs text-[var(--accent)] hover:underline mt-1"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Forgot password */}
        <div className="text-right">
          <Link href="/reset-password" className="text-xs text-[var(--accent)] hover:underline">
            Forgot password?
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-[var(--coral)]/10 border border-[var(--coral)]/30 rounded-[10px] px-4 py-3 text-sm text-[var(--coral)]">
            {error}
          </div>
        )}

        {/* Submit */}
        <Button type="submit" variant="primary" className="w-full" loading={loading}>
          Sign in
        </Button>
      </form>

      {/* Bottom */}
      <p className="text-sm text-[var(--muted)] text-center mt-6">
        Don't have an account?{' '}
        <Link href="/signup" className="text-[var(--accent)] hover:underline">
          Sign up free
        </Link>
      </p>
    </div>
  );
}
