module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    // overwrite airbnb and enable all import errors/warnings
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    browser: false,
  },
  plugins: [
    'flowtype',
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
    'import/no-webpack-loader-syntax': 0,
  },
};
