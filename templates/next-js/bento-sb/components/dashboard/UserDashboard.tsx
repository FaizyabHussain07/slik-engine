// nexus — components/dashboard/UserDashboard.tsx

'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useUser } from '@/lib/hooks/useUser';
import Button from '@/components/ui/Button';

export function UserDashboard() {
  const { profile, loading } = useUser();
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review Q1 roadmap', status: 'done', priority: 'high' },
    { id: 2, title: 'Update landing page copy', status: 'in-progress', priority: 'medium' },
    { id: 3, title: 'Schedule team sync', status: 'todo', priority: 'low' },
    { id: 4, title: 'Fix navigation bug', status: 'todo', priority: 'high' },
  ]);

  const stats = [
    { label: 'Active Projects', value: '12', change: '+2', positive: true },
    { label: 'Tasks This Week', value: '23', change: '+5', positive: true },
    { label: 'Team Members', value: '8', change: '+1', positive: true },
    { label: 'On-time Rate', value: '94%', change: '+3%', positive: true },
  ];

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      status: 'todo',
      priority: 'medium',
    };
    setTasks([...tasks, task]);
    setNewTask('');
  }

  function toggleTaskStatus(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const statusMap = { todo: 'in-progress', 'in-progress': 'done', done: 'todo' };
          return { ...task, status: statusMap[task.status as keyof typeof statusMap] as any };
        }
        return task;
      })
    );
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
          >
            <div className="text-sm text-[var(--muted)] mb-2">{stat.label}</div>
            <div className="font-serif text-3xl text-[var(--text)] mb-1">{stat.value}</div>
            <div
              className={`text-xs ${
                stat.positive ? 'text-[var(--teal)]' : 'text-[var(--coral)]'
              }`}
            >
              {stat.change} from last week
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Tasks Column */}
        <div className="lg:col-span-2 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
          <h2 className="font-serif text-xl text-[var(--text)] mb-6">Your Tasks</h2>

          {/* Add Task Form */}
          <form onSubmit={addTask} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition"
              />
              <Button type="submit" variant="primary" size="sm">
                Add
              </Button>
            </div>
          </form>

          {/* Task List */}
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] p-4 group hover:border-[var(--border2)] transition"
              >
                <button
                  onClick={() => toggleTaskStatus(task.id)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                    task.status === 'done'
                      ? 'bg-[var(--teal)] border-[var(--teal)]'
                      : 'border-[var(--border)] hover:border-[var(--accent)]'
                  }`}
                >
                  {task.status === 'done' && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
                <div className="flex-1">
                  <div
                    className={`text-sm ${
                      task.status === 'done'
                        ? 'text-[var(--muted)] line-through'
                        : 'text-[var(--text)]'
                    }`}
                  >
                    {task.title}
                  </div>
                  <div className="flex gap-2 mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        task.priority === 'high'
                          ? 'bg-[var(--coral)]/10 text-[var(--coral)]'
                          : task.priority === 'medium'
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                          : 'bg-[var(--teal)]/10 text-[var(--teal)]'
                      }`}
                    >
                      {task.priority}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        task.status === 'done'
                          ? 'bg-[var(--teal)]/10 text-[var(--teal)]'
                          : task.status === 'in-progress'
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                          : 'bg-[var(--muted)]/10 text-[var(--muted)]'
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 text-[var(--muted)] hover:text-[var(--coral)] transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
          <h2 className="font-serif text-xl text-[var(--text)] mb-6">Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Task completed', time: '2m ago', icon: 'check' },
              { action: 'Comment on "Q1 roadmap"', time: '15m ago', icon: 'comment' },
              { action: 'Project "Website Redesign" created', time: '1h ago', icon: 'folder' },
              { action: 'Team member joined', time: '3h ago', icon: 'user' },
              { action: 'Meeting scheduled', time: '5h ago', icon: 'calendar' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--accent)]">
                  {activity.icon === 'check' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {activity.icon === 'comment' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  )}
                  {activity.icon === 'folder' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  )}
                  {activity.icon === 'user' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                  {activity.icon === 'calendar' && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[var(--text)]">{activity.action}</div>
                  <div className="text-xs text-[var(--muted)]">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
        <h2 className="font-serif text-xl text-[var(--text)] mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="ghost" className="justify-start" href="/dashboard/projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            New Project
          </Button>
          <Button variant="ghost" className="justify-start" href="/dashboard/team">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Invite Team
          </Button>
          <Button variant="ghost" className="justify-start" href="/dashboard/reports">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <line x1="12" x2="12" y1="20" y2="10" />
              <line x1="18" x2="18" y1="20" y2="4" />
              <line x1="6" x2="6" y1="20" y2="16" />
            </svg>
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
}
