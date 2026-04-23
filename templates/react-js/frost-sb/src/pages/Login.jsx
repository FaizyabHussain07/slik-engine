import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { showToast } from '../components/ToastContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
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
    <div className="min-h-screen flex flex-col justify-center items-center p-4 transition-colors duration-500">
      <div className="absolute top-8 left-8 z-10 fade-in">
        <Link to="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--color-accent)] dark:hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
          <ArrowLeft size={16} /> Home
        </Link>
      </div>
      
      <div className="glass-card w-full max-w-md p-10 hover:scale-100 relative overflow-hidden fade-in">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="w-16 h-16 bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-3xl flex items-center justify-center mx-auto mb-6 border border-[var(--glass-border)]">
            <Lock size={28} />
          </div>
          <h2 className="text-3xl font-bold mb-3 text-[var(--text-main)] tracking-tighter">Welcome Back</h2>
          <p className="text-[var(--text-secondary)] font-medium">Log in to your Frost account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-muted)]">
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
            <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-muted)]">
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
          
          <button type="submit" className="btn-primary w-full h-14 text-[10px] font-bold uppercase tracking-[0.2em] mt-8" disabled={loading}>
            {loading ? <><span className="loader-mini"></span> Verifying...</> : 'Login'}
          </button>
        </form>

        <div className="mt-10 text-center text-sm font-medium text-[var(--text-secondary)] relative z-10">
          <p>New here? <Link to="/register" className="text-[var(--color-accent)] font-bold hover:underline underline-offset-4">Create account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
