import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Star } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/FaizyabHussain07/slik-engine')
      .then(res => res.json())
      .then(data => {
        if (typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-md border-b border-gray-200 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-sans tracking-tight">
              slik<span className="text-emerald-500">.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Features</a>
            <Link to="/preview" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Preview</Link>
            <a href="/#docs" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Documentation</a>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/FaizyabHussain07/slik-engine" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-sm font-medium text-gray-800 dark:text-gray-200 group">
                <Github className="w-4 h-4" />
                <span>Star us</span>
                <div className="flex items-center justify-center bg-white dark:bg-black rounded-full px-2 py-0.5 shadow-sm ml-1 group-hover:text-yellow-500 transition-colors">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  <span className="text-xs font-bold">{stars !== null ? stars.toLocaleString() : 'Star'}</span>
                </div>
              </a>
              <ThemeToggle />
              <button className="px-5 py-2 text-sm font-semibold rounded-full text-white bg-gradient-premium hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 absolute top-16 left-0 right-0 py-4 px-4 flex flex-col space-y-4 shadow-xl">
          <a href="/#features" className="block text-base font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <Link to="/preview" className="block text-base font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Preview</Link>
          <a href="/#docs" className="block text-base font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileMenuOpen(false)}>Documentation</a>
          <a href="https://github.com/FaizyabHussain07/slik-engine" className="flex items-center text-base font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileMenuOpen(false)}>
            <Github className="w-5 h-5 mr-3" />
            GitHub
            <span className="ml-auto flex items-center text-xs font-semibold bg-gray-100 dark:bg-white/10 px-2 py-1 rounded-md">
              <Star className="w-3 h-3 mr-1 text-yellow-500 fill-yellow-500" /> {stars !== null ? stars.toLocaleString() : 'Star'}
            </span>
          </a>
          <button className="w-full mt-4 px-4 py-3 text-base font-semibold rounded-lg text-white bg-gradient-premium shadow-lg shadow-emerald-500/20">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
