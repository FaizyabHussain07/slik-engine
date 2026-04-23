import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, BarChart3, Globe, Smartphone } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
  const features = [
    { title: 'Glassmorphism Design', subtitle: 'Beautiful frost glass effects with blur and transparency for a modern look.', icon: Zap },
    { title: 'Role-Based Auth', subtitle: 'Ready-to-use Supabase authentication with Admin and User roles.', icon: Shield },
    { title: 'Dark Mode Ready', subtitle: 'Fully integrated dark and light mode with persistent settings.', icon: Globe },
    { title: 'Advanced Dashboards', subtitle: 'Complete Admin and User panels with stats and profile management.', icon: BarChart3 },
    { title: 'SEO Optimized', subtitle: 'Perfect lighthouse scores with meta tags, sitemaps, and JSON-LD.', icon: Globe },
    { title: 'Mobile Responsive', subtitle: 'Crafted to look stunning on phones, tablets, and desktops.', icon: Smartphone },
  ];

  const plans = [
    { plan: 'Starter', price: '0', description: 'Perfect for small personal projects.', features: ['Up to 3 projects', 'Basic analytics', 'Community support', 'Public templates'] },
    { plan: 'Pro', price: '49', description: 'Everything you need to grow.', highlighted: true, features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Private templates', 'Custom domains'] },
    { plan: 'Enterprise', price: '199', description: 'Scalable solutions for teams.', features: ['Custom integrations', 'Dedicated manager', 'SLA guarantee', 'White-labeling', 'SSO/SAML auth'] },
  ];

  return (
    <div className="transition-colors duration-500">
      <Helmet>
        <title>Frost | Premium React Templates</title>
        <meta name="description" content="Premium React templates built with the modern Frost design language. Fast, responsive, and SEO-optimized." />
        <meta property="og:title" content="Frost | Premium React Templates" />
        <meta property="og:description" content="Premium React templates built with the modern Frost design language." />
        <link rel="canonical" href="https://frost.example.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Frost",
            "url": "https://frost.example.com",
            "logo": "https://frost.example.com/logo.png",
            "description": "Premium React templates built with the modern Frost design language."
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="layout-container relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass-panel rounded-full text-[var(--color-accent)] font-bold text-[10px] uppercase tracking-[0.2em] fade-in mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              Now in Public Beta
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-main)] tracking-tighter leading-[0.9] fade-in">
              Design the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-indigo-500">Unimaginable.</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed fade-in">
              Premium React components built with the modern Frost design language. 
              Beautiful, functional, and fast by default.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 fade-in">
              <Link to="/register" className="btn-primary px-10 py-5 text-sm uppercase tracking-widest font-bold w-full sm:w-auto">
                Start Building Free
              </Link>
              <Link to="/about" className="btn-glass px-10 py-5 text-sm uppercase tracking-widest font-bold w-full sm:w-auto">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="layout-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Features</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tight">Everything you need, <br className="hidden md:block" /> and more.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-8 hover:scale-[1.01] transition-transform duration-300">
                <div className="w-14 h-14 bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-2xl flex items-center justify-center mb-6 border border-[var(--glass-border)]">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] mb-3 tracking-tight">{f.title}</h3>
                <p className="text-[var(--text-secondary)] font-medium leading-relaxed">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Tech Stack Section */}
      <section className="py-24 px-6 border-y border-[var(--glass-border)] bg-[var(--glass-bg)]">
        <div className="layout-container">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">The Engine</h2>
             <h3 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">Built with the Best Tech.</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React 18', desc: 'Modern UI logic' },
              { name: 'Supabase', desc: 'Auth & Database' },
              { name: 'Tailwind CSS', desc: 'Utility styling' },
              { name: 'React Router', desc: 'Client-side routing' },
              { name: 'Lucide Icons', desc: 'Pixel-perfect icons' },
              { name: 'Vite', desc: 'Fastest build tool' },
              { name: 'PostgreSQL', desc: 'Reliable data' },
              { name: 'Standard SEO', desc: 'Search ready' },
            ].map((tech, i) => (
              <div key={i} className="p-6 bento-card text-center space-y-1">
                <p className="font-bold text-[var(--text-main)] text-lg tracking-tight">{tech.name}</p>
                <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative">
        <div className="layout-container">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Key Features</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] tracking-tight">Everything you need.</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((p, i) => (
              <PricingCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[var(--glass-bg)]">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              content="The best React template I've ever used. The attention to detail in the Frost design is absolutely world-class." 
              author="Sarah Jenkins" 
              role="Lead Developer at Meta" 
            />
            <TestimonialCard 
              content="We migrated our entire dashboard to Frost in just a weekend. Our users love the new clean and modern interface." 
              author="Alex Rivera" 
              role="Founder at CloudScale" 
            />
            <TestimonialCard 
              content="Performance is key for us, and Frost delivers. Lighthouse scores of 100 across the board. Highly recommended!" 
              author="David Chen" 
              role="CTO at InnovateX" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="layout-container">
          <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden group hover:scale-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-transparent"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[var(--text-main)] tracking-tighter">Ready to ship <br /> your next project?</h2>
              <p className="text-lg text-[var(--text-secondary)] font-medium max-w-xl mx-auto leading-relaxed">
                Join 5,000+ developers building with Frost. Get started for free today.
              </p>
              <div className="pt-4">
                <Link to="/register" className="btn-primary px-12 py-5 text-sm uppercase tracking-widest font-bold">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
