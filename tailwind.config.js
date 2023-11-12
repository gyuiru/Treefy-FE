/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard Variable"],
      },
      colors: {
        'custom-gray' : '#959493',
        'custom-black' : '#322F2A',
        'custom-btn-green' : '#67c981',
      }
    },
  },
  plugins: [],
}

