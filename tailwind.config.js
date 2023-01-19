/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'card-pattern':" url('/images/bg-pattern-card.svg')",
        'btm-pattern':" url('/images/bg-pattern-bottom.svg')",
        'top-pattern':" url('/images/bg-pattern-top.svg')",
      }
    },
    screens:{
      'sm':'425px',
      'md': '768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1440px'
    },
    colors:{
      'Dark-cyan':'hsl(185, 75%, 39%)',
      'Very-dark-blue': 'hsl(229, 23%, 23%)',
      'Dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'Dark-gray': 'hsl(0, 0%, 59%)',
      'white':'#ffffff'
    }
  },
  plugins: [],ld
}
