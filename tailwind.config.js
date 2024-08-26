/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'accent-primary': '#357065',
      'dark-secondary': '#FFFFFFB8',
      'primary-black': '#313339',   
      'secondary-black': '#767676',
      'tertiary': '#2B2D331F',
      'beach': '#F5F3EF',
      'accent-alt-primary': '#E36E64',
      'dark-purple': '#9783DB',
      'dark-green': '#2CB6A0',
      'dark-orange': '#F18973',
      'light-beach': '#BFBFBF',
      'black-40': '#9E9E9E',
      'black-20': '#DDDDDD'
        },
  },
  plugins: [],
}

