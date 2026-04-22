// slik — react-bento — src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useAdmin } from '../hooks/useAdmin'
import Spinner from './ui/Spinner'

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAdmin?: boolean
}

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { user, loading: userLoading } = useUser()
  const { isAdmin, loading: adminLoading } = useAdmin()

  if (userLoading || (requireAdmin && adminLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}
