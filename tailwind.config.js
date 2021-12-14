module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    fontSize: {
      H1: ['48px', '60px'],
      H2: ['32px', '40px'],
      H3: ['20px', '25px'],
      Body: ['18px', '22px'],
      '6X6': ['44px', '55px'],
      '4X4': ['56px', '69px'],
    },
    colors: {
      dark: '#152938',
      primary: {
        default: '#FDA214',
        hover: '#FFB84A',
      },
      secondary: {
        default: '#BCCED9',
        active: '#304859',
        hover: '#6395B8',
      },
      white: {
        default: '#F2F2F2',
      },
    },
    textColor: {
      white: '#FCFCFC',
      grey: {
        light: '#304859',
        dark: '#7191A5',
      },
    },
    extend: {},
  },
  plugins: [],
};
