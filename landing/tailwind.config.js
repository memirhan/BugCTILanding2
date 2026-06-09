/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#0d1117',
          darker: '#010409',
          border: '#30363d',
          accent: '#2f81f7',
          accentHover: '#388bfd',
          text: '#c9d1d9',
          muted: '#8b949e',
        },
        'brand-indigo': '#6366f1',
        'brand-purple': '#a855f7',
        'brand-dark': '#03040b',
        'brand-glow': 'rgba(99, 102, 241, 0.15)',
      }
    },
  },
  plugins: [],
}
