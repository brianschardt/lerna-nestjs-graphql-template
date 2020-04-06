module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'ignorePackages',
    'no-unused-vars': 'off',
  },
};
