module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "no-tabs": 0,
    "no-multiple-empty-lines": 0,
    "object-curly-spacing": 0,
    "no-trailing-spaces": 0,
    "spaced-comment": 0,
    "array-bracket-spacing": 0,
    "space-before-function-paren": 0,
    "semi": 0,
  },
  globals: {}
}
