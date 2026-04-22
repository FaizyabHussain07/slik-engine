/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        surface2: '#1a1a1a',
        border: 'rgba(255,255,255,0.07)',
        border2: 'rgba(255,255,255,0.13)',
        text: '#f0ede8',
        muted: 'rgba(240,237,232,0.45)',
        accent: '#c8f135',
        purple: '#9b7ff4',
        teal: '#3ecfb2',
        coral: '#ff6b6b',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
        sans: ['Geist', 'sans-serif'],
      },
      borderRadius: {
        'bento': '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
