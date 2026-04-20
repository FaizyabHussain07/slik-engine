// nexus — app/(dashboard)/admin/page.tsx

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { AdminPanel } from '@/components/admin/AdminPanel';

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  // Check if user is admin
  if (profile?.role !== 'admin') {
    redirect('/dashboard');
  }

  // Fetch all users for admin view
  const { data: users } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-[var(--text)] mb-2">
          Admin Panel
        </h1>
        <p className="text-[var(--muted)]">
          Manage users and system settings.
        </p>
      </div>

      <AdminPanel users={users || []} />
    </div>
  );
}
