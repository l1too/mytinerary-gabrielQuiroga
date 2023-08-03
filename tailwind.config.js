/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {

    extend: {}
  },
  variants:{},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light']
  }
}

