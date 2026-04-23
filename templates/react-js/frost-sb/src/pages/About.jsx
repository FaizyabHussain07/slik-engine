import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Rocket, Heart, Globe2, Award, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BentoCard from '../components/BentoCard';

const About = () => {
  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Countries', value: '45+', icon: Globe2 },
    { label: 'Years Experience', value: '12+', icon: Award },
    { label: 'Projects Done', value: '1.2k', icon: Zap },
  ];

  const team = [
    { name: 'Alex Thompson', role: 'CEO & Founder', bio: 'Visionary leader with 15 years in tech design.', span: 'md:col-span-3' },
    { name: 'Elena Rodriguez', role: 'Head of Design', bio: 'Frost design enthusiast and UI/UX expert.', span: 'md:col-span-3' },
    { name: 'Marcus Wright', role: 'CTO', bio: 'Full-stack wizard obsessed with performance.', span: 'md:col-span-2' },
    { name: 'Sophia Lee', role: 'Marketing Director', bio: 'Growth hacker and community builder.', span: 'md:col-span-2' },
    { name: 'David Kim', role: 'Senior Developer', bio: 'React core contributor and open source lover.', span: 'md:col-span-2' },
  ];

  return (
    <div className="transition-colors duration-500">
      <Helmet>
        <title>About Us | Frost</title>
        <meta name="description" content="Learn about Frost - the team behind the most beautiful React templates." />
        <meta property="og:title" content="About Us | Frost" />
        <link rel="canonical" href="https://frost.example.com/about" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Our Story</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-main)] tracking-tighter">We design for the <br /> <span className="text-[var(--color-accent)]">Future.</span></h1>
          <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed max-w-3xl mx-auto">
            Founded in 2024, Frost was born from a simple idea: that web development should be beautiful, structured, and incredibly fast.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 border-y border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-[var(--color-accent-muted)] text-[var(--color-accent)] rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-110 border border-[var(--glass-border)]">
                  <s.icon size={32} />
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--text-main)]">{s.value}</p>
                  <p className="text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-[var(--text-main)] tracking-tight">Our Core Values</h3>
              <div className="space-y-8">
                {[
                  { title: 'Quality First', desc: 'We never compromise on the quality of our code or design.', icon: Target },
                  { title: 'Innovation', desc: 'Pushing the boundaries of what is possible on the web.', icon: Rocket },
                  { title: 'Inclusivity', desc: 'Creating products that are accessible to everyone.', icon: Heart },
                ].map((v, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 glass-card flex items-center justify-center text-[var(--color-accent)]">
                      <v.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-main)] mb-1">{v.title}</h4>
                      <p className="text-[var(--text-secondary)] font-medium leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-accent)] rounded-[3rem] aspect-square relative overflow-hidden shadow-2xl shadow-blue-500/20">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-80 mix-blend-multiply" alt="Team" />
               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
               <div className="absolute bottom-12 left-12 right-12 text-white">
                 <p className="text-3xl font-bold italic">"Great things in business are never done by one person. They're done by a team of people."</p>
                 <p className="mt-4 font-bold uppercase tracking-widest text-[10px] text-indigo-200">— Steve Jobs</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">The Team</h2>
            <h3 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">Meet the Architects.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {team.map((m, i) => (
              <BentoCard key={i} title={m.name} subtitle={m.bio} className={m.span} badge={m.role} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
