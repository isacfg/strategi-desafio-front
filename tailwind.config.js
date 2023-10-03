/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    screns: {
      sm: { max: '481px' },
      md: { max: '769px' },
      lg: { max: '1030px' },
      xl: { max: '1445px' },
    },
    extend: {
      colors: {
        // light mode
        white: '#FFF',
        black: '#091A2B',
        gray: '#D9D9D9',
        greenish: '#00AD45',
        lightgray: '#F2F2F2',
      },
    },
  },
  plugins: [require("daisyui"),require('@tailwindcss/forms')],
  daisyui: {
    themes: ["corporate"],
  },
}

