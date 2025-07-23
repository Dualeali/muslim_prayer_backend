/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth': {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8ddd0',
          300: '#d9c5b0',
          400: '#c7a688',
          500: '#b8906b',
          600: '#a67c5a',
          700: '#8b654c',
          800: '#715342',
          900: '#5c4437',
          950: '#31231c',
        },
        'spiritual': {
          50: '#f7f6f4',
          100: '#ede9e4',
          200: '#ddd4c9',
          300: '#c6b7a6',
          400: '#ad9682',
          500: '#9c8268',
          600: '#8f735c',
          700: '#775f4e',
          800: '#624f43',
          900: '#514139',
          950: '#2b221d',
        }
      },
      fontFamily: {
        'arabic': ['Amiri', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spiritual-gradient': 'linear-gradient(135deg, #2b221d 0%, #514139 50%, #775f4e 100%)',
        'earth-gradient': 'linear-gradient(135deg, #31231c 0%, #5c4437 50%, #8b654c 100%)',
      }
    },
  },
  plugins: [],
}