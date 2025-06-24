/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#1C1C1C',
        'warm-gold': '#BFA76F',
        'pure-white': '#FFFFFF',
        'sakura-red': '#851E1E',
        'jp-cream': '#F8F4E3',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Noto Serif JP', 'serif'],
        'body': ['Quicksand', 'Open Sans', 'sans-serif'],
        'menu': ['Raleway', 'Lora', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.png')",
        'bamboo-pattern': "url('/assets/images/bamboo-bg.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}