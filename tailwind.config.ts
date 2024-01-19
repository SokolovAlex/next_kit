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
        blizzard: {
          '50': '#ecfdff',
          '100': '#d0f7fd',
          '200': '#a6edfb',
          '300': '#69def7',
          '400': '#24c5ec',
          '500': '#08a8d2',
          '600': '#0a86b0',
          '700': '#0f6b8f',
          '800': '#165774',
          '900': '#174962',
          '950': '#092f43',
        },
        spindle: {
          '50': '#eff6ff',
          '100': '#dcebfd',
          '200': '#c1dcfc',
          '300': '#a7d0fb',
          '400': '#64a7f6',
          '500': '#4086f1',
          '600': '#2a68e6',
          '700': '#2253d3',
          '800': '#2244ab',
          '900': '#213d87',
          '950': '#192752',
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
