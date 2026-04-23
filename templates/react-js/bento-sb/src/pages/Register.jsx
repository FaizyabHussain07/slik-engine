import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import { User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { showToast } from '../components/ToastContainer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Sign up user with metadata (trigger handles profile creation)
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name: name }
        }
      });

      if (authError) throw authError;

      showToast("Account created successfully! Preparing your dashboard...");
      setTimeout(() => {
        window.location.href = '/user-dashboard';
      }, 1500);
    } catch (error) {
      showToast(`Registration failed: ${error.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="absolute top-8 left-8 z-10 fade-in">
        <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
          <ArrowLeft size={16} /> Home
        </Link>
      </div>
      
      <div className="bg-white dark:bg-slate-800 w-full max-w-md p-10 rounded-[2.5rem] shadow-xl shadow-brand-500/5 border border-gray-100 dark:border-slate-700 relative overflow-hidden fade-in">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100 dark:border-emerald-800">
            <User size={28} />
          </div>
          <h2 className="text-3xl font-black mb-3 text-slate-900 dark:text-white tracking-tighter">Create Account</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Join the BentoWeb community</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5 relative z-10">
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <User size={18} />
              </div>
              <input 
                className="form-control pl-12 h-14" 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
                placeholder="John Doe" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail size={18} />
              </div>
              <input 
                className="form-control pl-12 h-14" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                placeholder="name@example.com" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock size={18} />
              </div>
              <input 
                className="form-control pl-12 h-14" 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
                placeholder="••••••••" 
              />
            </div>
          </div>
          
          <button type="submit" className="btn-primary w-full h-14 text-sm font-black uppercase tracking-[0.2em] mt-8" disabled={loading}>
            {loading ? <><span className="loader-mini"></span> Creating Account...</> : 'Get Started'}
          </button>
        </form>

        <div className="mt-10 text-center text-sm font-medium text-slate-500 dark:text-slate-400 relative z-10">
          <p>Already have an account? <Link to="/login" className="text-brand-600 dark:text-brand-400 font-bold hover:underline underline-offset-4">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
