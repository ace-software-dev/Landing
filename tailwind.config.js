/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient-blue': 'radial-gradient(50% 50% at 50% 50%, #41AAE5 0%, rgba(65, 170, 229, 0.00) 100%)',
        'radial-gradient-purple': 'radial-gradient(50% 50% at 50% 50%, #865DEE 0%, rgba(134, 93, 238, 0.00) 100%)',
      },
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F2EEFC',
          200: '#E4DCF9',
          300: '#DCC1FF',
          400: '#AF96ED',
          500: '#9473E7',
          600: '#7044DF',
          700: '#6C3FDE',
          800: '#5F2EDC',
          900: '#4E21C0',
        },
        blue: {
          100: '#EFF6FB',
          200: '#BDDAEF',
          300: '#9CC8E7',
          400: '#76B3DE',
          500: '#44A3DA',
          600: '#227BAD',
          700: '#1E6C99',
          800: '#185477',
          900: '#113C55',
          1001:'#041632',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif'],
        'filson-pro': ['var(--font-filson-pro)', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
