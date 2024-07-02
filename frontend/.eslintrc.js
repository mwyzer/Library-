module.exports = {
  root: true,
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
  ignorePatterns: [".nuxt/*", "node_modules/*"]
};
