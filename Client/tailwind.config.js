// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         Myorange: '#FFA500',
//       },
//       fontFamily: {
//         Yellowtail: ['Yellowtail', 'cursive'],
//         CormorantGaramond: ['Cormorant Garamond', 'serif'],
//         Playfair: ['Playfair Display', 'serif'],
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #000000, #6b21a8, #000000)',
      },
      backgroundSize: {
        'size-300': '300% 300%',
      },
      keyframes: {
        'radial-move': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      animation: {
        'radial-move': 'radial-move 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
