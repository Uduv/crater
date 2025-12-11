// .eslintrc.js

module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/no-mutating-props': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
