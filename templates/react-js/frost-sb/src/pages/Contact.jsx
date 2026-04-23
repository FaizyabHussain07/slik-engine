import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "How do I install the templates?", a: "All our templates come with a comprehensive documentation guide. You can typically install them via npm or yarn in less than a minute." },
    { q: "Do you offer custom design services?", a: "Yes, our team is available for custom projects. Contact us through the form below with your requirements." },
    { q: "What is your refund policy?", a: "We offer a 14-day no-questions-asked refund policy for all our digital templates if you are not satisfied." },
    { q: "Can I use these for commercial projects?", a: "Absolutely! Our standard license covers both personal and commercial use cases." },
  ];

  return (
    <div className="transition-colors duration-300">
      <Helmet>
        <title>Contact Us | Frost</title>
        <meta name="description" content="Get in touch with the Frost team for support, custom projects, or inquiries." />
        <link rel="canonical" href="https://frost.example.com/contact" />
      </Helmet>

      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">Get in Touch</h2>
                <h1 className="text-5xl font-bold text-[var(--text-main)] tracking-tighter">Let's talk about your <span className="text-[var(--color-accent)]">Project.</span></h1>
                <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
                  Have a question or a project idea? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] space-y-4">
                  <div className="w-12 h-12 bg-[var(--color-accent-muted)] rounded-xl flex items-center justify-center text-[var(--color-accent)] shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] uppercase tracking-widest text-[10px]">Email Us</h4>
                    <p className="text-[var(--text-secondary)] font-bold mt-1">hello@frost-ui.com</p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] space-y-4">
                  <div className="w-12 h-12 bg-[var(--color-accent-muted)] rounded-xl flex items-center justify-center text-[var(--color-accent)] shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] uppercase tracking-widest text-[10px]">Call Us</h4>
                    <p className="text-[var(--text-secondary)] font-bold mt-1">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[var(--color-accent-muted)] border border-[var(--color-accent)]/10 flex gap-6 items-center">
                <div className="shrink-0 w-12 h-12 bg-[var(--color-accent)] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-accent)] uppercase tracking-widest text-[10px]">Our Office</h4>
                  <p className="text-[var(--text-main)] font-bold mt-1">795 Folsom Ave, Suite 600, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-12 hover:scale-100 relative overflow-hidden">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="input-field" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="input-field" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Company</label>
                  <input type="text" placeholder="Acme Inc." className="input-field" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1">Message</label>
                  <textarea placeholder="Tell us about your project..." className="input-field min-h-[150px] resize-none py-4" required></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 uppercase font-bold tracking-widest text-xs">
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[var(--glass-bg)]">
        <div className="layout-container max-w-3xl">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">FAQ</h2>
             <h3 className="text-4xl font-bold text-[var(--text-main)] tracking-tight">Common Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card !p-0 overflow-hidden shadow-sm hover:scale-100">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-[var(--glass-bg)]"
                >
                  <span className="font-bold text-[var(--text-main)]">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-[var(--color-accent)]" /> : <ChevronDown size={20} className="text-[var(--text-muted)]" />}
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 border-t border-[var(--glass-border)]' : 'max-h-0'}`}>
                  <div className="p-8 text-[var(--text-secondary)] font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
