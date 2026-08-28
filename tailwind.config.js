/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void:  '#020408',
        deep:  '#04060f',
        surface: '#070b17',
        raised: '#0d1220',
      },
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundOpacity: { 3: '0.03', 4: '0.04', 6: '0.06', 8: '0.08' },
      animation: {
        'orbit-slow': 'orbit-rotate 120s linear infinite',
        'orbit-fast': 'orbit-rotate 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease both',
      },
    },
  },
  plugins: [],
}
