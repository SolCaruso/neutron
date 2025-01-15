/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        switzer: 'Switzer, system-ui, sans-serif',
        geist: ['"Geist Mono"', 'serif'],
        sans: ['"Montserrat"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
