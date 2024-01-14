import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '500ms'
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        steel: {
          '50': '#f3f6fc',
          '100': '#e6eef8',
          '200': '#c8dbef',
          '300': '#98bce1',
          '400': '#619acf',
          '500': '#4a89c4',
          '600': '#2c639d',
          '700': '#254f7f',
          '800': '#22456a',
          '900': '#213a59',
          '950': '#16263b',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
