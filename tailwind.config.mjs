import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Legacy color aliases for backward compatibility
        petrol: '#1F5B87',
        sand: '#F8F4EE',
        marine: '#1F5B87',
        slate: '#3A3A3A',
        ocean: '#3C8D7C',
        seagreen: '#3C8D7C'
      },
      fontFamily: {
        sans: ['"Work Sans"', ...fontFamily.sans],
        display: ['"DM Serif Display"', ...fontFamily.serif]
      },
      boxShadow: {
        card: '0 20px 50px -25px rgba(31, 91, 135, 0.35)'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ruhestarter: {
          'primary': '#1F5B87',        // Kompass-Blau
          'secondary': '#F6C343',      // Ruhestarter-Gelb
          'accent': '#3C8D7C',         // Seegrün
          'neutral': '#3A3A3A',        // Graphit-Grau
          'base-100': '#F8F4EE',       // Sand-Beige
          'base-200': '#FFFFFF',       // White
          'base-300': '#E8E4DE',       // Slightly darker sand
          'info': '#1F5B87',
          'success': '#3C8D7C',
          'warning': '#F6C343',
          'error': '#EF4444',
        },
      },
    ],
  },
};
