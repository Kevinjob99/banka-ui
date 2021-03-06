module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": "airbnb",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions":true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 0,
    "import/no-extraneous-dependencies": [2, {
      "devDependencies": ["**/*.test.js", "**/*.spec.js", "src/setupTests.js", "build-utils/*"]
    }],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "comma-dangle": 2,
    "no-console": 2,
    "class-methods-use-this":0,
    "curly": ["error", "multi-line"],
    "import/no-unresolved": [2, { "commonjs": true }],
    "no-shadow": ["error", { "allow": ["req", "res", "err"] }],
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build-utils/webpack.common.js"
      }
    }
  },
};
