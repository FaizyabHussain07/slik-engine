import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import { LogOut, User, LayoutDashboard, Settings, Trash2, Users, UserPlus } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../components/ToastContainer';
import ThemeToggle from '../components/ThemeToggle';

const AdminDashboard = () => {
  const { user, userData } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [usersList, setUsersList] = useState([]);
  const [profileName, setProfileName] = useState('');
  const [updating, setUpdating] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'user' });

  useEffect(() => {
    if (userData) {
      setProfileName(userData.name || '');
    }
  }, [userData]);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) {
      console.error('Error fetching users:', error);
    } else {
      setUsersList(data);
    }
  };

  useEffect(() => {
    fetchUsers();

    // Set up real-time subscription
    const channel = supabase
      .channel('public:users')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, (payload) => {
        fetchUsers();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      window.location.href = '/';
    } catch (error) {
      showToast("Error during logout.", 'error');
    }
  };

  const handleDeleteUser = async (uid) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const { error } = await supabase.from('users').delete().eq('id', uid);
        if (error) throw error;
        showToast("User deleted successfully.");
      } catch (err) {
        showToast(`Error: ${err.message}`, 'error');
      }
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('users')
        .update({
          name: profileName,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;
      showToast("Profile updated successfully!");
    } catch (error) {
      showToast(`Update failed: ${error.message}`, 'error');
    } finally {
      setUpdating(false);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      // Create a secondary client to sign up without affecting current session
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';
      const secondaryClient = createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false }
      });

      const { data: authData, error: authError } = await secondaryClient.auth.signUp({
        email: newUser.email,
        password: newUser.password,
        options: {
          data: { name: newUser.name } // Trigger handles profile creation
        }
      });

      if (authError) throw authError;

      showToast(`User ${newUser.name} created successfully!`);
      setNewUser({ name: '', email: '', password: '', role: 'user' });
    } catch (err) {
      showToast(`Creation failed: ${err.message}`, 'error');
    } finally {
      setCreating(false);
    }
  };


  const createdAt = userData?.created_at ? new Date(userData.created_at).toLocaleDateString() : 'Recently';


  return (
    <div className="min-h-screen flex transition-colors duration-500">
      {/* Sidebar */}
      <aside className="w-64 glass-sidebar hidden md:flex flex-col fixed h-full z-20">
        <Link to="/" className="p-8 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/40">
               <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-main)]">Frost</h2>
          </div>
        </Link>
        
        <nav className="flex-1 px-4 space-y-1.5 mt-4">
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[var(--button-radius)] font-semibold transition-all duration-300 ${activeTab === 'overview' ? 'bg-[var(--color-accent)] text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--glass-bg)]'}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[var(--button-radius)] font-semibold transition-all duration-300 ${activeTab === 'create' ? 'bg-[var(--color-accent)] text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--glass-bg)]'}`}
            onClick={() => setActiveTab('create')}
          >
            <UserPlus size={18} /> Create User
          </button>
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[var(--button-radius)] font-semibold transition-all duration-300 ${activeTab === 'profile' ? 'bg-[var(--color-accent)] text-white shadow-lg' : 'text-[var(--text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--glass-bg)]'}`}
            onClick={() => setActiveTab('profile')}
          >
            <Settings size={18} /> Profile
          </button>
        </nav>
        
        <div className="p-6">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[var(--button-radius)] font-semibold text-[var(--text-secondary)] hover:text-red-500 hover:bg-red-500/10 transition-all duration-300"
            onClick={handleLogout}
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-10">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6">
          <div className="fade-in">
            <h1 className="text-3xl font-bold text-[var(--text-main)] tracking-tight">Admin Portal, <span className="text-[var(--color-accent)]">{userData?.name || 'Admin'}</span></h1>
            <p className="text-[var(--text-secondary)] font-medium mt-1">System management and user oversight</p>
          </div>
          
          <div className="flex items-center gap-4 fade-in">
            <ThemeToggle />
            <div className="flex items-center gap-3 pl-2 pr-5 py-2 glass-panel rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center border border-[var(--glass-border)]">
                <User size={20} />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-[var(--text-main)] leading-none">{userData?.name || 'Admin'}</p>
                <p className="text-[var(--text-muted)] text-xs mt-1 leading-none uppercase tracking-tighter">{userData?.role}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8 fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div className="md:col-span-2 lg:col-span-2 bento-card">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-muted)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                    <Users size={24} />
                  </div>
                  <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-wider">Total Users</p>
                  <p className="text-4xl font-bold text-[var(--text-main)] mt-2">{usersList.length}</p>
                </div>

                <div className="md:col-span-2 lg:col-span-2 bento-card">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                    <LayoutDashboard size={24} />
                  </div>
                  <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-wider">System Status</p>
                  <p className="text-3xl font-bold text-emerald-500 mt-2">Operational</p>
                </div>

                <div className="md:col-span-4 lg:col-span-2 bento-card">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                    <Settings size={24} />
                  </div>
                  <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-wider">Security</p>
                  <p className="text-3xl font-bold text-amber-500 mt-2">Verified</p>
                </div>

                {/* Main Table Card */}
                <div className="md:col-span-6 glass-card overflow-hidden">
                  <div className="p-8 border-b border-[var(--glass-border)] flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[var(--text-main)]">User Management</h3>
                    <div className="px-4 py-1.5 bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Real-time Sync
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="glass-table-header">
                          <th className="px-8 py-5">Name</th>
                          <th className="px-8 py-5">Email Address</th>
                          <th className="px-8 py-5">Role</th>
                          <th className="px-8 py-5 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10 dark:divide-white/5">
                        {usersList.map((u, idx) => (
                          <tr key={u.id} className="hover:bg-[var(--glass-bg)] transition-colors">
                            <td className="px-8 py-5">
                              <span className="font-bold text-[var(--text-main)]">{u.name || 'Anonymous'}</span>
                            </td>
                            <td className="px-8 py-5 text-[var(--text-secondary)] font-medium">{u.email}</td>
                            <td className="px-8 py-5">
                              <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${u.role === 'admin' ? 'bg-[var(--color-accent-muted)] text-[var(--color-accent)]' : 'bg-slate-500/10 text-slate-500'}`}>
                                {u.role}
                              </span>
                            </td>
                            <td className="px-8 py-5 text-right">
                              {u.role !== 'admin' ? (
                                <button onClick={() => handleDeleteUser(u.id)} className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-red-500 hover:text-white hover:bg-red-500 rounded-[var(--button-radius)] transition-all border border-red-500/20">
                                  <Trash2 size={12} /> Remove
                                </button>
                              ) : (
                                <span className="text-[var(--text-muted)] italic text-[10px] font-bold uppercase tracking-widest">Master Admin</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-3xl fade-in">
              <div className="glass-card p-8 md:p-12 hover:scale-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center">
                    <Settings size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-main)]">Admin Profile</h3>
                    <p className="text-[var(--text-secondary)] font-medium">System administrator settings</p>
                  </div>
                </div>

                <form onSubmit={handleProfileUpdate} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--text-secondary)] ml-1">Display Name</label>
                      <input 
                        className="input-field" 
                        type="text" 
                        value={profileName} 
                        onChange={e => setProfileName(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--text-muted)] ml-1">Email Address</label>
                      <input 
                        className="input-field opacity-60 cursor-not-allowed border-dashed" 
                        type="email" 
                        value={userData?.email || ''} 
                        readOnly 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--text-muted)] ml-1">Admin Since</label>
                      <div className="px-4 py-3 rounded-[var(--input-radius)] bg-[var(--glass-bg)] text-[var(--text-muted)] font-medium text-sm">
                        {createdAt}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--text-muted)] ml-1">Clearance Level</label>
                      <div className="px-4 py-3 rounded-[var(--input-radius)] bg-[var(--color-accent-muted)] text-[var(--color-accent)] font-bold text-sm uppercase tracking-widest">
                        Super Admin
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--glass-border)] flex justify-end">
                    <button type="submit" className="btn-primary min-w-[160px]" disabled={updating}>
                      {updating ? <><span className="loader-mini"></span> Updating...</> : 'Update Admin'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'create' && (
            <div className="max-w-3xl fade-in">
              <div className="glass-card p-8 md:p-12 hover:scale-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <UserPlus size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-main)]">Create New User</h3>
                    <p className="text-[var(--text-secondary)] font-medium">Add a new member to the platform</p>
                  </div>
                </div>

                <form onSubmit={handleCreateUser} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--text-secondary)] ml-1">Full Name</label>
                    <input 
                      className="input-field" 
                      type="text" 
                      value={newUser.name} 
                      onChange={e => setNewUser({...newUser, name: e.target.value})} 
                      required 
                      placeholder="e.g. Faizyab Hussain"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--text-secondary)] ml-1">Email Address</label>
                    <input 
                      className="input-field" 
                      type="email" 
                      value={newUser.email} 
                      onChange={e => setNewUser({...newUser, email: e.target.value})} 
                      required 
                      placeholder="faizyab@example.com"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--text-secondary)] ml-1">Password</label>
                      <input 
                        className="input-field" 
                        type="password" 
                        value={newUser.password} 
                        onChange={e => setNewUser({...newUser, password: e.target.value})} 
                        required 
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--text-secondary)] ml-1">Assign Role</label>
                      <select 
                        className="input-field" 
                        value={newUser.role} 
                        onChange={e => setNewUser({...newUser, role: e.target.value})}
                      >
                        <option value="user">Standard User</option>
                        <option value="admin">Administrator</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-[var(--glass-border)] flex justify-end">
                    <button type="submit" className="btn-primary min-w-[160px]" disabled={creating}>
                      {creating ? <><span className="loader-mini"></span> Creating...</> : 'Create User'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
