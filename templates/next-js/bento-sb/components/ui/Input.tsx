// nexus — components/ui/Input.tsx

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, type = 'text', className, ...props }, ref) => {
    const baseInputStyles = 'bg-[var(--surface2)] border rounded-[10px] px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none w-full transition';
    const borderStyles = error ? 'border-[var(--coral)]/50' : 'border-[var(--border)] focus:border-[var(--accent)]/50';
    const combinedInputStyles = `${baseInputStyles} ${borderStyles} ${className || ''}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1.5">
            {label}
          </label>
        )}
        <input ref={ref} type={type} className={combinedInputStyles} {...props} />
        {error && <p className="text-xs text-[var(--coral)] mt-1">{error}</p>}
        {hint && !error && <p className="text-xs text-[var(--muted)] mt-1">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
