import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Slik cut my project setup from 3 hours to literally one minute. The Bento theme looks more premium than anything I could build myself.',
    author: 'Aryan K.',
    role: 'Indie Hacker',
    initials: 'AK',
  },
  {
    quote: 'Finally a CLI that ships with real design identity. Not another boring UI starter. The code quality is strictly production-ready.',
    author: 'Sarah L.',
    role: 'Freelance Developer',
    initials: 'SL',
  },
  {
    quote: 'Used Slik for my last 3 client projects. Saves me 5+ hours per project. The admin panel integration alone is worth it.',
    author: 'Marcus R.',
    role: 'Full-Stack Dev',
    initials: 'MR',
  },
];

export default function TestimonialsSection() {
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
          Loved by <span className="text-gradient">developers.</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          See what builders are saying about shipping faster with Slik.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
          >
            <div className="font-serif text-4xl leading-none text-emerald-500 mb-6">
              "
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              {testimonial.quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center font-mono text-sm text-white font-bold shadow-md shadow-emerald-500/20">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-[#09090b] dark:text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
