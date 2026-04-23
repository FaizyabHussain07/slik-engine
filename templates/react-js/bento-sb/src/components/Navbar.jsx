import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../config/supabase';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userData } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b ${scrolled ? 'border-gray-200 dark:border-slate-700 py-3 shadow-sm' : 'border-gray-100 dark:border-slate-800 py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-brand-600 dark:text-brand-400 tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-600/20">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          BentoWeb
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${location.pathname === link.path ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="h-6 w-[1px] bg-gray-200 dark:bg-slate-800"></div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {user ? (
              <div className="flex items-center gap-4">
                <Link 
                  to={userData?.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'}
                  className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <LayoutDashboard size={14} /> Dashboard
                </Link>
                <div className="flex items-center gap-2 pl-2 pr-1 py-1 bg-gray-50 dark:bg-slate-800 rounded-full border border-gray-100 dark:border-slate-700">
                  <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-sm">
                    <User size={14} />
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <LogOut size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <Link to="/login" className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-white transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn-primary py-2.5 px-6 text-[10px] uppercase tracking-[0.2em] font-black">
                  Get Started <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-10' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg font-black uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 dark:text-slate-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full px-10 pt-4 flex flex-col gap-4">
            {user ? (
               <Link to={userData?.role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} className="btn-primary py-4 w-full text-sm uppercase tracking-widest font-black text-center">
                 Dashboard
               </Link>
            ) : (
              <>
                <Link to="/login" className="btn-ghost py-4 w-full text-sm uppercase tracking-widest font-black text-center border-2">
                  Login
                </Link>
                <Link to="/register" className="btn-primary py-4 w-full text-sm uppercase tracking-widest font-black text-center">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
