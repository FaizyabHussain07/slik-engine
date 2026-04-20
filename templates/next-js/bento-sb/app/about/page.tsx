// nexus — app/about/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutBento />
      </main>
      <Footer />
    </>
  );
}

function AboutHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-4">
          Our story
        </div>
        <h1 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.1] text-[var(--text)] mb-6">
          Built by builders,<br />
          for builders.
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-[540px] mx-auto font-light leading-relaxed">
          We got tired of juggling 6 tools to manage one project. So we built Nexus — a unified workspace where great teams ship faster.
        </p>
      </div>
    </section>
  );
}

function AboutBento() {
  const team = [
    { name: 'Alex Kim', role: 'CEO', bio: 'Former PM at Stripe. Obsessed with workflow optimization.', initials: 'AK', color: 'purple' },
    { name: 'Sarah Park', role: 'CTO', bio: 'Ex-Googler. 10 years building distributed systems.', initials: 'SP', color: 'teal' },
    { name: 'Marcus Lee', role: 'Head of Design', bio: 'Designed products used by millions. Minimalist at heart.', initials: 'ML', color: 'coral' },
    { name: 'Priya Sharma', role: 'Head of Growth', bio: 'Scaled 3 startups from 0 to 10M users. Data-driven.', initials: 'PS', color: 'accent' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-3">
        {/* Mission */}
        <div className="col-span-12 md:col-span-8 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-4">
            Our mission
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--text)] mb-6 leading-tight">
            To give every team the superpowers of a 10x engineering org — regardless of size or budget.
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            We believe great software shouldn't require great resources. Small teams should have access to the same tools that power the world's best companies. Nexus is our contribution to that vision — a platform that levels the playing field and lets talent shine through.
          </p>
        </div>

        {/* Founded */}
        <div className="col-span-12 md:col-span-4 bg-[var(--accent)] border border-[var(--accent)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-center">
          <div className="font-serif text-[64px] leading-none text-black mb-2">
            2022
          </div>
          <div className="font-mono text-xs text-black/60 uppercase tracking-widest mb-4">
            Year founded
          </div>
          <div className="text-sm text-black/70">
            San Francisco, CA
          </div>
        </div>

        {/* Stats Row */}
        {[
          { label: 'Teams worldwide', value: '12,000+' },
          { label: 'Customer satisfaction', value: '94%' },
          { label: 'Integrations', value: '50+' },
          { label: 'Uptime SLA', value: '99.9%' },
        ].map((stat, i) => (
          <div
            key={i}
            className="col-span-12 md:col-span-3 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
          >
            <div className="font-serif text-4xl text-[var(--accent)] mb-2">
              {stat.value}
            </div>
            <div className="text-xs text-[var(--muted)]">
              {stat.label}
            </div>
          </div>
        ))}

        {/* Team */}
        <div className="col-span-12 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <h3 className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-6">
            Meet the team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-medium ${
                    member.color === 'purple'
                      ? 'bg-[var(--purple)]/20 text-[var(--purple)]'
                      : member.color === 'teal'
                      ? 'bg-[var(--teal)]/20 text-[var(--teal)]'
                      : member.color === 'coral'
                      ? 'bg-[var(--coral)]/20 text-[var(--coral)]'
                      : 'bg-[var(--accent)]/20 text-[var(--accent)]'
                  }`}
                >
                  {member.initials}
                </div>
                <div className="font-medium text-[var(--text)]">{member.name}</div>
                <div className="text-sm text-[var(--muted)] mb-2">{member.role}</div>
                <div className="text-xs text-[var(--muted)] leading-relaxed">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="col-span-12 md:col-span-6 bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <h3 className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-6">
            What we believe
          </h3>
          <ul className="space-y-4">
            {[
              'Ship fast, learn faster',
              'Design is not optional',
              'Users > vanity metrics',
            ].map((value, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--text)]">
                <span className="text-[var(--accent)] mt-0.5">→</span>
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Investors */}
        <div className="col-span-12 md:col-span-6 bg-[var(--surface2)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
          <h3 className="font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-6">
            Backed by the best
          </h3>
          <div className="space-y-2">
            {['Y Combinator', 'Sequoia', 'Andreessen Horowitz'].map((investor, i) => (
              <div key={i} className="font-serif italic text-xl text-[var(--text)]">
                {investor}
              </div>
            ))}
          </div>
          <div className="mt-6 text-[var(--accent)] font-medium">
            $4.2M seed round
          </div>
        </div>
      </div>
    </section>
  );
}
