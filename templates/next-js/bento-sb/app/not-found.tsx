// nexus — app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-8 md:p-10 text-center">
        {/* 404 */}
        <div className="font-serif text-8xl text-[var(--accent)] mb-4">404</div>

        {/* Message */}
        <h1 className="font-serif text-2xl text-[var(--text)] mb-2">
          Page not found
        </h1>
        <p className="text-sm text-[var(--muted)] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-block bg-[var(--accent)] text-black px-6 py-2.5 rounded-[10px] text-sm font-medium hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
