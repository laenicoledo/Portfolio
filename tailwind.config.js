/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    colors: {
      'blue-gradient' : '#A7BAE4',
      'pink-gradient' : '#DDB4CD',
      'cloud-burst-blue' : '#212E52',
      'white': '#ffffff',
      'gray' : '#666666',
      'pink-font':'#F1B8D2',
      'transparent': 'transparent',
    },
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Arial: ['Arial']
      },
    },
  },
  plugins: [],
}

