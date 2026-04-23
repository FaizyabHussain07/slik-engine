import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import { LogOut, User, LayoutDashboard, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../components/ToastContainer';
import ThemeToggle from '../components/ThemeToggle';

const UserDashboard = () => {
  const { user, userData } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [profileName, setProfileName] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (userData) {
      setProfileName(userData.name || '');
    }
  }, [userData]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      window.location.href = '/';
    } catch (error) {
      showToast("Error during logout.", 'error');
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

  const createdAt = userData?.created_at ? new Date(userData.created_at).toLocaleDateString() : 'Recently';


  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] hidden md:flex flex-col fixed h-full z-20 shadow-2xl">
        <Link to="/" className="p-8 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/40">
               <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white">BentoWeb</h2>
          </div>
        </Link>
        
        <nav className="flex-1 px-4 space-y-1.5 mt-4">
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'overview' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'profile' ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => setActiveTab('profile')}
          >
            <Settings size={18} /> Profile
          </button>
        </nav>
        
        <div className="p-6">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-full font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300"
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
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Hello, <span className="text-brand-600 dark:text-brand-400">{userData?.name || 'User'}</span></h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">Here's what's happening today</p>
          </div>
          
          <div className="flex items-center gap-4 fade-in">
            <ThemeToggle />
            <div className="flex items-center gap-3 pl-2 pr-5 py-2 bg-white dark:bg-slate-800 rounded-full border border-gray-100 dark:border-slate-700 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center border border-brand-100 dark:border-brand-800">
                <User size={20} />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{userData?.name || 'User'}</p>
                <p className="text-slate-400 text-xs mt-1 leading-none">{userData?.email}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 fade-in">
              {/* Bento Cards */}
              <div className="md:col-span-2 lg:col-span-2 bg-emerald-50 dark:bg-emerald-500/10 bento-card border-none">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm mb-4">
                  <LayoutDashboard size={24} />
                </div>
                <p className="text-emerald-700/70 dark:text-emerald-400/70 text-sm font-bold uppercase tracking-wider">Account Status</p>
                <p className="text-3xl font-black text-emerald-900 dark:text-emerald-400 mt-2">Active</p>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-violet-50 dark:bg-violet-500/10 bento-card border-none">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm mb-4">
                  <User size={24} />
                </div>
                <p className="text-brand-700/70 dark:text-brand-400/70 text-sm font-bold uppercase tracking-wider">Profile Setup</p>
                <p className="text-3xl font-black text-brand-900 dark:text-brand-400 mt-2">Complete</p>
              </div>

              <div className="md:col-span-4 lg:col-span-2 bg-amber-50 dark:bg-amber-500/10 bento-card border-none">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm mb-4">
                  <Settings size={24} />
                </div>
                <p className="text-amber-700/70 dark:text-amber-400/70 text-sm font-bold uppercase tracking-wider">Notifications</p>
                <p className="text-3xl font-black text-amber-900 dark:text-amber-400 mt-2">0 New</p>
              </div>

              <div className="md:col-span-4 lg:col-span-4 bg-white dark:bg-slate-800 bento-card md:row-span-2">
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-brand-600 rounded-full"></span>
                  Quick Start Guide
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900/50">
                    <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-sm shrink-0">1</div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Customize Profile</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Head over to settings to update your display name and preferences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900/50">
                    <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Security Check</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ensure your account is secure with our Supabase-powered authentication.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-slate-50 dark:bg-slate-800/50 bento-card flex flex-col justify-center items-center text-center">
                <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Member Since</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white">{createdAt}</p>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-3xl fade-in">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                    <Settings size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Profile Settings</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Manage your public information</p>
                  </div>
                </div>

                <form onSubmit={handleProfileUpdate} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Display Name</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        value={profileName} 
                        onChange={e => setProfileName(e.target.value)} 
                        required 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 dark:text-slate-500 ml-1">Email Address</label>
                      <input 
                        className="form-control bg-gray-50 dark:bg-slate-900/50 text-slate-400 cursor-not-allowed border-dashed" 
                        type="email" 
                        value={userData?.email || ''} 
                        readOnly 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 dark:text-slate-500 ml-1">Account Created</label>
                      <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900/50 text-slate-400 font-medium text-sm">
                        {createdAt}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400 dark:text-slate-500 ml-1">Your Role</label>
                      <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-900/50 text-slate-400 font-bold text-sm uppercase tracking-widest">
                        {userData?.role || 'user'}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-slate-700 flex justify-end">
                    <button type="submit" className="btn-primary w-full md:w-auto min-w-[160px]" disabled={updating}>
                      {updating ? <><span className="loader-mini"></span> Updating...</> : 'Save Changes'}
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

export default UserDashboard;
