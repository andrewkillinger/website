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
        // Light mode
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          muted: '#6B7280',
          border: '#E5E7EB',
          accent: '#2563EB',
        },
        // Dark mode
        dark: {
          bg: '#111111',
          surface: '#1A1A1A',
          text: '#F5F5F5',
          muted: '#9CA3AF',
          border: '#2D2D2D',
          accent: '#60A5FA',
        },
      },
      maxWidth: {
        prose: '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
};
