/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      base: [
        '18px',
        {
          lineHeight: '32px',
          fontWeight: '400',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '32px',
          fontWeight: '800',
        },
      ],
      '2xl': [
        '56px',
        {
          lineHeight: '64px',
          fontWeight: '800',
        },
      ],
      '3xl': [
        '80px',
        {
          lineHeight: '88px',
          fontWeight: '800',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
