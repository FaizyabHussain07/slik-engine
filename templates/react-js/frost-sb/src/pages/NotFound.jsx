import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Ghost } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="transition-colors duration-300 min-h-screen flex flex-col">
      <Helmet>
        <title>404 - Page Not Found | Frost</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="relative mb-12">
          <div className="text-[12rem] md:text-[16rem] font-black text-[var(--glass-bg)] leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/10 animate-bounce border border-[var(--glass-border)]">
              <Ghost size={48} />
            </div>
          </div>
        </div>

        <div className="space-y-6 max-w-lg mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tighter">
            Lost in the <span className="text-[var(--color-accent)]">Void?</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
            The page you're looking for doesn't exist or has been moved to a different universe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/" className="btn-primary py-4 px-10 w-full sm:w-auto uppercase tracking-widest font-bold text-sm">
               Go Back Home <Home size={18} className="ml-2" />
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-glass py-4 px-10 w-full sm:w-auto uppercase tracking-widest font-bold text-sm"
            >
               <ArrowLeft size={18} className="mr-2" /> Previous Page
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
