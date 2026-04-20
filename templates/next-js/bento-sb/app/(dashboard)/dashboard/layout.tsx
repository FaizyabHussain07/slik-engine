// nexus — app/(dashboard)/dashboard/layout.tsx

import Sidebar from '@/components/dashboard/Sidebar';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-60 min-h-screen bg-[var(--bg)]">
        {children}
      </main>
    </div>
  );
}
