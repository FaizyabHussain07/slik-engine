// nexus — app/(dashboard)/dashboard/page.tsx

import { createClient } from '@/lib/supabase/server';
import { getGreeting } from '@/lib/utils';
import { UserDashboard } from '@/components/dashboard/UserDashboard';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single();

  const greeting = getGreeting();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-[var(--text)] mb-2">
          {greeting}, {profile?.full_name || 'User'}
        </h1>
        <p className="text-[var(--muted)]">
          Here's what's happening in your workspace.
        </p>
      </div>

      <UserDashboard />
    </div>
  );
}
