import { motion } from 'framer-motion';
import { Layers, Zap, Database, Share2, Server, Key, Wind, Braces } from 'lucide-react';

const stack = [
  { name: 'Next.js', icon: <Server />, desc: 'App Router ready', color: 'emerald' },
  { name: 'React', icon: <Layers />, desc: 'Component architecture', color: 'cyan' },
  { name: 'Tailwind CSS', icon: <Wind />, desc: 'Utility-first styling', color: 'sky' },
  { name: 'TypeScript', icon: <Braces />, desc: 'End-to-end typed', color: 'blue' },
  { name: 'Supabase', icon: <Database />, desc: 'PostgreSQL & Auth', color: 'emerald' },
  { name: 'Prisma', icon: <Share2 />, desc: 'Type-safe ORM', color: 'cyan' },
  { name: 'NextAuth/Auth.js', icon: <Key />, desc: 'Secure sessions', color: 'indigo' },
  { name: 'Framer Motion', icon: <Zap />, desc: 'Fluid animations', color: 'fuchsia' },
];

export default function TechStackSection() {
  return (
    <section className="py-24 relative z-10 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#09090b] dark:text-white">
            Everything inside the <span className="text-gradient">box.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Slik generates your app using the industry's best standard tech stack so you never hit a wall.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stack.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-lg transition-all hover:scale-[1.02] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-bl-full -z-10 group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#18181b] border border-gray-200 dark:border-white/5 flex items-center justify-center mb-4 text-emerald-500 group-hover:text-cyan-500 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
