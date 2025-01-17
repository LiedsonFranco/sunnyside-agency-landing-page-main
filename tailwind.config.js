/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'Grayish-blue': 'hsl(210, 4%, 67%)',
        'Very-dark-desaturated-blue': "hsl(212, 27%, 19%)",
        'Very-dark-grayish-blue': "hsl(213, 9%, 39%)",
        'Dark-grayish-blue': "hsl(232, 10%, 55%)",
        'Soft-red': 'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'Dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'Dark-blue': 'hsl(198, 62%, 26%)',
        'Dark-moderate-cyan': 'hsl(168, 34%, 41%)',
      }
    },
  },
  plugins: [],
}

