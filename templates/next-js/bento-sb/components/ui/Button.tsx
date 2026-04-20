// nexus — components/ui/Button.tsx

'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, disabled, href, children, className, onClick, ...props }, ref) => {
    const baseStyles = 'font-sans transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 rounded-[10px]';

    const variantStyles = {
      primary: 'bg-[var(--accent)] text-black hover:bg-[var(--accent-dark)]',
      ghost: 'border border-[var(--border2)] text-[var(--muted)] hover:text-[var(--text)] hover:border-white/20',
      danger: 'bg-[var(--coral)]/10 text-[var(--coral)] border border-[var(--coral)]/30 hover:bg-[var(--coral)]/20',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`;

    const spinner = (
      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    if (href) {
      const isInternal = href.startsWith('/');
      const LinkComponent = isInternal ? Link : 'a' as any;
      const linkProps = isInternal ? { href } : { href, target: '_blank', rel: 'noopener noreferrer' };

      return (
        <LinkComponent
          {...linkProps}
          className={combinedClassName}
          onClick={disabled || loading ? undefined : onClick}
        >
          {loading && spinner}
          {children}
        </LinkComponent>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {loading && spinner}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
