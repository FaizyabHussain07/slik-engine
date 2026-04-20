// nexus — components/auth/SignupForm.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';

export function SignupForm() {
  const router = useRouter();
  const supabase = createClient();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function getPasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password) || /[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  }

  function getStrengthLabel(strength: number): { label: string; color: string } {
    const labels = [
      { label: 'Weak', color: 'var(--coral)' },
      { label: 'Fair', color: '#f59e0b' },
      { label: 'Good', color: 'var(--teal)' },
      { label: 'Strong', color: 'var(--accent)' },
    ];
    return labels[strength - 1] || labels[0];
  }

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
      setError('Failed to sign up with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!agreed) {
      setError('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        if (error.message === 'User already registered') {
          setError('An account exists with this email.');
        } else {
          setError(error.message);
        }
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-[420px] w-full bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-[var(--text)] mb-2">
          Check your inbox
        </h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          We sent a confirmation link to <span className="text-[var(--text)]">{email}</span>. Click it to activate your account.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setFullName('');
          }}
          className="text-[var(--accent)] text-sm hover:underline mb-4"
        >
          Resend email
        </button>
        <div>
          <Link href="/login" className="text-xs text-[var(--muted)] hover:text-[var(--text)]">
            ← Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  const strength = getPasswordStrength(password);
  const strengthLabel = getStrengthLabel(strength);

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
        Create your account
      </h1>
      <p className="text-sm text-[var(--muted)] text-center mb-6">
        Start your 14-day free trial. No credit card required.
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
          label="Full name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="John Doe"
          autoComplete="name"
        />
        <Input
          label="Work email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@company.com"
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
            autoComplete="new-password"
          />
          {password && (
            <div className="mt-2">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all"
                    style={{
                      backgroundColor: i <= strength ? strengthLabel.color : 'var(--surface2)',
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: strengthLabel.color }}>
                {strengthLabel.label}
              </span>
            </div>
          )}
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

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-[var(--muted)]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5"
          />
          <span>
            I agree to the{' '}
            <Link href="/terms" className="text-[var(--accent)] hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[var(--accent)] hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>

        {/* Error */}
        {error && (
          <div className="bg-[var(--coral)]/10 border border-[var(--coral)]/30 rounded-[10px] px-4 py-3 text-sm text-[var(--coral)]">
            {error}
          </div>
        )}

        {/* Submit */}
        <Button type="submit" variant="primary" className="w-full" loading={loading}>
          Create account →
        </Button>
      </form>

      {/* Bottom */}
      <p className="text-sm text-[var(--muted)] text-center mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-[var(--accent)] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
