// nexus — components/landing/PricingSection.tsx

'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 max-w-6xl mx-auto px-4" id="pricing">
      {/* Eyebrow & Heading */}
      <div className="text-center font-mono text-[11px] text-[var(--muted)] uppercase tracking-widest mb-4">
        Pricing
      </div>
      <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-center text-[var(--text)]">
        Simple, transparent pricing
      </h2>
      <p className="text-center text-[var(--muted)] mb-16">
        Start free, scale when ready. No hidden fees.
      </p>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <button
          onClick={() => setYearly(!yearly)}
          className="flex items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-full p-1"
        >
          <span
            className={`px-4 py-2 rounded-full text-sm transition ${
              !yearly ? 'bg-[var(--accent)] text-black font-medium' : 'text-[var(--muted)]'
            }`}
          >
            Monthly
          </span>
          <span
            className={`px-4 py-2 rounded-full text-sm transition ${
              yearly ? 'bg-[var(--accent)] text-black font-medium' : 'text-[var(--muted)]'
            }`}
          >
            Yearly <span className="text-xs opacity-75">(save 20%)</span>
          </span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {/* Starter */}
        <PricingCard
          name="Starter"
          badge="Free forever"
          badgeColor="muted"
          price="$0"
          period="/month"
          description="Perfect for individuals and small projects"
          features={[
            'Up to 3 projects',
            '5 team members',
            'Basic analytics',
            '2GB storage',
            'Community support',
          ]}
          ctaText="Get started free"
          ctaVariant="ghost"
        />

        {/* Pro */}
        <PricingCard
          name="Pro"
          badge="Most popular"
          badgeColor="accent"
          price={yearly ? '$9.60' : '$12'}
          period={yearly ? '/month per seat' : '/month per seat'}
          description="For growing teams that need more power"
          features={[
            'Everything in Starter',
            'Unlimited projects',
            'Unlimited members',
            'AI insights (NEW)',
            '50GB storage',
            'Priority support',
            'Custom integrations',
            'Advanced analytics',
          ]}
          ctaText="Start 14-day trial"
          ctaVariant="primary"
          featured
        />

        {/* Enterprise */}
        <PricingCard
          name="Enterprise"
          badge=""
          badgeColor=""
          price="Custom"
          period=""
          description="For large organizations with custom needs"
          features={[
            'Everything in Pro',
            'SSO/SAML',
            'Custom contracts',
            'SLA guarantee',
            'Dedicated success manager',
            'On-premise option',
            'Custom AI training',
          ]}
          ctaText="Contact sales"
          ctaVariant="ghost"
          darkBg
        />
      </div>
    </section>
  );
}

interface PricingCardProps {
  name: string;
  badge: string;
  badgeColor: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'ghost';
  featured?: boolean;
  darkBg?: boolean;
}

function PricingCard({
  name,
  badge,
  badgeColor,
  price,
  period,
  description,
  features,
  ctaText,
  ctaVariant,
  featured,
  darkBg,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 ${
        featured
          ? 'bg-[var(--surface)] border-2 border-[var(--accent)]'
          : darkBg
          ? 'bg-[var(--surface2)] border border-[var(--border)]'
          : 'bg-[var(--surface)] border border-[var(--border)]'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div
          className={`inline-block font-mono text-xs px-3 py-1 rounded-full mb-4 ${
            badgeColor === 'accent'
              ? 'bg-[var(--accent)] text-black'
              : 'text-[var(--muted)]'
          }`}
        >
          {badge}
        </div>
      )}

      {/* Price */}
      <div className="font-serif text-5xl text-[var(--text)] mb-2">
        {price}
      </div>
      {period && (
        <div className="text-[var(--muted)] text-lg mb-4">{period}</div>
      )}

      {/* Description */}
      <p className="text-[var(--muted)] text-sm mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text)]">
            <span className="text-[var(--teal)] mt-0.5">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button variant={ctaVariant} className="w-full" href="/signup">
        {ctaText}
      </Button>
    </div>
  );
}
