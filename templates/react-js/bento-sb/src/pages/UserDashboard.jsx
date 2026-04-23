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
    <div className="min-h-screen flex bg-background transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-surface hidden md:flex flex-col fixed h-full z-20 shadow-2xl border-r border-border-base">
        <Link to="/" className="p-8 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-brand-glow">
               <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-text-main">BentoWeb</h2>
          </div>
        </Link>
        
        <nav className="flex-1 px-4 space-y-1.5 mt-4">
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'overview' ? 'bg-brand text-background shadow-brand-glow' : 'text-text-secondary hover:text-text-main hover:bg-surface2'}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'profile' ? 'bg-brand text-background shadow-brand-glow' : 'text-text-secondary hover:text-text-main hover:bg-surface2'}`}
            onClick={() => setActiveTab('profile')}
          >
            <Settings size={18} /> Profile
          </button>
        </nav>
        
        <div className="p-6">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-full font-medium text-text-secondary hover:text-danger hover:bg-danger/10 transition-all duration-300"
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
            <h1 className="text-3xl font-extrabold text-text-main tracking-tight">Hello, <span className="text-brand">{userData?.name || 'User'}</span></h1>
            <p className="text-text-secondary font-medium mt-1">Here's what's happening today</p>
          </div>
          
          <div className="flex items-center gap-4 fade-in">
            <ThemeToggle />
            <div className="flex items-center gap-3 pl-2 pr-5 py-2 bg-surface rounded-full border border-border-base shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-muted text-brand flex items-center justify-center border border-border-base">
                <User size={20} />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-text-main leading-none">{userData?.name || 'User'}</p>
                <p className="text-text-muted text-xs mt-1 leading-none">{userData?.email}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 fade-in">
              {/* Bento Cards */}
              <div className="md:col-span-2 lg:col-span-2 bg-surface bento-card border border-border-base">
                <div className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-success shadow-sm mb-4">
                  <LayoutDashboard size={24} />
                </div>
                <p className="text-text-secondary text-sm font-bold uppercase tracking-wider">Account Status</p>
                <p className="text-3xl font-black text-success mt-2">Active</p>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-surface bento-card border border-border-base">
                <div className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-brand shadow-sm mb-4">
                  <User size={24} />
                </div>
                <p className="text-text-secondary text-sm font-bold uppercase tracking-wider">Profile Setup</p>
                <p className="text-3xl font-black text-brand mt-2">Complete</p>
              </div>

              <div className="md:col-span-4 lg:col-span-2 bg-surface bento-card border border-border-base">
                <div className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-warning shadow-sm mb-4">
                  <Settings size={24} />
                </div>
                <p className="text-text-secondary text-sm font-bold uppercase tracking-wider">Notifications</p>
                <p className="text-3xl font-black text-warning mt-2">0 New</p>
              </div>

              <div className="md:col-span-4 lg:col-span-4 bg-surface bento-card md:row-span-2">
                <h3 className="text-xl font-bold mb-6 text-text-main flex items-center gap-2">
                  <span className="w-2 h-6 bg-brand rounded-full"></span>
                  Quick Start Guide
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-2xl bg-surface2">
                    <div className="w-8 h-8 rounded-full bg-brand-muted text-brand flex items-center justify-center font-bold text-sm shrink-0">1</div>
                    <div>
                      <p className="font-bold text-text-main">Customize Profile</p>
                      <p className="text-sm text-text-secondary mt-1">Head over to settings to update your display name and preferences.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-surface2">
                    <div className="w-8 h-8 rounded-full bg-brand-muted text-brand flex items-center justify-center font-bold text-sm shrink-0">2</div>
                    <div>
                      <p className="font-bold text-text-main">Security Check</p>
                      <p className="text-sm text-text-secondary mt-1">Ensure your account is secure with our Supabase-powered authentication.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-surface bento-card flex flex-col justify-center items-center text-center">
                <p className="text-text-muted text-sm font-bold uppercase tracking-widest mb-2">Member Since</p>
                <p className="text-2xl font-black text-text-main">{createdAt}</p>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="max-w-3xl fade-in">
              <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-sm border border-border-base">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-muted text-brand flex items-center justify-center">
                    <Settings size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-text-main">Profile Settings</h3>
                    <p className="text-text-secondary font-medium">Manage your public information</p>
                  </div>
                </div>

                <form onSubmit={handleProfileUpdate} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-main ml-1">Display Name</label>
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
                      <label className="text-sm font-bold text-text-muted ml-1">Email Address</label>
                      <input 
                        className="form-control bg-surface2 text-text-muted cursor-not-allowed border-dashed" 
                        type="email" 
                        value={userData?.email || ''} 
                        readOnly 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-muted ml-1">Account Created</label>
                      <div className="px-4 py-3 rounded-xl bg-surface2 text-text-muted font-medium text-sm">
                        {createdAt}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-muted ml-1">Your Role</label>
                      <div className="px-4 py-3 rounded-xl bg-surface2 text-text-muted font-bold text-sm uppercase tracking-widest">
                        {userData?.role || 'user'}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-base flex justify-end">
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
