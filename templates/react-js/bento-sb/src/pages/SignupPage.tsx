// slik — react-bento — src/pages/SignupPage.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function SignupPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length < 6) return 0
    if (pwd.length < 10) return 1
    if (pwd.match(/[A-Z]/) && pwd.match(/[0-9]/)) return 3
    return 2
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (!terms) {
      setError('Please accept the terms')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) {
        const errorMap: Record<string, string> = {
          'User already registered': 'An account with this email already exists',
          'Password should be at least 6 characters': 'Password must be at least 6 characters',
        }
        throw new Error(errorMap[error.message] || error.message)
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bento-cell p-8 text-center">
            <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-2xl text-text mb-2">Check your email</h1>
            <p className="text-muted mb-6">
              We've sent you a confirmation link. Please check your email to verify your account.
            </p>
            <Link to="/login">
              <Button variant="ghost" className="w-full">
                Back to login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const strength = getPasswordStrength(password)
  const strengthColors = ['bg-coral', 'bg-coral', 'bg-accent', 'bg-teal']

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bento-cell p-8">
          <h1 className="font-serif text-3xl text-text mb-2">Create account</h1>
          <p className="text-muted mb-8">Start your free trial today</p>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-coral/10 border border-coral/20 text-coral text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <Input
              label="Full name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              required
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            {password && (
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded ${
                      i <= strength ? strengthColors[strength] : 'bg-surface2'
                    }`}
                  />
                ))}
              </div>
            )}
            <Input
              label="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border bg-surface2"
                required
              />
              <span className="text-sm text-muted">
                I agree to the{' '}
                <a href="#" className="text-accent hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-accent hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <Button type="submit" loading={loading} className="w-full">
              Create account
            </Button>
          </form>

          <p className="mt-8 text-center text-muted text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-accent hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
