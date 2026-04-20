// nexus — components/ui/Spinner.tsx

interface SpinnerProps {
  size?: number;
  className?: string;
}

const Spinner = ({ size = 16, className = '' }: SpinnerProps) => {
  return (
    <svg
      className={`animate-spin ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ stroke: 'var(--accent)' }}
    >
      <circle cx="12" cy="12" r="10" strokeWidth="3" strokeOpacity="0.3" />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export default Spinner;
