import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Shield, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-border-base pt-20 pb-10">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black text-brand tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-brand-glow">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              BentoWeb
            </Link>
            <p className="text-text-secondary font-medium leading-relaxed">
              Premium React templates built with the modern Bento design language. Beautiful, functional, and fast.
            </p>
            <div className="flex gap-4">
              {[Zap, Globe, Shield, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center text-text-muted hover:text-brand transition-all border border-transparent hover:border-brand/20 shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-text-main uppercase tracking-widest text-xs mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-text-secondary font-bold text-sm hover:text-brand transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-text-main uppercase tracking-widest text-xs mb-8">Resources</h4>
            <ul className="space-y-4">
              {['Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-text-secondary font-bold text-sm hover:text-brand transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-text-main uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-text-secondary text-sm mb-6">Subscribe to get the latest updates and templates.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="input-field h-12 pr-12 text-sm" />
              <button className="absolute right-1 top-1 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white hover:bg-brand-hover transition-all shadow-brand-glow">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest">
            © {currentYear} BentoWeb Inc. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-text-muted">
            <Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-brand transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
