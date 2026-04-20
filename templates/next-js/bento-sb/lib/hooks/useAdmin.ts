// nexus — lib/hooks/useAdmin.ts

'use client';

import { useUser } from './useUser';

export function useAdmin() {
  const { user, profile, loading, error } = useUser();
  const isAdmin = profile?.role === 'admin';

  return { isAdmin, loading, error };
}
