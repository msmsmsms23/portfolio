/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: {
          50: '#DED3DE',
          100: '#B59EBD',
          200: '#82659F',
          300: '#4C3F6E',
          400: '#1F1E39',
        },
      },
    },
    plugins: [],
  },
};
