/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        welcome_right_side_rotation: {
            '0%': {
                top: '95%',
            },
            '20%' : {
                top: '0%',
            },
            '40%': {
                top: '-90%',
            },
            '60%': {
                top: '95%',
            },
            '80%': {
                top: '95%',
                opacity: '1',
            },
            '95%': {
                opacity: '0',
            },
            '100%': {
                top: '200%',
                opacity: '0',
            },   
        },

        welcome_left_side_rotation: {
            '0%': {
                top: '0%',
            },
            '80%': {
                top: '0%',
                opacity: '1',
            },
            '95%': {
                opacity: '0',
            },
            '100%': {
                top: '-100%',
                opacity: '0',
            }
        },
        moving_up: {
            '85%': {
                top: '0%',
            },
            '100%': {
                top: '-100%',
            }
        },
        moving_down: {
            '85%': {
                top: '0%',
            },
            '100%': {
                top: '100%',
            }
        },
        hide_at_end: {
            '100%': {
                display: 'none',
            }

        },
        // typing: {
        //     '0%' : {
        //         width: '0%',
        //     },
        //     '100%': {
        //         width: '100%',
        //     }
        // },
        // blinkcaret: {
        //     '0%': { borderColor: transparent },
        //     '50%': { borderColor: white },
        //     '100%': { borderColor: transparent },
        // }
        type: {
            '0%': { width: '0ch' },
            '5%, 10%': { width: '1ch' },
            '15%, 20%': { width: '2ch' },
            '25%, 30%': { width: '3ch' },
            '35%, 40%': { width: '4ch' },
            '45%, 50%': { width: '5ch' },
            '55%, 60%': { width: '6ch' },
            '65%, 70%': { width: '7ch' },
            '75%, 80%': { width: '8ch' },
            '85%, 90%': { width: '9ch' },
            '95%': { width: '10ch' },
          },

      },
      animation: {
        welcome_right_side_rotation_text: 'welcome_right_side_rotation 4.5s ease-in-out forwards',
        welcome_left_side_rotation_text: 'welcome_left_side_rotation 4.5s ease-in-out forwards',

        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      screens: {
        'max-2xl': {'max': '1535px'},
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
      },
      letterSpacing: {
        'title': '.07em',
      }

    },
  },
  plugins: [],
}

