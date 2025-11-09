import { fontFamily } from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', ...fontFamily.sans],
        display: ['"DM Serif Display"', ...fontFamily.serif]
      },
      boxShadow: {
        card: '0 20px 50px -25px rgba(31, 91, 135, 0.35)'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        ruhestarter: {
          'primary': 'oklch(0.45 0.12 247)',        // #1F5B87 Kompass-Blau in OKLCH
          'primary-content': 'oklch(1 0 0)',        // White text on primary buttons
          'secondary': 'oklch(0.80 0.14 85)',       // #F6C343 Ruhestarter-Gelb in OKLCH
          'secondary-content': 'oklch(0.30 0.05 247)', // Dark text on secondary buttons
          'accent': 'oklch(0.58 0.12 175)',         // #3C8D7C Seegrün in OKLCH
          'accent-content': 'oklch(1 0 0)',         // White text on accent
          'neutral': 'oklch(0.30 0.01 285)',        // #3A3A3A Graphit-Grau in OKLCH
          'neutral-content': 'oklch(1 0 0)',        // White text on neutral
          'base-100': 'oklch(0.96 0.01 75)',        // #F8F4EE Sand-Beige in OKLCH
          'base-200': 'oklch(1 0 0)',               // White
          'base-300': 'oklch(0.93 0.01 75)',        // #E8E4DE Slightly darker sand
          'base-content': 'oklch(0.30 0.01 285)',   // #3A3A3A Text color on base
          'info': 'oklch(0.45 0.12 247)',
          'info-content': 'oklch(1 0 0)',
          'success': 'oklch(0.58 0.12 175)',
          'success-content': 'oklch(1 0 0)',
          'warning': 'oklch(0.80 0.14 85)',
          'warning-content': 'oklch(0.30 0.05 247)',
          'error': 'oklch(0.63 0.25 25)',
          'error-content': 'oklch(1 0 0)',
        },
      },
    ],
    styled: true,
    base: true,
  },
};
