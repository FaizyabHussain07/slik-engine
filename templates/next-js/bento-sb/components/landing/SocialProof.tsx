// nexus — components/landing/SocialProof.tsx

export function SocialProof() {
  const companies = ['Vercel', 'Linear', 'Notion', 'Stripe', 'Loom', 'Figma'];
  
  const testimonials = [
    {
      quote: "Nexus cut our sprint planning from 2 hours to 20 minutes. It's genuinely magical.",
      author: 'Sarah Chen',
      role: 'CTO at Vercel',
      initials: 'SC',
      color: 'purple',
    },
    {
      quote: "Finally a project tool that doesn't feel like it was designed in 2012. The AI features alone are worth it.",
      author: 'Marcus R.',
      role: 'Head of Product at Linear',
      initials: 'MR',
      color: 'teal',
    },
    {
      quote: "We switched from Jira 6 months ago and never looked back. Our team velocity is up 40%.",
      author: 'Priya K.',
      role: 'Engineering Lead',
      initials: 'PK',
      color: 'coral',
    },
  ];

  return (
    <section className="py-24 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Eyebrow */}
        <div className="text-center font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest mb-10">
          Loved by teams at
        </div>

        {/* Logo Strip */}
        <div className="flex justify-center gap-12 flex-wrap opacity-40">
          {companies.map((company) => (
            <span key={company} className="font-serif italic text-xl text-[var(--text)]">
              {company}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
            >
              <div className="text-[var(--accent)] text-4xl font-serif mb-4">"</div>
              <p className="font-serif italic text-[var(--text)] text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    testimonial.color === 'purple'
                      ? 'bg-[var(--purple)]/20 text-[var(--purple)]'
                      : testimonial.color === 'teal'
                      ? 'bg-[var(--teal)]/20 text-[var(--teal)]'
                      : 'bg-[var(--coral)]/20 text-[var(--coral)]'
                  }`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-[var(--text)]">{testimonial.author}</div>
                  <div className="text-xs text-[var(--muted)]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
