// slik — react-bento — src/types/database.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: ProfileInsert
        Update: ProfileUpdate
      }
    }
  }
}

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: 'user' | 'admin'
  created_at: string
}

export interface ProfileInsert {
  id?: string
  email: string
  full_name?: string | null
  avatar_url?: string | null
  role?: 'user' | 'admin'
  created_at?: string
}

export interface ProfileUpdate {
  id?: string
  email?: string
  full_name?: string | null
  avatar_url?: string | null
  role?: 'user' | 'admin'
  created_at?: string
}
