import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Shield, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black text-brand-600 dark:text-brand-400 tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-600/20">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              BentoWeb
            </Link>
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Premium React templates built with the modern Bento design language. Beautiful, functional, and fast.
            </p>
            <div className="flex gap-4">
              {[Zap, Globe, Shield, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-white transition-all border border-transparent hover:border-brand-500/20 shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-8">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Pricing', 'Testimonials'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 font-bold text-sm hover:text-brand-600 dark:hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-8">Resources</h4>
            <ul className="space-y-4">
              {['Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-500 dark:text-slate-400 font-bold text-sm hover:text-brand-600 dark:hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Subscribe to get the latest updates and templates.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full h-12 bg-slate-50 dark:bg-slate-800 rounded-full border border-gray-100 dark:border-slate-700 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:text-white text-sm" />
              <button className="absolute right-1 top-1 w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white hover:bg-brand-700 transition-all shadow-md shadow-brand-600/20">
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-50 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {currentYear} BentoWeb Inc. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link to="/privacy-policy" className="hover:text-brand-600 transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-brand-600 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
