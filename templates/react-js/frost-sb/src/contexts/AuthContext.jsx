import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { supabase, isSupabaseConfigured } from '../config/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isInitialized = useRef(false);

  const fetchUserData = async (userId, retries = 3) => {
    if (!supabase) return null;
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        if (retries > 0) {
          await new Promise(res => setTimeout(res, 800)); // Slightly faster retry
          return fetchUserData(userId, retries - 1);
        }
        return null;
      }
      return data;
    } catch (err) {
      return null;
    }
  };

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Skip Supabase initialization if not configured
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    const syncAuth = async () => {
      if (!supabase) return;
      // Get current session instantly
      const { data: { session } } = await supabase.auth.getSession();
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        const data = await fetchUserData(currentUser.id);
        setUserData(data);
      }
      setLoading(false);
    };

    syncAuth();

    // Listen for auth changes
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);

        if (currentUser) {
          const data = await fetchUserData(currentUser.id);
          setUserData(data);
        } else {
          setUserData(null);
        }
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const val = { user, userData, loading };

  return (
    <AuthContext.Provider value={val}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
