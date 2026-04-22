// slik — react-bento — src/components/dashboard/Sidebar.tsx
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Users, Settings, LogOut, Home } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface SidebarProps {
  isAdmin: boolean
}

export default function Sidebar({ isAdmin }: SidebarProps) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    ...(isAdmin ? [{ path: '/admin', icon: Users, label: 'Admin Panel' }] : []),
    { path: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-surface border-r border-border p-6 hidden lg:block">
      <div className="flex items-center gap-2 mb-8">
        <span className="font-serif text-2xl text-text">SmartDash</span>
        <span className="w-2 h-2 bg-accent rounded-full"></span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-accent text-bg'
                  : 'text-muted hover:text-text hover:bg-surface2'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-muted hover:text-coral hover:bg-surface2 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
