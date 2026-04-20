// nexus — components/admin/AdminPanel.tsx

'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { formatDate } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface User {
  id: string;
  full_name: string | null;
  email: string;
  role: string;
  created_at: string;
}

interface AdminPanelProps {
  users: User[];
}

export function AdminPanel({ users: initialUsers }: AdminPanelProps) {
  const supabase = createClient();
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState(false);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  async function toggleRole(userId: string, currentRole: string) {
    setLoading(true);
    const newRole = currentRole === 'admin' ? 'user' : 'admin';

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;

      setUsers(users.map((u) => (u.id === userId ? { ...u, role: newRole } : u)));
    } catch (err) {
      console.error('Failed to update role:', err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(userId: string) {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (error) throw error;

      setUsers(users.filter((u) => u.id !== userId));
    } catch (err) {
      console.error('Failed to delete user:', err);
    } finally {
      setLoading(false);
    }
  }

  async function createUser() {
    if (!newUserEmail || !newUserName || !newUserPassword) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: newUserEmail,
        password: newUserPassword,
        options: {
          data: {
            full_name: newUserName,
          },
        },
      });

      if (authError) throw authError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            full_name: newUserName,
            role: 'user',
          });

        if (profileError) throw profileError;

        setUsers([
          ...users,
          {
            id: authData.user.id,
            full_name: newUserName,
            email: newUserEmail,
            role: 'user',
            created_at: new Date().toISOString(),
          },
        ]);

        setNewUserEmail('');
        setNewUserName('');
        setNewUserPassword('');
        setShowCreateUser(false);
      }
    } catch (err) {
      console.error('Failed to create user:', err);
      alert('Failed to create user. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
          <div className="text-sm text-[var(--muted)] mb-2">Total Users</div>
          <div className="font-serif text-3xl text-[var(--text)]">{users.length}</div>
        </div>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
          <div className="text-sm text-[var(--muted)] mb-2">Admins</div>
          <div className="font-serif text-3xl text-[var(--accent)]">
            {users.filter((u) => u.role === 'admin').length}
          </div>
        </div>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
          <div className="text-sm text-[var(--muted)] mb-2">Regular Users</div>
          <div className="font-serif text-3xl text-[var(--teal)]">
            {users.filter((u) => u.role === 'user').length}
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl text-[var(--text)]">All Users</h2>
          <button
            onClick={() => setShowCreateUser(!showCreateUser)}
            disabled={loading}
            className="bg-[var(--accent)] text-black px-4 py-2 rounded-[10px] text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {showCreateUser ? 'Cancel' : 'Create User'}
          </button>
        </div>

        {showCreateUser && (
          <div className="mb-6 p-4 bg-[var(--surface2)] rounded-[10px] space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
              className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition"
            />
            <button
              onClick={createUser}
              disabled={loading}
              className="bg-[var(--accent)] text-black px-4 py-2 rounded-[10px] text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              Create User
            </button>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left text-xs font-mono text-[var(--muted)] uppercase tracking-wider pb-3">
                  User
                </th>
                <th className="text-left text-xs font-mono text-[var(--muted)] uppercase tracking-wider pb-3">
                  Role
                </th>
                <th className="text-left text-xs font-mono text-[var(--muted)] uppercase tracking-wider pb-3">
                  Joined
                </th>
                <th className="text-right text-xs font-mono text-[var(--muted)] uppercase tracking-wider pb-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-[var(--border)] last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--surface2)] flex items-center justify-center text-xs font-medium text-[var(--text)]">
                        {user.full_name?.split(' ').map((n) => n[0]).join('') || user.email[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="text-sm text-[var(--text)]">{user.full_name || 'Unknown'}</div>
                        <div className="text-xs text-[var(--muted)]">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => toggleRole(user.id, user.role)}
                      disabled={loading}
                      className={`text-xs px-3 py-1 rounded-full ${
                        user.role === 'admin'
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                          : 'bg-[var(--surface2)] text-[var(--muted)]'
                      } hover:opacity-80 transition disabled:opacity-50`}
                    >
                      {user.role}
                    </button>
                  </td>
                  <td className="py-4">
                    <div className="text-sm text-[var(--muted)]">{formatDate(user.created_at)}</div>
                  </td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => deleteUser(user.id)}
                      disabled={loading}
                      className="text-xs text-[var(--coral)] hover:underline disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
