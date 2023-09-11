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
      sm: { max: '479px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1439px' },
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
  plugins: [require("daisyui"), 'prettier-plugin-tailwindcss'],
  daisyui: {
    themes: ["corporate"],
  },
}

