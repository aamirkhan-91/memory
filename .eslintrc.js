module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'simple-import-sort'],
  rules: {
    'react/jsx-boolean-value': 2,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'linebreak-style': ['error', 'unix'],
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/named': 2,
    indent: ['error', 2, { SwitchCase: 1 }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src/*', './src'],
          ['@core-components/*', './src/components/core'],
          ['@components/*', './src/components'],
          ['@hooks/*', './src/hooks'],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
