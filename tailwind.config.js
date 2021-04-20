const {
  Container,
  Layout,
  Typography,
  Spacing,
  GridGap
} = require('@area17/a17-tailwind-plugins')

const spacings = {
  '0': 0,
  px: '1px',
  '-px': '-1px',
  '1/2': '2px',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '7': '28px',
  '10': '40px',
  '13': '52px',
  '14': '56px',
  '15': '60px',
  '17': '68px',
  '20': '80px',
  '25': '100px',
  '26': '104px',
  '35': '140px',
  '50': '200px',
  '65': '260px',
  '85': '340px',
  '86': '344px',
  '90': '340px',
  '20-screen': '20vh'
}

module.exports = {
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },

  darkMode: false,

  theme: {
    corePlugins: {
      container: false
    },

    colors: {
      white: '#f6f6f6',
      black: '#202020'
    },

    spacing: {
      ...spacings
    },

    screens: {
      xs: { max: '543px' },
      sm: '544px',
      md: '766px',
      lg: '1023px',
      xl: '1440px'
    },

    mainColWidths: {
      xs: 'auto',
    },

    outerGutters: {
      xs: '16px',
      sm: '16px',
      md: '32px',
      lg: '32px',
      xl: '32px'
    },

    spacingGroups: (theme) => ({
      'inner-gutter': theme('innerGutters'),
      'outer-gutter': theme('outerGutters'),
      'outer-1': {
        xs: theme('spacing.15'),
        lg: theme('spacing.25')
      },
      'inner-1': {
        xs: theme('spacing.6'),
        md: theme('spacing.10'),
        lg: theme('spacing.16')
      },
    }),

    typography: (theme) => ({
      sets: {
        'body': {
          settings: {
            xs: {
              'font-family': "Monument Grotesk, sans-serif",
              'font-size': '1rem',
              'line-height': 1.2,
              'font-weight': 400
            },
            sm: {
              'font-size': '1.125rem'
            },
            md: {
              'font-size': '1.25rem'
            },
            lg: {
              'font-size': '1.5rem'
            },
            xl: {
              'font-size': '1.875rem'
            }
          }
        },
        'display': {
          settings: {
            xs: {
              'font-family': "Monument Grotesk, sans-serif",
              'font-size': '1.875rem',
              'line-height': 1.1,
              'font-weight': 400
            },
            sm: {
              'font-size': '2.25rem'
            },
            md: {
              'font-size': '3rem'
            },
            lg: {
              'font-size': '4.16vw',
              'letter-spacing': '-0.01em'            },
            xl: {
              'font-size': '5vw',
              'line-height': 1,
              'letter-spacing': '-0.015em'
            }
          }
        },
      }
    })
  },

  plugins: [
    Container,
    Layout,
    Typography,
    Spacing,
    GridGap
  ],
}
