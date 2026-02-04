/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#FCFCFC',
          surface: '#FFFFFF',
          text: '#171717',
          muted: '#737373',
          border: '#EBEBEB',
          accent: '#2563EB',
        },
        dark: {
          bg: '#0F0F0F',
          surface: '#171717',
          text: '#F5F5F5',
          muted: '#A3A3A3',
          border: '#262626',
          accent: '#60A5FA',
        },
      },
    },
  },
  plugins: [],
};
