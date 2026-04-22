// slik — react-bento — src/pages/AdminDashboard.tsx
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Profile } from '../types/database'
import Sidebar from '../components/dashboard/Sidebar'
import { getInitials, formatDate } from '../lib/utils'
import { Users, TrendingUp, Activity, Shield, MoreVertical } from 'lucide-react'
import Spinner from '../components/ui/Spinner'

export default function AdminDashboard() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalUsers: 0,
    admins: 0,
    activeUsers: 0,
    newUsers: 0,
  })

  useEffect(() => {
    fetchProfiles()
  }, [])

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setProfiles(data || [])
      setStats({
        totalUsers: data?.length || 0,
        admins: data?.filter(p => p.role === 'admin').length || 0,
        activeUsers: data?.length || 0,
        newUsers: data?.filter(p => {
          const created = new Date(p.created_at)
          const weekAgo = new Date()
          weekAgo.setDate(weekAgo.getDate() - 7)
          return created > weekAgo
        }).length || 0,
      })
    } catch (err) {
      console.error('Failed to fetch profiles:', err)
    } finally {
      setLoading(false)
    }
  }

  const toggleRole = async (profile: Profile) => {
    try {
      const newRole = profile.role === 'admin' ? 'user' : 'admin'
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', profile.id)

      if (error) throw error
      fetchProfiles()
    } catch (err) {
      console.error('Failed to update role:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg flex">
      <Sidebar isAdmin={true} />
      
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl text-text mb-2">Admin Dashboard</h1>
            <p className="text-muted">Manage users and system settings.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Users', value: stats.totalUsers, icon: Users, color: 'text-purple' },
              { label: 'Admins', value: stats.admins, icon: Shield, color: 'text-accent' },
              { label: 'Active Users', value: stats.activeUsers, icon: Activity, color: 'text-teal' },
              { label: 'New (7d)', value: stats.newUsers, icon: TrendingUp, color: 'text-coral' },
            ].map((stat) => (
              <div key={stat.label} className="bento-cell p-6">
                <div className={`p-3 rounded-lg bg-surface2 w-fit mb-4 ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <p className="text-3xl font-serif text-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Users Table */}
          <div className="bento-cell p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-text">All Users</h2>
              <span className="text-sm text-muted">{profiles.length} total</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-mono text-muted">User</th>
                    <th className="text-left py-3 px-4 text-sm font-mono text-muted">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-mono text-muted">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-mono text-muted">Joined</th>
                    <th className="text-right py-3 px-4 text-sm font-mono text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {profiles.map((profile) => (
                    <tr key={profile.id} className="border-b border-border hover:bg-surface2">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface2 border border-border flex items-center justify-center text-sm font-mono text-text">
                            {getInitials(profile.full_name || profile.email)}
                          </div>
                          <span className="text-text">{profile.full_name || 'Unknown'}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted text-sm">{profile.email}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                          profile.role === 'admin' ? 'bg-accent text-bg' : 'bg-surface2 text-muted'
                        }`}>
                          {profile.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-muted text-sm">{formatDate(profile.created_at)}</td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => toggleRole(profile)}
                          className="text-muted hover:text-accent transition-colors"
                          title="Toggle role"
                        >
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
