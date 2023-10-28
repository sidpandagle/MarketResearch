/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0076EB',
        secondary: '#8639F9',
        tertiary: '#1ACEC2',
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
  ],
}