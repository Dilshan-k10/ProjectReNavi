/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#2E5E99',
        secondaryBlue: '#0D2440',
        blueLight: '#7BA4D0',
        blueWhite: '#E7F0FA',
        greyColor: '#848181',
        whiteColor: '#FFFFFF',
        blackColor: '#000000',
      },
    },
  },
  plugins: [],
}

