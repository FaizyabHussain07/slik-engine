import { motion } from 'framer-motion';
import { Package, Zap } from 'lucide-react';

export default function WhySlikSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#09090b] dark:text-white">
          Better than <span className="text-gradient">boilerplates.</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stop copy-pasting code. Start shipping products immediately.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gray-100 dark:bg-[#1a1a1a] rounded-full flex items-center justify-center border border-gray-200 dark:border-white/5">
              <Package className="w-6 h-6 text-gray-500" />
            </div>
            <h3 className="text-2xl font-semibold dark:text-white">Traditional Boilerplates</h3>
          </div>
          <ul className="space-y-5">
            {[
              'Copy-paste disjointed code',
              'Manual configuration required',
              'Generic, boring designs',
              'Hours of setup time',
              'Outdated dependencies',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-red-500 font-bold bg-red-100 dark:bg-red-500/10 w-6 h-6 rounded-full flex items-center justify-center text-xs">✕</span>
                <span className="text-gray-600 dark:text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10" />
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold dark:text-white">Slik Engine</h3>
            </div>
            <ul className="space-y-5">
              {[
                'One command, everything ready',
                'Zero configuration needed',
                'Premium, unique designs UI',
                'Always up-to-date stack',
                'Pre-wired full-stack infrastructure',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold bg-emerald-100 dark:bg-emerald-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
