// nexus — components/layout/Navbar.tsx

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { useUser } from '@/lib/hooks/useUser';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, profile, refreshProfile } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    refreshProfile();
  }, [refreshProfile]);

  async function handleSignOut() {
    setSigningOut(true);
    try {
      const { createClient } = await import('@/lib/supabase/client');
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setSigningOut(false);
    }
  }

  function getInitials(name: string) {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl text-[var(--text)]">
            Nexus<span className="text-[var(--accent)]">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-2 rounded-lg transition ${
                  pathname === link.href
                    ? 'text-[var(--text)] font-medium'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--surface2)] transition"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-xs font-medium">
                    {profile?.full_name ? getInitials(profile.full_name) : user.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <span className="text-sm text-[var(--text)]">{profile?.full_name || 'User'}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--surface)] border border-[var(--border)] rounded-[10px] py-2 shadow-xl">
                    <Link
                      href="/dashboard"
                      onClick={() => setShowProfileMenu(false)}
                      className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface2)] transition"
                    >
                      Dashboard
                    </Link>
                    {profile?.role === 'admin' && (
                      <Link
                        href="/admin"
                        onClick={() => setShowProfileMenu(false)}
                        className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface2)] transition"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setShowProfileMenu(false)}
                      className="block px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface2)] transition"
                    >
                      Settings
                    </Link>
                    <hr className="my-2 border-[var(--border)]" />
                    <button
                      onClick={handleSignOut}
                      disabled={signingOut}
                      className="block w-full text-left px-4 py-2 text-sm text-[var(--coral)] hover:bg-[var(--surface2)] transition disabled:opacity-50"
                    >
                      {signingOut ? 'Signing out...' : 'Sign out'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="ghost" href="/login">
                  Sign in
                </Button>
                <Button variant="primary" href="/signup">
                  Get started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--text)]"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg)] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-[var(--muted)] hover:text-[var(--text)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-serif transition ${
                  pathname === link.href
                    ? 'text-[var(--text)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-3 bg-[var(--surface2)] rounded-[10px]">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] flex items-center justify-center text-sm font-medium">
                      {profile?.full_name ? getInitials(profile.full_name) : user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div>
                      <div className="text-sm text-[var(--text)]">{profile?.full_name || 'User'}</div>
                      <div className="text-xs text-[var(--muted)]">{user.email || ''}</div>
                    </div>
                  </div>
                  <Link href="/dashboard" className="text-center text-sm text-[var(--text)] hover:text-[var(--accent)] transition">
                    Dashboard
                  </Link>
                  {profile?.role === 'admin' && (
                    <Link href="/admin" className="text-center text-sm text-[var(--text)] hover:text-[var(--accent)] transition">
                      Admin Panel
                    </Link>
                  )}
                  <Link href="/dashboard/settings" className="text-center text-sm text-[var(--text)] hover:text-[var(--accent)] transition">
                    Settings
                  </Link>
                  <button onClick={handleSignOut} disabled={signingOut} className="text-center text-sm text-[var(--coral)] hover:underline transition disabled:opacity-50">
                    {signingOut ? 'Signing out...' : 'Sign out'}
                  </button>
                </>
              ) : (
                <>
                  <Button variant="ghost" href="/login" className="w-full">
                    Sign in
                  </Button>
                  <Button variant="primary" href="/signup" className="w-full">
                    Get started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
