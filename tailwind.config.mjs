import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        petrol: '#0F5257',
        sand: '#F2E9E4',
        marine: '#1E3D58',
        slate: '#2A3A4A',
        ocean: '#10828C'
      },
      fontFamily: {
        sans: ['"Work Sans"', ...fontFamily.sans],
        display: ['"DM Serif Display"', ...fontFamily.serif]
      },
      boxShadow: {
        card: '0 20px 50px -25px rgba(15, 82, 87, 0.35)'
      }
    }
  },
  plugins: []
};
