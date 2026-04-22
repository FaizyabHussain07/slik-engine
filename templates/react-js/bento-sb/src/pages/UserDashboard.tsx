// slik — react-bento — src/pages/UserDashboard.tsx
import { useUser } from '../hooks/useUser'
import { getGreeting, formatDate } from '../lib/utils'
import Sidebar from '../components/dashboard/Sidebar'
import { Activity, TrendingUp, Users, Clock, Plus, ArrowRight } from 'lucide-react'

export default function UserDashboard() {
  const { profile, loading } = useUser()
  const stats = {
    projects: 12,
    tasks: 48,
    hours: 156,
    team: 8,
  }

  const recentProjects = [
    { name: 'Website Redesign', status: 'In Progress', due: '2024-02-15' },
    { name: 'Mobile App', status: 'Completed', due: '2024-01-20' },
    { name: 'Marketing Campaign', status: 'In Progress', due: '2024-02-28' },
  ]

  const activities = [
    { action: 'Completed task', item: 'Design review', time: '2 hours ago' },
    { action: 'Updated', item: 'Project timeline', time: '4 hours ago' },
    { action: 'Commented on', item: 'Dashboard mockup', time: '6 hours ago' },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg flex">
      <Sidebar isAdmin={false} />
      
      <main className="flex-1 lg:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl text-text mb-2">
              {getGreeting()}, {profile?.full_name?.split(' ')[0] || 'User'}
            </h1>
            <p className="text-muted">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Projects', value: stats.projects, icon: Activity, color: 'text-purple' },
              { label: 'Tasks', value: stats.tasks, icon: TrendingUp, color: 'text-teal' },
              { label: 'Hours', value: stats.hours, icon: Clock, color: 'text-accent' },
              { label: 'Team', value: stats.team, icon: Users, color: 'text-coral' },
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Projects */}
            <div className="lg:col-span-2 bento-cell p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-text">Recent Projects</h2>
                <button className="text-accent text-sm hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.name} className="flex items-center justify-between p-4 rounded-lg bg-surface2 border border-border">
                    <div>
                      <p className="font-medium text-text">{project.name}</p>
                      <p className="text-sm text-muted">Due: {formatDate(project.due)}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                      project.status === 'Completed' ? 'bg-teal/20 text-teal' : 'bg-purple/20 text-purple'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 p-3 rounded-lg border border-border text-muted hover:text-text hover:border-accent transition-colors flex items-center justify-center gap-2">
                <Plus size={16} />
                New Project
              </button>
            </div>

            {/* Activity Feed */}
            <div className="bento-cell p-6">
              <h2 className="font-serif text-xl text-text mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {activities.map((activity, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <div>
                      <p className="text-sm text-text">
                        <span className="text-muted">{activity.action}</span> {activity.item}
                      </p>
                      <p className="text-xs text-muted">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 bento-cell p-6">
            <h2 className="font-serif text-xl text-text mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Create Project', icon: Plus },
                { label: 'View Reports', icon: TrendingUp },
                { label: 'Team Settings', icon: Users },
              ].map((action) => (
                <button key={action.label} className="flex items-center gap-3 p-4 rounded-lg bg-surface2 border border-border hover:border-accent transition-colors group">
                  <action.icon size={20} className="text-muted group-hover:text-accent" />
                  <span className="text-text">{action.label}</span>
                  <ArrowRight size={16} className="ml-auto text-muted group-hover:text-accent" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
