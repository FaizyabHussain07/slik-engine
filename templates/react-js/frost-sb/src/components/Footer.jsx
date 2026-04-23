import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Shield, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[var(--glass-border)] pt-20 pb-10 transition-colors duration-500">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold text-[var(--text-main)] tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-accent)] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              Frost
            </Link>
            <p className="text-[var(--text-secondary)] font-medium leading-relaxed">
              Premium React templates built with the modern Frost design language. Beautiful, functional, and fast.
            </p>
            <div className="flex gap-4">
              {[Zap, Globe, Shield, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-[var(--glass-bg)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--color-accent)] dark:hover:text-white transition-all border border-[var(--glass-border)] shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[var(--text-main)] uppercase tracking-widest text-xs mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[var(--text-secondary)] font-bold text-sm hover:text-[var(--color-accent)] dark:hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[var(--text-main)] uppercase tracking-widest text-xs mb-8">Resources</h4>
            <ul className="space-y-4">
              {['Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[var(--text-secondary)] font-bold text-sm hover:text-[var(--color-accent)] dark:hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[var(--text-main)] uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-6">Subscribe to get the latest updates and templates.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full h-12 bg-[var(--glass-bg)] rounded-full border border-[var(--glass-border)] px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-[var(--text-main)] text-sm" />
              <button className="absolute right-1 top-1 w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-accent-hover)] transition-all shadow-md shadow-blue-600/20">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-50 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {currentYear} Frost Inc. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
            <Link to="/privacy-policy" className="hover:text-[var(--color-accent)] transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
