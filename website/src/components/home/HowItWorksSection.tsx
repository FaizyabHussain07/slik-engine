import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Install via CLI",
    description: "Run our single NPX command to bootstrap your codebase instantly.",
    code: "npx create-slik my-app"
  },
  {
    number: "02",
    title: "Configure your Stack",
    description: "Choose your UI theme, auth provider, and database preferences right in the terminal.",
    code: "Select preference: Dark/Light Mode"
  },
  {
    number: "03",
    title: "Launch & Iterate",
    description: "Your local server is up and running. Focus on shipping your unique features.",
    code: "npm run dev"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 relative z-10 bg-white dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#09090b] dark:text-white">
            From empty folder to <span className="text-gradient">production.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three simple steps to generate a professional SaaS foundation.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#09090b] border-2 border-emerald-500 flex items-center justify-center text-xl font-bold text-[#09090b] dark:text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#09090b] dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="py-2 px-4 rounded-lg bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-white/10 font-mono text-sm text-gray-700 dark:text-emerald-400">
                  {step.code}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
