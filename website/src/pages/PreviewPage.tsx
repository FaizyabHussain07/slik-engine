import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Star } from 'lucide-react';

export default function PreviewPage() {
  const [selectedStack, setSelectedStack] = useState('Next.js');
  const [selectedVibe, setSelectedVibe] = useState('Bento');
  const [activeTab, setActiveTab] = useState('Landing');

  const stacks = ['Next.js', 'React', 'HTML'];
  const vibes = ['Bento', 'Frost', 'Mono'];
  const tabs = ['Landing', 'Auth', 'Dashboard', 'Admin'];

  const isAvailable = true;
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] selection:bg-emerald-500/30">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 py-16 text-center">
          <p className="font-mono text-sm text-emerald-500 font-medium uppercase tracking-widest mb-4">
            ✦ Theme Previewer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#09090b] dark:text-white">
            See every design before <span className="text-gradient">you install.</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pick a stack and vibe to preview your generated SaaS templates interactively.
          </p>
        </div>

        {/* Sticky controls bar */}
        <div className="sticky top-[64px] z-40 bg-white/80 dark:bg-[#000000]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4 px-6 mb-12">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Stack pills */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-gray-100 dark:bg-[#09090b] border border-gray-200 dark:border-white/5">
              {stacks.map((stack) => (
                <button
                  key={stack}
                  onClick={() => setSelectedStack(stack)}
                  className={`
                    px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${selectedStack === stack
                      ? 'bg-white dark:bg-[#18181b] text-[#09090b] dark:text-white shadow-sm border border-gray-200/50 dark:border-white/10'
                      : 'text-gray-500 dark:text-gray-400 hover:text-[#09090b] dark:hover:text-white'
                    }
                  `}
                >
                  {stack}
                </button>
              ))}
            </div>

            {/* Divider */}
            <span className="hidden md:block font-mono text-sm text-gray-400 dark:text-gray-600">+</span>

            {/* Vibe pills */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-gray-100 dark:bg-[#09090b] border border-gray-200 dark:border-white/5">
              {vibes.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setSelectedVibe(vibe)}
                  className={`
                    px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${selectedVibe === vibe
                      ? 'bg-white dark:bg-[#18181b] text-[#09090b] dark:text-white shadow-sm border border-gray-200/50 dark:border-white/10'
                      : 'text-gray-500 dark:text-gray-400 hover:text-[#09090b] dark:hover:text-white'
                    }
                  `}
                >
                  {vibe}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview area */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {isAvailable ? (
            <>
              {/* Tab bar */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-200
                      ${activeTab === tab
                        ? 'bg-emerald-50 font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20'
                        : 'text-gray-600 dark:text-gray-400 hover:text-[#09090b] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent'
                      }
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab content wrapper w/ Browser Frame */}
              <div className="relative rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl bg-gray-50 dark:bg-[#09090b]">
                {/* Browser Header */}
                <div className="flex px-4 py-3 bg-gray-100 dark:bg-[#111111] border-b border-gray-200 dark:border-white/5 items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto flex-1 flex justify-center opacity-50">
                    <div className="px-4 py-1 rounded-md bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/5 text-xs text-gray-500 font-medium truncate max-w-[200px]">
                      localhost:3000/{activeTab.toLowerCase()}
                    </div>
                  </div>
                </div>

                {/* Content inner */}
                <div className="min-h-[600px] md:min-h-[700px] w-full" style={{ contain: 'paint' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      {activeTab === 'Landing' && <LandingMockup />}
                      {activeTab === 'Auth' && <AuthMockup />}
                      {activeTab === 'Dashboard' && <DashboardMockup />}
                      {activeTab === 'Admin' && <AdminMockup />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-24 mb-16  rounded-3xl border border-gray-200 border-dashed dark:border-white/10 dark:bg-[#09090b]/50">
              <div className="inline-flex items-center gap-3 mb-6 p-2 bg-gray-100 dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-white/5 shadow-inner">
                <span className="px-4 py-1.5 bg-white dark:bg-[#18181b] rounded-lg text-sm font-medium text-[#09090b] dark:text-white shadow-sm border border-gray-200 dark:border-white/5">
                  {selectedStack}
                </span>
                <span className="text-gray-400 dark:text-gray-600">+</span>
                <span className="px-4 py-1.5 bg-white dark:bg-[#18181b] rounded-lg text-sm font-medium text-[#09090b] dark:text-white shadow-sm border border-gray-200 dark:border-white/5">
                  {selectedVibe}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#09090b] dark:text-white">Under Construction</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
                We're actively working to build and polish this combination. 
              </p>
              <a
                href="https://github.com/FaizyabHussain07/slik-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-full text-[#09090b] dark:text-white bg-white dark:bg-[#141414] border border-gray-300 dark:border-white/20 hover:scale-105 transition-transform"
              >
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Star on GitHub
              </a>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {isAvailable && (
          <div className="max-w-[800px] mx-auto px-6 mt-20 text-center">
            <h3 className="text-2xl font-bold text-[#09090b] dark:text-white mb-6">Want to customize this design?</h3>
            <div className="inline-flex items-center justify-between gap-4 bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-white/10 rounded-xl pl-6 pr-2 py-2 max-w-md w-full shadow-lg">
              <code className="font-mono text-sm text-gray-700 dark:text-emerald-400">npx create-slik my-app</code>
              <button className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-premium hover:opacity-90 transition-opacity">
                Copy
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

// -------------------------------------------------------------------------------- //
// Beautiful Mini-Mockups with Premium Aesthetics
// -------------------------------------------------------------------------------- //

function LandingMockup() {
  return (
    <div className="w-full h-full bg-white dark:bg-[#000000] pointer-events-none p-6 md:p-12">
      {/* Mock Nav */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-emerald-500"></div>
           <div className="font-bold text-lg dark:text-white">SaaS.</div>
        </div>
        <div className="hidden md:flex gap-6">
          <div className="w-16 h-3 rounded-full bg-gray-200 dark:bg-white/10"></div>
          <div className="w-20 h-3 rounded-full bg-gray-200 dark:bg-white/10"></div>
        </div>
        <div className="w-24 h-10 rounded-full bg-black dark:bg-white/10 border dark:border-white/20"></div>
      </div>
      
      {/* Mock Hero */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 relative">
        <div className="w-32 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"></div>
        <div className="w-full h-12 md:h-16 rounded-xl bg-gray-900 dark:bg-white mb-4"></div>
        <div className="w-3/4 h-12 md:h-16 rounded-xl bg-gray-900 dark:bg-white mb-8"></div>
        
        <div className="w-2/3 h-4 rounded-full bg-gray-200 dark:bg-white/10 mb-3"></div>
        <div className="w-1/2 h-4 rounded-full bg-gray-200 dark:bg-white/10 mb-10"></div>
        
        <div className="flex gap-4">
          <div className="w-40 h-12 rounded-full bg-emerald-500"></div>
          <div className="w-40 h-12 rounded-full border border-gray-200 dark:border-white/20"></div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
      </div>
      
      {/* Cards Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="bg-gray-50 dark:bg-[#09090b] rounded-2xl p-6 border border-gray-100 dark:border-white/5 aspect-square flex flex-col items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-white dark:bg-[#141414] border border-gray-100 dark:border-white/5 mb-6"></div>
             <div className="w-1/2 h-4 rounded-full bg-gray-200 dark:bg-white/10 mb-4"></div>
             <div className="w-1/3 h-3 rounded-full bg-gray-200 dark:bg-white/10"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuthMockup() {
  return (
    <div className="w-full h-full bg-gray-50 dark:bg-[#000000] flex items-center justify-center p-6 py-20 pointer-events-none relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl rounded-full"></div>
      
      <div className="w-full max-w-[420px] bg-white dark:bg-[#09090b] border border-gray-200 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-10 relative z-10">
        <div className="flex justify-center mb-8">
           <div className="w-12 h-12 rounded-xl bg-emerald-500 shadow-md"></div>
        </div>
        
        <div className="w-48 h-6 rounded-full bg-gray-900 dark:bg-white mx-auto mb-2"></div>
        <div className="w-64 h-4 rounded-full bg-gray-400 dark:bg-gray-500 mx-auto mb-10"></div>
        
        <div className="space-y-4">
          <div className="w-full h-12 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#141414]"></div>
          <div className="w-full h-12 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#141414]"></div>
          <div className="w-full h-12 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#141414]"></div>
          
          <div className="w-full h-12 rounded-xl bg-gray-900 dark:bg-white mt-6 shadow-md"></div>
        </div>
        
        <div className="flex items-center justify-center mt-8">
           <div className="w-48 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="w-full h-full bg-white dark:bg-[#000000] flex pointer-events-none">
      {/* Sidebar */}
      <div className="hidden sm:flex w-64 border-r border-gray-200 dark:border-white/10 p-6 flex-col bg-gray-50 dark:bg-[#09090b]">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 rounded-lg bg-emerald-500"></div>
          <div className="w-24 h-5 rounded-md bg-gray-900 dark:bg-white"></div>
        </div>
        
        <div className="space-y-3 flex-1">
          <div className="w-full h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20"></div>
          <div className="w-full h-10 rounded-lg bg-transparent hover:bg-gray-200 dark:hover:bg-white/5"></div>
          <div className="w-full h-10 rounded-lg bg-transparent hover:bg-gray-200 dark:hover:bg-white/5"></div>
          <div className="w-full h-10 rounded-lg bg-transparent hover:bg-gray-200 dark:hover:bg-white/5"></div>
        </div>
        
        <div className="flex items-center gap-3 pt-6 border-t border-gray-200 dark:border-white/10">
          <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/20 bg-gray-200 dark:bg-white/10"></div>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-3 bg-gray-900 dark:bg-white rounded-full"></div>
            <div className="w-16 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Main Panel */}
      <div className="flex-1 p-6 md:p-10 flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <div className="w-40 h-8 rounded-md bg-gray-900 dark:bg-white"></div>
          <div className="w-32 h-10 rounded-full border border-gray-200 dark:border-white/10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1,2,3].map(i => (
             <div key={i} className="bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 bg-white dark:bg-[#141414] rounded-xl mb-4 border border-gray-200 dark:border-white/5"></div>
                <div className="w-24 h-6 bg-gray-900 dark:bg-white rounded-md mb-2"></div>
                <div className="w-16 h-4 bg-emerald-500 rounded-full"></div>
             </div>
          ))}
        </div>
        
        <div className="flex-1 bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col">
           <div className="w-48 h-6 rounded-md bg-gray-900 dark:bg-white mb-8"></div>
           <div className="flex-1 border-t border-gray-200 dark:border-white/10 flex items-end justify-between pt-8 gap-2">
              {[40, 70, 50, 90, 60, 100, 80, 50, 60, 40].map((h, i) => (
                <div key={i} className="flex-1 bg-gray-300 dark:bg-gray-800 rounded-t-sm hover:bg-emerald-500 transition-colors" style={{ height: `${h}%` }}></div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-[#09090b] flex flex-col pointer-events-none">
      {/* Top Navbar */}
      <div className="h-16 bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-6">
         <div className="flex gap-4 items-center">
            <div className="w-6 h-6 rounded bg-emerald-500"></div>
            <div className="w-px h-6 bg-gray-200 dark:bg-white/10"></div>
            <div className="w-32 h-4 rounded-md bg-gray-900 dark:bg-white"></div>
         </div>
         <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#141414]"></div>
            <div className="w-8 h-8 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#141414]"></div>
         </div>
      </div>
      
      {/* Main Layout */}
      <div className="flex-1 flex px-6 py-8 gap-8">
        {/* Nav list */}
        <div className="hidden md:flex w-48 flex-col gap-2">
           <div className="w-full h-8 rounded bg-gray-200 dark:bg-white/10"></div>
           <div className="w-3/4 h-8 rounded bg-transparent"></div>
           <div className="w-5/6 h-8 rounded bg-transparent"></div>
        </div>
        
        {/* Table view */}
        <div className="flex-1 bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-xl flex flex-col overflow-hidden">
           <div className="p-4 border-b border-gray-200 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-[#09090b]">
              <div className="w-48 h-8 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414]"></div>
              <div className="w-24 h-8 rounded-lg bg-gray-900 dark:bg-white"></div>
           </div>
           
           <div className="bg-gray-50 dark:bg-[#141414] py-3 px-6 flex border-b border-gray-200 dark:border-white/5">
              <div className="w-1/4 h-3 rounded bg-gray-300 dark:bg-gray-700"></div>
              <div className="w-1/4 h-3 rounded bg-gray-300 dark:bg-gray-700"></div>
              <div className="w-1/4 h-3 rounded bg-gray-300 dark:bg-gray-700"></div>
              <div className="w-1/4 h-3 rounded bg-gray-300 dark:bg-gray-700"></div>
           </div>
           
           {[1,2,3,4,5].map(i => (
             <div key={i} className="py-4 px-6 flex items-center border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-[#141414]">
                <div className="w-1/4 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-500 border border-cyan-500/20"></div>
                   <div className="w-24 h-4 rounded bg-gray-900 dark:bg-white/80"></div>
                </div>
                <div className="w-1/4 h-4 rounded bg-gray-400 dark:bg-gray-600 mr-4"></div>
                <div className="w-1/4 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 max-w-[80px]"></div>
                <div className="w-1/4 flex justify-end">
                   <div className="w-8 h-8 rounded-md border border-gray-200 dark:border-white/10"></div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
