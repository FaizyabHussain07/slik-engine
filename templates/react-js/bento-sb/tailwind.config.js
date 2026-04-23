/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        'surface-muted': 'var(--surface2)',
        brand: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
        },
        text: {
          main: 'var(--text)',
          secondary: 'var(--muted)',
          muted: 'rgba(240, 237, 232, 0.3)',
        },
        border: {
          base: 'var(--border)',
          strong: 'var(--border2)',
        },
        success: 'var(--accent-success)',
        warning: 'var(--accent-warning)',
        danger: 'var(--accent-danger)',
        accent: 'var(--accent)',
      },
      borderRadius: {
        card: 'var(--radius-2xl)',
        btn: 'var(--radius-full)',
        input: 'var(--radius-lg)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
