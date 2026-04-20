// nexus — components/contact/ContactForm.tsx

'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-[var(--teal)]/20 text-[var(--teal)] flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[var(--text)] mb-2">
          Message sent!
        </h3>
        <p className="text-sm text-[var(--muted)] mb-6">
          We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setSubject('General');
            setMessage('');
          }}
          className="text-[var(--accent)] text-sm hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Your name"
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="you@example.com"
      />
      <div>
        <label className="block text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1.5">
          Subject
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition"
        >
          <option value="General">General</option>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Partnership">Partnership</option>
          <option value="Press">Press</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1.5">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="How can we help?"
          className="w-full bg-[var(--surface2)] border border-[var(--border)] rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:border-[var(--accent)]/50 focus:outline-none transition min-h-[140px] resize-y"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full" loading={loading}>
        Send message
      </Button>
    </form>
  );
}
