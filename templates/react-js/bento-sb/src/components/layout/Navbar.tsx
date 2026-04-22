// slik — react-bento — src/components/layout/Navbar.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'
import Button from '../ui/Button'
import { useUser } from '../../hooks/useUser'
import { supabase } from '../../lib/supabase'
import { getInitials } from '../../lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, profile } = useUser()

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl text-text">SmartDash</span>
            <span className="w-2 h-2 bg-accent rounded-full"></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="#features" className="text-muted hover:text-text transition-colors">
              Features
            </Link>
            <Link to="#pricing" className="text-muted hover:text-text transition-colors">
              Pricing
            </Link>
            <Link to="#about" className="text-muted hover:text-text transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-surface2 border border-border flex items-center justify-center text-sm font-mono text-text">
                    {getInitials(profile?.full_name || profile?.email || 'U')}
                  </div>
                  <span className="text-sm text-text">{profile?.full_name?.split(' ')[0] || 'User'}</span>
                </Link>
                <button onClick={handleLogout} className="text-muted hover:text-text transition-colors" title="Logout">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary">Get started</Button>
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link
              to="#features"
              className="block text-muted hover:text-text transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="#pricing"
              className="block text-muted hover:text-text transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="#about"
              className="block text-muted hover:text-text transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {user ? (
              <div className="pt-4 space-y-2 border-t border-border">
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-text">
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="flex items-center gap-2 text-muted hover:text-text w-full">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full">Sign in</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full">Get started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
