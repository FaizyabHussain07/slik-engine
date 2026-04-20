// nexus — app/contact/page.tsx

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}

function ContactHero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-[clamp(40px,5vw,64px)] leading-[1.1] text-[var(--text)] mb-6">
          Let's talk.
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-[540px] mx-auto font-light leading-relaxed">
          Whether you have a question, feedback, or just want to say hello — we're here.
        </p>
      </div>
    </section>
  );
}

function ContactContent() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-5 space-y-4">
          {/* Contact Info */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
            <h3 className="font-serif text-xl text-[var(--text)] mb-6">
              Get in touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-xl">📧</div>
                <div>
                  <div className="text-xs text-[var(--muted)] mb-1">Email</div>
                  <a href="mailto:hello@nexus.app" className="text-[var(--accent)] hover:underline">
                    hello@nexus.app
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl">💬</div>
                <div>
                  <div className="text-xs text-[var(--muted)] mb-1">Live chat</div>
                  <div className="text-sm text-[var(--text)]">
                    Available Mon-Fri, 9am-6pm PST
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl">🐦</div>
                <div>
                  <div className="text-xs text-[var(--muted)] mb-1">Twitter</div>
                  <a href="https://twitter.com/nexushq" className="text-[var(--accent)] hover:underline">
                    @nexushq
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office */}
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
            <h3 className="font-serif text-xl text-[var(--text)] mb-6">
              Our office
            </h3>
            <div className="space-y-2 text-sm text-[var(--text)]">
              <div>340 Pine Street</div>
              <div>San Francisco, CA 94104</div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-4 h-32 bg-[var(--surface2)] rounded-lg border border-[var(--border)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-sm text-[var(--muted)]">SF ●</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="col-span-12 md:col-span-7">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border2)]">
            <h3 className="font-serif text-xl text-[var(--text)] mb-6">
              Send us a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
