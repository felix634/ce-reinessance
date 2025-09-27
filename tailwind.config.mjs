/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      // Define a custom dark color scheme
      colors: {
        'background-dark': '#0f0f0f',
        'primary-dark': '#1c1c1c',
        'accent-gold': '#a87932', // Company's classic gold/brass accent
        'text-light': '#f0f0f0',
      },
      // Simple custom animation for page transitions
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 