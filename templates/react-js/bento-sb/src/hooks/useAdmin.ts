// slik — react-bento — src/hooks/useAdmin.ts
import { useState, useEffect } from 'react'
import { useUser } from './useUser'

export function useAdmin() {
  const { profile, loading: userLoading } = useUser()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userLoading) {
      setIsAdmin(profile?.role === 'admin')
      setLoading(false)
    }
  }, [profile, userLoading])

  return { isAdmin, loading }
}
