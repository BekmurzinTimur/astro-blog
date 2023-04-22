/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        main: '#000000',
        light: '#ffffff',
        accent: '#FFBF00',
        secondary: '#2274A5',
        super: '#22D3EE',
        active: '#E83F6F',
      },
    },
  },
  plugins: [],
}
