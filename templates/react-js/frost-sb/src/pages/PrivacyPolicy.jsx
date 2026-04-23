import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    { id: 'collection', title: 'Information Collection', content: 'We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.' },
    { id: 'usage', title: 'Use of Information', content: 'We may use the information we collect about you to: Provide, maintain, and improve our services; Send you technical notices, updates, security alerts, and support and administrative messages; Communicate with you about products, services, offers, promotions, and events offered by BentoWeb and others.' },
    { id: 'sharing', title: 'Sharing of Information', content: 'We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including: With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.' },
    { id: 'gdpr', title: 'Your Rights (GDPR)', content: 'If you are a resident of the European Economic Area (EEA), you have certain data protection rights. BentoWeb aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. You have the right to be informed, right of access, right to rectification, and right to erasure.' },
    { id: 'cookies', title: 'Cookies', content: 'We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
  ];

  return (
    <div className="transition-colors duration-300">
      <Helmet>
        <title>Privacy Policy | Frost</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your data." />
        <link rel="canonical" href="https://frost.example.com/privacy-policy" />
      </Helmet>

      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar TOC */}
            <div className="lg:col-span-3 hidden lg:block h-fit sticky top-32">
              <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-muted)] mb-6">Table of Contents</h4>
              <nav className="space-y-4">
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="block text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--color-accent)] dark:hover:text-white transition-colors">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 max-w-3xl">
              <div className="mb-12">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">Legal</h2>
                <h1 className="text-5xl font-black text-[var(--text-main)] tracking-tighter mb-4">Privacy Policy</h1>
                <p className="text-[var(--text-muted)] text-sm font-bold uppercase tracking-widest">Last Updated: April 23, 2026</p>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
                  At Frost, accessible from frost.example.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Frost and how we use it.
                </p>

                {sections.map(s => (
                  <div key={s.id} id={s.id} className="scroll-mt-32">
                    <h3 className="text-2xl font-black text-[var(--text-main)] mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-[var(--color-accent)] rounded-full"></span>
                      {s.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed font-medium">
                      {s.content}
                    </p>
                  </div>
                ))}

                <div className="p-8 rounded-[2rem] glass-card mt-16">
                  <h4 className="text-lg font-black text-[var(--text-main)] mb-2">Contact Our Data Protection Officer</h4>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                  <a href="mailto:privacy@frost.example.com" className="text-[var(--color-accent)] font-bold hover:underline">privacy@frost.example.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
