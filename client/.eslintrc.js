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
    'arrow-body-style': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-no-bind': 0,
    'react/function-component-definition': 0,
    'react/no-array-index-key': 0,
    'react/jsx-no-duplicate-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-constructed-context-values': 1,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-underscore-dangle': 0
  }
};
