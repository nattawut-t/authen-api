module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": "airbnb-base",
  "rules": {
    "semi": [
      "error",
      "never"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "global-require": 0,
    "import/no-dynamic-require": 0,
  },
}