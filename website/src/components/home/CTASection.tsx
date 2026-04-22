import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-premium opacity-10"></div>
          <div className="absolute top-0 right-0 p-32 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.3),transparent_70%)] rounded-full blur-3xl"></div>
          
          <div className="relative bg-white/5 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 px-8 py-16 md:px-16 md:py-20 text-center flex flex-col items-center">
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#09090b] dark:text-white max-w-2xl">
              Stop building from scratch. <br />
              <span className="text-gradient">Start shipping.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
              Join developers building high-quality SaaS applications faster than ever. 100% open source and free to use.
            </p>
            
            <button className="flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-premium hover:scale-105 transition-transform shadow-lg shadow-emerald-500/25">
              Create Your App Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <p className="mt-6 text-sm text-gray-500 font-mono">
              $ npx create-slik my-app
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
