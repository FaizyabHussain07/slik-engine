import { motion } from 'framer-motion'

export default function LogoStrip() {
  const tech = ['Next.js', 'Supabase', 'React', 'TypeScript', 'Tailwind', 'Vite', 'Framer Motion']

  return (
    <section className="py-16 border-y border-[var(--border)] overflow-hidden bg-[var(--surface)]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-xs text-[var(--muted)] uppercase tracking-widest mb-8"
      >
        Built with modern technologies
      </motion.p>
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-16 animate-marquee whitespace-nowrap"
        >
          {[...tech, ...tech, ...tech].map((tech, i) => (
            <span
              key={i}
              className="text-lg text-[var(--muted)] font-medium px-8 hover:text-[var(--text)] transition"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
