// slik — react-bento — src/pages/SettingsPage.tsx
import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { supabase } from '../lib/supabase'
import { getInitials } from '../lib/utils'
import Sidebar from '../components/dashboard/Sidebar'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { User, Lock, Bell } from 'lucide-react'

export default function SettingsPage() {
  const { profile, user } = useUser()
  const [fullName, setFullName] = useState(profile?.full_name || '')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName })
        .eq('id', user?.id)

      if (error) throw error
      setMessage('Profile updated successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      })

      if (error) throw error
      setMessage('Password updated successfully')
      setNewPassword('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg flex">
      <Sidebar isAdmin={profile?.role === 'admin'} />
      
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl text-text mb-2">Settings</h1>
            <p className="text-muted">Manage your account settings and preferences.</p>
          </div>

          {message && (
            <div className="mb-6 p-4 rounded-lg bg-teal/10 border border-teal/20 text-teal text-sm">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-coral/10 border border-coral/20 text-coral text-sm">
              {error}
            </div>
          )}

          {/* Profile Section */}
          <div className="bento-cell p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-accent" size={24} />
              <h2 className="font-serif text-xl text-text">Profile Information</h2>
            </div>
            
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-surface2 border border-border flex items-center justify-center text-2xl font-mono text-text">
                {getInitials(profile?.full_name || profile?.email || 'U')}
              </div>
              <div>
                <p className="text-text font-medium">{profile?.full_name || 'Unknown'}</p>
                <p className="text-muted text-sm">{profile?.email}</p>
                <p className="text-xs text-muted mt-1">Role: {profile?.role}</p>
              </div>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <Input
                label="Full name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
              />
              <Button type="submit" loading={loading}>
                Update Profile
              </Button>
            </form>
          </div>

          {/* Password Section */}
          <div className="bento-cell p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-accent" size={24} />
              <h2 className="font-serif text-xl text-text">Change Password</h2>
            </div>
            
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <Input
                label="New password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                minLength={6}
              />
              <Button type="submit" loading={loading} variant="ghost">
                Update Password
              </Button>
            </form>
          </div>

          {/* Notifications Section */}
          <div className="bento-cell p-6">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-accent" size={24} />
              <h2 className="font-serif text-xl text-text">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Email notifications', desc: 'Receive email updates about your account' },
                { label: 'Project updates', desc: 'Get notified when projects are updated' },
                { label: 'Team activity', desc: 'Receive updates about team member activity' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-4 rounded-lg bg-surface2 border border-border">
                  <div>
                    <p className="text-text font-medium">{item.label}</p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-surface peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
