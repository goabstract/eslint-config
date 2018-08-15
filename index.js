module.exports = {
  parser: "babel-eslint",
  extends: ["react-app", "plugin:import/errors", "plugin:import/warnings"],
  env: { browser: false },
  plugins: ["mocha", "prettier"],
  rules: {
    // This doesn't work for us because we use `inject-loader` for testing JS
    // files, and can't be automatically configured in webpack.config.js.
    "import/no-webpack-loader-syntax": "off",
    "import/order": "warn",
    "mocha/no-exclusive-tests": "error",
    // Prettier automatically uses the least amount of parens possible, so this
    // does more harm than good.
    "no-mixed-operators": "off",
    // Enforce that code is formatted with prettier.
    "prettier/prettier": "error"
  }
};
