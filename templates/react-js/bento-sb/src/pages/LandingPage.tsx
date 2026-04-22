// slik — react-bento — src/pages/LandingPage.tsx
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import { Shield, Users, LayoutDashboard, Zap, CheckCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface2 border border-border mb-8">
            <span className="text-accent">✦</span>
            <span className="text-sm font-mono text-muted">Role-based SaaS Dashboard</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-text mb-6">
            Simplify Your Workflow
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
            Manage users, track analytics, and boost productivity with secure role-based access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/signup">
              <Button variant="primary" className="text-lg px-8 py-3">
                Get Started Now
              </Button>
            </Link>
            <Link to="#features">
              <Button variant="ghost" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-surface2 border-2 border-border flex items-center justify-center text-xs font-mono text-muted"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-muted text-sm">Join 5,000+ teams</span>
          </div>
        </div>
      </section>

      {/* Bento Features Grid */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-text text-center mb-12">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Cell A - Secure Authentication */}
            <div className="md:col-span-7 bento-cell p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple/20">
                  <Shield className="text-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-text mb-2">Secure Authentication</h3>
                  <p className="text-muted">Powered by Supabase auth with enterprise-grade security.</p>
                </div>
              </div>
              <div className="bg-surface2 rounded-lg p-4 border border-border mt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-surface border border-border"></div>
                  <div className="flex-1 h-3 bg-surface rounded"></div>
                </div>
                <div className="h-3 bg-surface rounded w-3/4"></div>
              </div>
            </div>

            {/* Cell B - Role-Based Access */}
            <div className="md:col-span-5 bento-cell p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-teal/20">
                  <Users className="text-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-text mb-2">Role-Based Access</h3>
                  <p className="text-muted">Admin and user roles with granular permissions.</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-purple/20 text-purple text-sm font-mono">Admin</span>
                <span className="px-3 py-1 rounded-full bg-surface2 text-muted text-sm font-mono">User</span>
              </div>
            </div>

            {/* Cell C - Uptime */}
            <div className="md:col-span-4 bento-cell bento-cell-accent p-8">
              <p className="font-mono text-sm mb-2">Real-time</p>
              <p className="font-serif text-5xl mb-2">99.9%</p>
              <p className="text-sm">Uptime guaranteed</p>
            </div>

            {/* Cell D - User Dashboard */}
            <div className="md:col-span-4 bento-cell p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <LayoutDashboard className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-text mb-2">User Dashboard</h3>
                  <p className="text-muted text-sm">Intuitive interface for daily tasks.</p>
                </div>
              </div>
              <div className="bg-surface2 rounded-lg p-3 border border-border space-y-2">
                <div className="h-2 bg-surface rounded"></div>
                <div className="h-2 bg-surface rounded w-3/4"></div>
                <div className="h-2 bg-surface rounded w-1/2"></div>
              </div>
            </div>

            {/* Cell E - Admin Panel */}
            <div className="md:col-span-4 bento-cell p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-coral/20">
                  <Zap className="text-coral" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-text mb-2">Admin Panel</h3>
                  <p className="text-muted text-sm">Complete user management.</p>
                </div>
              </div>
              <div className="bg-surface2 rounded-lg p-3 border border-border">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="h-6 bg-surface rounded"></div>
                  <div className="h-6 bg-surface rounded"></div>
                  <div className="h-6 bg-surface rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-text text-center mb-12">Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: '$0', features: ['1 User', 'Basic Dashboard', 'Email Support'] },
              { name: 'Pro', price: '$29', features: ['5 Users', 'Advanced Analytics', 'Priority Support', 'API Access'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited Users', 'Custom Integrations', 'Dedicated Support', 'SLA'] },
            ].map((plan) => (
              <div key={plan.name} className={`bento-cell p-8 ${plan.popular ? 'border-accent' : ''}`}>
                {plan.popular && (
                  <div className="text-accent font-mono text-sm mb-4">Most Popular</div>
                )}
                <h3 className="font-serif text-2xl text-text mb-2">{plan.name}</h3>
                <p className="text-4xl font-serif text-text mb-6">{plan.price}<span className="text-lg text-muted">/mo</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted">
                      <CheckCircle size={16} className="text-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/signup">
                  <Button variant={plan.popular ? 'primary' : 'ghost'} className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-text text-center mb-12">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechCorp', text: 'SmartDash transformed how we manage our team. The role-based access is a game changer.' },
              { name: 'Mike Chen', role: 'CTO, StartupXYZ', text: 'The best dashboard solution we have used. Clean, fast, and secure.' },
              { name: 'Emily Davis', role: 'Product Manager', text: 'Finally a dashboard that actually works for our workflow. Highly recommended!' },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bento-cell p-8">
                <p className="text-muted mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-serif text-text">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bento-cell p-12">
          <h2 className="font-serif text-4xl text-text mb-4">Ready to Get Started?</h2>
          <p className="text-muted mb-8">Join thousands of teams already using SmartDash.</p>
          <Link to="/signup">
            <Button variant="primary" className="text-lg px-8 py-3">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
