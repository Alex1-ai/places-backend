/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  plugins: [
    '@stylistic/js'
  ],
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    eqeqeq: 'error',
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    semi: [
      'error',
      'never' // Change to 'always' to enforce semicolon at the end
    ],
    quotes: [
      'error',
      'single'
    ],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { before: true, after: true }
    ],
    'no-console': 0
  }
}
