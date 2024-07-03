const js = require("@eslint/js");
const vue = require("eslint-plugin-vue");
const babelEslint = require("babel-eslint");

module.exports = [
  {
    ignores: [".nuxt/", "node_modules/"],
  },
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      parser: babelEslint,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      vue,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      ...js.configs.recommended.rules,
      ...vue.configs.recommended.rules,
    },
  },
];
