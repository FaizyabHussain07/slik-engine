// nexus — app/(dashboard)/dashboard/settings/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function SettingsPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email || '');
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', user.id)
          .single();
        setFullName(profile?.full_name || '');
      }
    }
    loadProfile();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (user && fullName) {
        await supabase
          .from('profiles')
          .update({ full_name: fullName })
          .eq('id', user.id);
      }

      router.refresh();
    } catch (err) {
      console.error('Failed to update profile:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-[var(--text)] mb-2">
          Settings
        </h1>
        <p className="text-[var(--muted)]">
          Manage your account and workspace preferences.
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile Section */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
          <h2 className="font-serif text-xl text-[var(--text)] mb-6">Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1.5">
                Email (Cannot be changed)
              </label>
              <input
                value={email}
                type="email"
                disabled
                className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--muted)] opacity-50 cursor-not-allowed"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--accent)] text-black px-6 py-2.5 rounded-[10px] text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading && (
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Danger Zone */}
        <div className="bg-[var(--surface)] border border-[var(--coral)]/30 rounded-[20px] p-6">
          <h2 className="font-serif text-xl text-[var(--coral)] mb-4">Danger Zone</h2>
          <p className="text-sm text-[var(--muted)] mb-4">
            Irreversible actions. Proceed with caution.
          </p>
          <button className="bg-[var(--coral)] text-white px-6 py-2.5 rounded-[10px] text-sm font-medium hover:opacity-90 transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
