// slik — react-bento — src/components/layout/Footer.tsx
import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl text-text">SmartDash</span>
              <span className="w-2 h-2 bg-accent rounded-full"></span>
            </div>
            <p className="text-muted text-sm">
              A powerful, modern, and secure dashboard system for your business.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-text mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#features" className="text-muted hover:text-text text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="text-muted hover:text-text text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-muted hover:text-text text-sm transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-text mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#about" className="text-muted hover:text-text text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-text text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-text text-sm transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-text mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted hover:text-text text-sm transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-text text-sm transition-colors">
                  Terms
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted hover:text-text transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted hover:text-text transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted hover:text-text transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted text-sm">
          <p>&copy; 2024 SmartDash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
