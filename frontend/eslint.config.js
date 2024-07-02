// eslint.config.js
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
  ignores: [".nuxt/", "node_modules/"],
};
