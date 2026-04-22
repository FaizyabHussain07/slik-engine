import { motion } from 'framer-motion';

const stats = [
  { value: '60s', label: 'Average Setup Time' },
  { value: '100+', label: 'Pre-built Components' },
  { value: 'Zero', label: 'Configuration Needed' },
  { value: '100%', label: 'Open Source' },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative z-10 border-t border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-premium mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
