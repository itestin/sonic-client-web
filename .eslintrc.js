// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    // Parser that checks the content of the <script> tag
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb JavaScript Style Guide https://github.com/airbnb/javascript
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
  rules: {
    'prettier/prettier': 1,
    // Vue: Recommended rules to be closed or modify
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    // Vue: Add extra rules
    'vue/custom-event-name-casing': [2, 'camelCase'],
    'vue/no-v-text': 1,
    'vue/padding-line-between-blocks': 1,
    'vue/require-direct-export': 1,
    'vue/multi-word-component-names': 0,
    // Allow @ts-ignore comment
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 0,
    'import/extensions': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'prefer-regex-literals': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 'warn',
    'no-use-before-define': 'warn',
    'no-unused-vars': 'warn',
    'default-case': 'warn',
    'no-restricted-syntax': 'warn',
    'no-underscore-dangle': 'warn',
    'no-shadow': 'warn',
    'vue/valid-v-for': 'warn',
    'guard-for-in': 'warn',
    'no-plusplus': 'warn',
    eqeqeq: 'warn',
    'no-undef': 'warn',
    radix: 'warn',
    'no-unused-expressions': 'warn',
    'prefer-spread': 'warn',
    'vue/require-v-for-key': 'warn',
    'no-fallthrough': 'warn',
    'no-restricted-globals': 'warn',
    'vue/no-unused-vars': 'warn',
    'prefer-destructuring': 'warn',
    'vue/no-deprecated-v-on-native-modifier': 'warn',
    'array-callback-return': 'warn',
    'import/no-mutable-exports': 'warn',
    'consistent-return': 'warn',
    'no-useless-concat': 'warn',
    'class-methods-use-this': 'warn',
    'import/prefer-default-export': 'warn',
    'vue/no-mutating-props': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/no-duplicate-attributes': 'warn',
    'no-bitwise': 'warn',
    'vue/require-prop-type-constructor': 'warn',
    'import/order': 'warn',
    'prefer-const': 'warn',
  },
};