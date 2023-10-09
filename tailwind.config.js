/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 darkMode: 'class',
 theme: {
  container: {
   center: true,
   padding: '16px',
  },
  extend: {
   colors: {
    primary: '#f3f2f5', //fdfff7 / f3f2f5 / fffeff
    dark: '#0f172a', //#00205a
    secondary: '#377DFF',
   },
   fontFamily: {
    primary: ['Inter', 'sans-serif'],
   },
  },
 },
 plugins: [],
};
