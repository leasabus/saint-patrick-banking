/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : 'gray-500',
        secondary: '#065658',
        terciary: '#F5CB5C',
        alternative: '#e9edc9',
        sidebar : '#023047',
      }
    },
  },
  plugins: [],
}

