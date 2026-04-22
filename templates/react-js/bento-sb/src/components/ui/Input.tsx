// slik — react-bento — src/components/ui/Input.tsx
import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-mono text-muted mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-surface2 border border-border text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors',
            error && 'border-coral focus:border-coral',
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="mt-1 text-xs text-muted">{hint}</p>
        )}
        {error && (
          <p className="mt-1 text-xs text-coral">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
