module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'memory',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': './src',
          '@core-components': './src/components/core',
          '@components': './src/components',
          '@hooks': './src/hooks',
        },
        extensions: ['.ts', '.tsx'],
      },
    },
  ],
};
