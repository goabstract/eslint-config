module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: false
  },
  plugins: [
    'import',
    'react'
  ],
  rules: {
    'global-require': 0,
    'import/no-unresolved': [2, {ignore: ['electron']}],

    'react/prefer-stateless-function': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,

    'react/jsx-no-bind': 1,
    'max-len': [1, 160, 2],
    'prefer-template': 1,
    'quote-props': 1,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 1,
    'no-case-declarations': 1,

    'no-console': 0,
    'no-var': 0,
    'vars-on-top': 0,
    'comma-dangle': 0,

    'no-unused-vars': [2, {vars: 'all', args: 'none', varsIgnorePattern: '[iI]gnored'}],

    'no-undef': 2,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'object-curly-spacing': [1, 'never']
  }
};
