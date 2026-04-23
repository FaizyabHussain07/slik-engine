import React from 'react';
import { ShieldCheck, Users, BarChart3, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 fade-in bg-gradient-to-br from-brand-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            SmartDash v2.0 is live
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
            Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Workflow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Manage users, track analytics, and boost productivity with our secure role-based dashboard system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="btn-primary text-lg px-8 py-4">
              Get Started Now <ChevronRight size={20} />
            </a>
            <a href="#features" className="btn-ghost text-lg px-8 py-4">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-950" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Built from the ground up to provide a seamless and secure experience for both administrators and regular users.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure Authentication</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Powered by Supabase, ensuring your data is always protected with industry-standard security and session management.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Role-Based Access</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Manage permissions with ease. Dedicated, isolated dashboards and functions for administrators versus regular users.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Monitor your system's performance and user base in real-time with automatic live Firestore document syncing.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 mb-4">&copy; 2026 SmartDash Inc. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
