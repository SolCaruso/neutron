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
      screens: {
        "xs": "400px",
        "2xs": "375px",
        "3xs": "390px",
        "3.5xs":"420px",
        "4xs": "430px",
        "4sm": "490px",
        "3sm": "465px",
        "2sm": "620px",
        "2md": "820px",
        "3xl": "2000px",
      },
      zIndex: {
        '-15': '-15',
        '-20': '-20',
        '-25': '-25',
      },
    },
  },
  plugins: [],
}
