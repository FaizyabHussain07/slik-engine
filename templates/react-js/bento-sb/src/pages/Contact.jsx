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
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <Helmet>
        <title>Contact Us | BentoWeb</title>
        <meta name="description" content="Get in touch with the BentoWeb team for support, custom projects, or inquiries." />
        <link rel="canonical" href="https://bentoweb.example.com/contact" />
      </Helmet>

      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">Get in Touch</h2>
                <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Let's talk about your <span className="text-brand-600 dark:text-brand-400">Project.</span></h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Have a question or a project idea? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 space-y-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-300 font-bold mt-1">hello@bentoweb.com</p>
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 space-y-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[10px]">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-300 font-bold mt-1">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-800 flex gap-6 items-center">
                <div className="shrink-0 w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest text-[10px]">Our Office</h4>
                  <p className="text-slate-900 dark:text-white font-bold mt-1">795 Folsom Ave, Suite 600, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-slate-700 shadow-xl shadow-brand-500/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="form-control" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="form-control" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Company</label>
                  <input type="text" placeholder="Acme Inc." className="form-control" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                  <textarea placeholder="Tell us about your project..." className="form-control min-h-[150px] resize-none py-4" required></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 uppercase font-black tracking-widest text-xs">
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">FAQ</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Common Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50"
                >
                  <span className="font-bold text-slate-900 dark:text-white">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-brand-600" /> : <ChevronDown size={20} className="text-slate-400" />}
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 border-t border-gray-50 dark:border-slate-700' : 'max-h-0'}`}>
                  <div className="p-8 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
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
