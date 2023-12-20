/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },

      colors: {
        'light-pink' : 'hsl(275, 100%, 97%)',
        'grayish-purple' : 'hsl(292, 16%, 49%)',
        'dark-purple' : 'hsl(292, 42%, 14%)'
      },

      backgroundImage: {
        'mobile-bg': "url('../src/assets/images/background-pattern-mobile.svg')",
        'desktop-bg': "url('../src/assets/images/background-pattern-desktop.svg')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100' : '100%',
      },
      backgroundPosition: {
        'center': 'center',
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
      },
      backgroundRepeat: {
        'repeat': 'repeat',
        'no-repeat': 'no-repeat',
      },
      
      fontFamily: {
        'theme': ['Work Sans', 'sans-serif']
      },

    },
  },
  plugins: [],
}