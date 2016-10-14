module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: false,
  },
  plugins: [
    'import',
    'react',
  ],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'global-require': 0,
    'no-console': 0,
    'func-names': 0,
    'object-curly-spacing': [1, 'never'],
  },
};
