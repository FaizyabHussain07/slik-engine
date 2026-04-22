import { Zap, Palette, Shield, Database, Layout, Command } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-emerald-500" />,
    title: 'Blazing Fast',
    description: 'Optimized for zero configuration. Go from init to localhost:3000 in under 60 seconds.',
  },
  {
    icon: <Palette className="w-6 h-6 text-cyan-500" />,
    title: 'Premium UI',
    description: 'Handcrafted React components styled with Tailwind CSS are built-in from the start.',
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: 'Secure Auth',
    description: 'OAuth, magic links, and robust session management ready out of the box.',
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-500" />,
    title: 'Database Ready',
    description: 'PostgreSQL & Prisma pre-configured. Define your schema, push, and play.',
  },
  {
    icon: <Layout className="w-6 h-6 text-emerald-500" />,
    title: 'Responsive Layouts',
    description: 'Fully responsive dashboards, settings pages, and landing pages included.',
  },
  {
    icon: <Command className="w-6 h-6 text-cyan-500" />,
    title: 'Developer Experience',
    description: 'End-to-end typed with TypeScript. Strict ESLint and Prettier configs.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative z-10 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#09090b] dark:text-white">
            Everything you need to build <span className="text-gradient">faster.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Slik comes batteries-included with the modern stack you know and love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#09090b] dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
