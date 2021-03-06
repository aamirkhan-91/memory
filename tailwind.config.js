// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      xs: '500px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    fontSize: {
      H1: ['48px', '60px'],
      H2: ['32px', '40px'],
      H3: ['20px', '25px'],
      Body: ['18px', '22px'],
      '4X4': ['56px', '0px'],
      '6X6': ['44px', '0px'],
      '4X4-mobile': ['40px', '0px'],
      '6X6-mobile': ['24px', '30px'],
    },
    colors: {
      dark: '#152938',
      orange: {
        DEFAULT: '#FDA214',
        hover: '#FFB84A',
      },
      blue: {
        DEFAULT: '#304859',
        hover: '#6395B8',
        light: '#BCCED9',
      },
      grey: {
        DEFAULT: '#DFE7EC',
        dark: '#304859',
      },
      white: {
        DEFAULT: '#F2F2F2',
      },
    },
    textColor: {
      dark: '#152938',
      white: '#FCFCFC',
      grey: {
        light: '#7191A5',
        dark: '#304859',
      },
    },
  },
  plugins: [],
};
