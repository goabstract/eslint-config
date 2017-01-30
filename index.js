module.exports = {
  parser: "babel-eslint",
  extends: [ "react-app" ],
  env: { browser: false },
  plugins: [ "prettier" ],
  rules: { "prettier/prettier": "error", "import/no-webpack-loader-syntax": 0 }
};
