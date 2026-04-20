// nexus — components/landing/CTASection.tsx

import Button from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[var(--surface)] to-[var(--surface2)] border border-[var(--border)] rounded-[20px] p-8 md:p-12 text-center">
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] text-[var(--text)] mb-4">
          Ready to ship faster?
        </h2>
        <p className="text-[var(--muted)] text-lg mb-8 max-w-xl mx-auto">
          Join 12,000+ teams already using Nexus to build better products, together.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" size="lg" href="/signup">
            Start for free →
          </Button>
          <Button variant="ghost" size="lg" href="/contact">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
