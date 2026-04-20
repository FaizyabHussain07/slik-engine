// nexus — components/landing/Hero.tsx

import Button from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs border border-[var(--purple)]/25 bg-[var(--purple)]/8 text-[var(--purple)] rounded-full px-4 py-1.5 mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--purple)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--purple)]"></span>
          </span>
          Introducing Nexus 2.0 — Now with AI
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(48px,6vw,88px)] leading-[1.02] tracking-[-0.03em] text-center max-w-5xl mx-auto text-[var(--text)] animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Where great teams<br />
          <span className="text-[var(--accent)]">ship faster.</span>
        </h1>

        {/* Sub paragraph */}
        <p className="text-center text-lg text-[var(--muted)] max-w-[540px] mx-auto mt-6 font-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Nexus brings your projects, team, and timelines into one beautiful workspace. Stop context-switching. Start shipping.
        </p>

        {/* CTA Row */}
        <div className="flex gap-4 justify-center mt-10 flex-wrap animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" size="lg" href="/signup">
            Start for free →
          </Button>
          <Button variant="ghost" size="lg" href="/features">
            See how it works
          </Button>
        </div>

        {/* Below buttons */}
        <p className="text-xs text-[var(--muted)] mt-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Free 14-day trial · No credit card required · Cancel anytime
        </p>

        {/* Social Proof Strip */}
        <div className="mt-16 flex items-center justify-center gap-3 flex-wrap animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {/* Avatar circles */}
          <Avatar initials="JK" color="purple" />
          <Avatar initials="AR" color="teal" />
          <Avatar initials="MS" color="coral" />
          <Avatar initials="TL" color="accent" />
          <Avatar initials="RP" color="purple" />
          
          <span className="text-sm text-[var(--muted)] ml-2">
            Joined by 12,000+ teams worldwide
          </span>

          {/* Star rating */}
          <div className="flex items-center gap-1 ml-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--accent)' }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-sm text-[var(--muted)] ml-1">
              4.9/5 from 800+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  const colors: Record<string, string> = {
    purple: 'bg-[var(--purple)]/20 text-[var(--purple)]',
    teal: 'bg-[var(--teal)]/20 text-[var(--teal)]',
    coral: 'bg-[var(--coral)]/20 text-[var(--coral)]',
    accent: 'bg-[var(--accent)]/20 text-[var(--accent)]',
  };

  return (
    <div className={`w-8 h-8 rounded-full ${colors[color]} flex items-center justify-center text-xs font-medium`}>
      {initials}
    </div>
  );
}
