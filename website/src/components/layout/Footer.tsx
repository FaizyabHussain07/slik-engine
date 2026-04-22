import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#09090b] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="text-2xl font-bold font-sans tracking-tight block mb-4">
              slik<span className="text-emerald-500">.</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
              Generate production-ready SaaS applications in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/FaizyabHussain07/slik-engine" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#09090b] dark:text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#features" className="hover:text-emerald-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#09090b] dark:text-white uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="https://github.com/FaizyabHussain07/slik-engine" className="hover:text-cyan-500 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#09090b] dark:text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Slik. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Built by the community.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
