import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const TerminalMockup = () => {
  const [lines, setLines] = useState<number>(0);

  useEffect(() => {
    const sequence = [
      800,  // $ npx create-slik my-app
      1500, // Creating project structure...
      2500, // Installing dependencies...
      3500, // Setting up authentication...
      4500  // Your app is ready!
    ];

    const timeouts = sequence.map((time, index) =>
      setTimeout(() => setLines(index + 1), time)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-16 group perspective-1000">
      <div className="absolute -inset-1 bg-gradient-premium rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-1000"></div>
      <div className="relative rounded-xl bg-[#09090b] border border-white/10 shadow-2xl overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500">
        <div className="flex items-center px-4 py-3 bg-[#18181b] border-b border-white/5">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="mx-auto text-xs font-mono text-gray-500">bash — create-slik</div>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed text-gray-300 min-h-[220px]">
          {lines >= 1 && (
            <div className="flex items-center text-white mb-2">
              <span className="text-emerald-400 mr-2">$</span>
              <span className="typing-animation overflow-hidden whitespace-nowrap inline-block animate-[typing_1s_steps(30,end)]">
                npx create-slik my-app
              </span>
            </div>
          )}
          {lines >= 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-gray-400 mt-2">
              <span className="text-emerald-500 mr-2">✔</span> Creating project structure...
            </motion.div>
          )}
          {lines >= 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-gray-400 mt-1">
              <span className="text-emerald-500 mr-2">✔</span> Installing dependencies...
            </motion.div>
          )}
          {lines >= 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-gray-400 mt-1">
              <span className="text-emerald-500 mr-2">✔</span> Setting up authentication...
            </motion.div>
          )}
          {lines >= 5 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center text-emerald-400 font-medium mt-4">
              ✨ Your app is ready! Start building.
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="flex w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            v1.0 Released — API Ready
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto text-[#09090b] dark:text-white"
        >
          Design at the <span className="text-gradient">speed of thought.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Generate production-ready SaaS apps with premium UI, authentication, Database setup, and payments in seconds.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="flex items-center px-8 py-3 text-base font-semibold rounded-full text-white bg-gradient-premium hover:scale-105 transition-transform shadow-lg shadow-emerald-500/25">
            Get Started Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <a
            href="https://github.com/FaizyabHussain07/slik-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-3 text-base font-semibold rounded-full text-[#09090b] dark:text-white bg-transparent border border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </motion.div>
        
        <TerminalMockup />
      </div>
    </section>
  );
}
