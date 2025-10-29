import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F5B87',
        accent: '#F6C343',
        background: '#F8F4EE',
        text: '#3A3A3A',
        seagreen: '#3C8D7C',
        // Legacy color aliases for backward compatibility
        // Both petrol and marine map to primary as they were used interchangeably for brand blue
        petrol: '#1F5B87',
        sand: '#F8F4EE',
        marine: '#1F5B87',
        slate: '#3A3A3A',
        ocean: '#3C8D7C'
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
  plugins: []
};
