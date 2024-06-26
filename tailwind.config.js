/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: 'var(--Primary-Blue, #0052FE)',
        underblue: 'var(--Primary-DarkBlue, #0141CF)',
        panelcolor: 'color: var(--Text-2, #3E424A)',
        bggreen: 'var(--bgfreen, #EBF9F4)',
        'custom-bg': '#EBF9F4',
        'bggreen1': '#0FBA83',
        'bgblue': '#0082FF',
        'gray2': '#3E424A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}