import { motion } from 'framer-motion';
import { Search, Bell, Settings, LayoutDashboard, Users, CreditCard, Menu } from 'lucide-react';

export default function PreviewSection() {
  return (
    <section className="py-24 relative z-10 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#09090b] dark:text-white">
            Beautiful right <span className="text-gradient">out of the box.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get a head start with meticulously designed layouts, components, and interactive elements.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Subtle Glow Background */}
          <div className="absolute -inset-1 bg-gradient-premium rounded-2xl opacity-10 blur-2xl"></div>
          
          {/* Mock Browser Box */}
          <div className="relative flex flex-col bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9]">
            
            {/* Browser Header */}
            <div className="flex px-4 py-3 bg-gray-100 dark:bg-[#09090b] border-b border-gray-200 dark:border-white/5 items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/5 text-xs text-gray-400 font-medium flex items-center min-w-[200px] justify-center">
                  <Search className="w-3 h-3 mr-2" />
                  slik.dev/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Mockup Layout */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-64 bg-gray-50 dark:bg-[#09090b] border-r border-gray-200 dark:border-white/5 p-4 space-y-8">
                <div className="flex items-center space-x-3 text-lg font-bold dark:text-white px-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-premium"></div>
                  <span>Acme Inc</span>
                </div>
                
                <div className="space-y-1 flex-1">
                  {[
                    { icon: <LayoutDashboard className="w-4 h-4 mr-3" />, label: "Dashboard", active: true },
                    { icon: <Users className="w-4 h-4 mr-3" />, label: "Team", active: false },
                    { icon: <CreditCard className="w-4 h-4 mr-3" />, label: "Billing", active: false },
                    { icon: <Settings className="w-4 h-4 mr-3" />, label: "Settings", active: false },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center px-2 py-2 text-sm rounded-md cursor-pointer transition-colors ${item.active ? 'bg-white dark:bg-[#18181b] text-[#09090b] dark:text-white font-medium border border-gray-200 dark:border-white/5' : 'text-gray-500 hover:text-[#09090b] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}>
                      {item.icon}
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 bg-white dark:bg-[#141414] p-4 md:p-8 overflow-hidden flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center md:hidden text-gray-500">
                    <Menu className="w-5 h-5 mr-3" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">Overview</h3>
                  <div className="flex items-center space-x-4">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      JS
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-white/5 p-4 rounded-xl flex flex-col justify-center">
                      <div className="w-8 h-2 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
                      <div className="w-16 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="w-24 h-2 bg-gray-200 dark:bg-gray-800 rounded"></div>
                    </div>
                  ))}
                </div>
                
                <div className="flex-1 bg-gray-50 dark:bg-[#09090b] border border-gray-200 dark:border-white/5 rounded-xl p-4 flex flex-col">
                  <div className="w-32 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>
                  <div className="flex-1 flex items-end space-x-2">
                    {[40, 70, 45, 90, 65, 85, 100, 60, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-emerald-500/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
