module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/prop-types': 0
  }
};
