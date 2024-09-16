import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Commissioner', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        21: '5.25rem',
        25: '6.25rem',
        41: '10.25rem',
      },
    },
  },
  plugins: [],
};
