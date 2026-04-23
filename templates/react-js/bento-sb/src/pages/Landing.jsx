import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutDashboard, Zap, Shield, Smartphone, Globe, BarChart3, ArrowRight, Play } from 'lucide-react';
import BentoCard from '../components/BentoCard';
import PricingCard from '../components/PricingCard';
import TestimonialCard from '../components/TestimonialCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
  const features = [
    { title: 'Bento Grid UI', subtitle: 'A modern, premium grid layout that fits perfectly for SaaS and dashboards.', icon: LayoutDashboard, span: 'md:col-span-3' },
    { title: 'Role-Based Auth', subtitle: 'Ready-to-use Supabase authentication with Admin and User roles.', icon: Shield, span: 'md:col-span-3' },
    { title: 'Dark Mode Ready', subtitle: 'Fully integrated dark and light mode with persistent settings.', icon: Zap, span: 'md:col-span-2' },
    { title: 'Advanced Dashboards', subtitle: 'Complete Admin and User panels with stats and profile management.', icon: BarChart3, span: 'md:col-span-4' },
    { title: 'SEO Optimized', subtitle: 'Perfect lighthouse scores with meta tags, sitemaps, and JSON-LD.', icon: Globe, span: 'md:col-span-3' },
    { title: 'Mobile Responsive', subtitle: 'Crafted to look stunning on phones, tablets, and desktops.', icon: Smartphone, span: 'md:col-span-3' },
  ];

  const plans = [
    { plan: 'Starter', price: '0', description: 'Perfect for small personal projects.', features: ['Up to 3 projects', 'Basic analytics', 'Community support', 'Public templates'] },
    { plan: 'Pro', price: '49', description: 'Everything you need to grow.', highlighted: true, features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Private templates', 'Custom domains'] },
    { plan: 'Enterprise', price: '199', description: 'Scalable solutions for teams.', features: ['Custom integrations', 'Dedicated manager', 'SLA guarantee', 'White-labeling', 'SSO/SAML auth'] },
  ];

  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <Helmet>
        <title>BentoWeb | Premium React Templates</title>
        <meta name="description" content="Premium React templates built with the modern Bento design language. Fast, responsive, and SEO-optimized." />
        <meta property="og:title" content="BentoWeb | Premium React Templates" />
        <meta property="og:description" content="Premium React templates built with the modern Bento design language." />
        <link rel="canonical" href="https://bentoweb.example.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BentoWeb",
            "url": "https://bentoweb.example.com",
            "logo": "https://bentoweb.example.com/logo.png",
            "description": "Premium React templates built with the modern Bento design language."
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 fade-in">
              <div className="badge-brand w-fit px-4 py-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand/75 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                New: Bento v2.0 is out
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-text-main leading-[1.1] tracking-tighter">
                Build your next <span className="text-brand">Masterpiece</span> with Bento.
              </h1>
              <p className="text-xl text-text-secondary font-medium leading-relaxed max-w-2xl">
                The ultimate SaaS starter kit. Includes Supabase Auth, pre-built User & Admin Dashboards, and a stunning Bento UI. Everything you need to launch in days, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary py-4 px-10 text-sm uppercase tracking-widest font-black">
                  Browse Templates <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="btn-ghost py-4 px-10 text-sm uppercase tracking-widest font-black flex items-center justify-center">
                  <Play size={18} className="mr-2 fill-current" /> Watch Demo
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 fade-in delay-100">
              <div className="bg-brand rounded-card p-8 text-white flex flex-col justify-between h-[300px] shadow-brand-glow">
                <LayoutDashboard size={40} className="opacity-80" />
                <div>
                  <h3 className="text-2xl font-black mb-1 leading-tight">Interactive Dashboards</h3>
                  <p className="text-brand-muted text-sm font-medium">Ready-to-use admin panels.</p>
                </div>
              </div>
              <div className="bg-success rounded-card p-8 text-white flex flex-col justify-between h-[300px] mt-8 shadow-lg shadow-success/20">
                <Shield size={40} className="opacity-80" />
                <div>
                  <h3 className="text-2xl font-black mb-1 leading-tight">Advanced Security</h3>
                  <p className="opacity-80 text-sm font-medium">Role-based access control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-surface-muted/50">
        <div className="layout-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand">Features</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main tracking-tight">Everything you need, <br className="hidden md:block" /> and more.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {features.map((f, i) => (
              <BentoCard key={i} title={f.title} subtitle={f.subtitle} icon={f.icon} className={f.span} badge={i === 0 ? "Popular" : null} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-4 border-y border-border-base bg-surface-muted/30">
        <div className="layout-container">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand">The Engine</h2>
             <h3 className="text-4xl font-black text-text-main tracking-tight">Built with the Best Tech.</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React 19', desc: 'Modern UI logic' },
              { name: 'Supabase', desc: 'Auth & Database' },
              { name: 'Tailwind 4', desc: 'Modern styling' },
              { name: 'React Router', desc: 'Client-side routing' },
              { name: 'Lucide Icons', desc: 'Pixel-perfect icons' },
              { name: 'Vite', desc: 'Fastest build tool' },
              { name: 'PostgreSQL', desc: 'Reliable data' },
              { name: 'Standard SEO', desc: 'Search ready' },
            ].map((tech, i) => (
              <div key={i} className="p-6 card-premium text-center space-y-1">
                <p className="font-black text-text-main text-lg tracking-tight">{tech.name}</p>
                <p className="text-text-muted text-xs font-bold uppercase tracking-widest">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="layout-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand">Pricing</h2>
            <h3 className="text-4xl md:text-5xl font-black text-text-main tracking-tight">Simple, honest pricing.</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((p, i) => (
              <PricingCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-surface-muted/50">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              content="The best React template I've ever used. The attention to detail in the Bento design is absolutely world-class." 
              author="Sarah Jenkins" 
              role="Lead Developer at Meta" 
            />
            <TestimonialCard 
              content="We migrated our entire dashboard to Bento in just a weekend. Our users love the new clean and modern interface." 
              author="Alex Rivera" 
              role="Founder at CloudScale" 
            />
            <TestimonialCard 
              content="Performance is key for us, and Bento delivers. Lighthouse scores of 100 across the board. Highly recommended!" 
              author="David Chen" 
              role="CTO at InnovateX" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="layout-container">
          <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-brand-glow">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white relative z-10 tracking-tight">Ready to build something <br /> extraordinary?</h2>
            <p className="text-white/80 text-lg font-medium relative z-10 max-w-2xl mx-auto">
              Join thousands of developers building the future with BentoWeb templates.
            </p>
            <div className="flex justify-center pt-4 relative z-10">
              <button className="bg-white text-brand py-5 px-12 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
