const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@apideck/components/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'basier-circle': ['Basier Circle', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.slate,
        primary: {
          50: '#E3FCF7',
          100: '#CCF9EB',
          200: '#99F3D1',
          300: '#66ECB8',
          400: '#00ED64',
          500: '#00D75A',
          600: '#00C150',
          700: '#009F46',
          800: '#007D3D',
          900: '#00684A'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
