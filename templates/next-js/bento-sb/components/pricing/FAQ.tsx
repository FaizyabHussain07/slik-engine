// nexus — components/pricing/FAQ.tsx

'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Can I change plans later?',
    a: 'Yes, upgrade or downgrade anytime. Changes take effect immediately.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Visa, Mastercard, Amex, PayPal, and bank transfer for Enterprise.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Pro plan has a 14-day free trial. No credit card required.',
  },
  {
    q: 'How does per-seat pricing work?',
    a: 'You pay for each team member who has an account. Viewers are free.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel anytime with no cancellation fees. Data exported on request.',
  },
  {
    q: 'Do you offer discounts for nonprofits?',
    a: 'Yes, 50% off for registered nonprofits and educational institutions.',
  },
  {
    q: 'Is my data secure?',
    a: 'SOC 2 Type II certified, AES-256 encryption, regular third-party audits.',
  },
  {
    q: 'Do you offer refunds?',
    a: '30-day money-back guarantee on all paid plans. No questions asked.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-3xl mx-auto px-4 py-24">
      <h2 className="font-serif text-3xl text-center text-[var(--text)] mb-12">
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="font-medium text-[var(--text)]">{faq.q}</span>
              <span className="text-[var(--accent)] text-xl">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 pt-0">
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
