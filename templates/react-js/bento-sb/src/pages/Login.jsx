import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../config/supabase';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { showToast } from '../components/ToastContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      showToast('Supabase is not configured. Please add your Supabase URL and Anon Key in the .env file to enable authentication.', 'error');
      return;
    }
    
    if (!supabase) {
      showToast('Authentication service is unavailable. Please check your configuration.', 'error');
      return;
    }
    
    setLoading(true);
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      const { data: { user } } = await supabase.auth.getUser();
      const { data: profile } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

      showToast(`Welcome back!`);
      
      if (profile?.role === 'admin') {
        window.location.href = '/admin-dashboard';
      } else {
        window.location.href = '/user-dashboard';
      }
    } catch (error) {
      showToast(`Login failed: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-background transition-colors duration-300">
      <div className="absolute top-8 left-8 z-10 fade-in">
        <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-brand transition-all font-bold text-sm uppercase tracking-widest">
          <ArrowLeft size={16} /> Home
        </Link>
      </div>
      
      <div className="bg-surface w-full max-w-md p-10 rounded-card shadow-premium border border-border-base relative overflow-hidden fade-in">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-success/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="w-16 h-16 bg-brand-muted/20 text-brand rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand/10">
            <Lock size={28} />
          </div>
          <h2 className="text-3xl font-black mb-3 text-text-main tracking-tighter">Welcome Back</h2>
          <p className="text-text-secondary font-medium">Log in to your BentoWeb account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-text-muted ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                <Mail size={18} />
              </div>
              <input 
                className="input-field pl-12 h-14" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                placeholder="name@example.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-text-muted ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-muted">
                <Lock size={18} />
              </div>
              <input 
                className="input-field pl-12 h-14" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
                placeholder="••••••••" 
              />
            </div>
          </div>
          
          <button type="submit" className="btn-primary w-full h-14 text-sm font-black uppercase tracking-[0.2em] mt-8" disabled={loading}>
            {loading ? <><span className="loader-mini"></span> Verifying...</> : 'Login'}
          </button>
        </form>

        <div className="mt-10 text-center text-sm font-medium text-text-secondary relative z-10">
          <p>New here? <Link to="/register" className="text-brand font-bold hover:underline underline-offset-4">Create account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
