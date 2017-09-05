module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "vars-on-top": [
          "error"
        ],
        "no-undef": [
          "error"
        ],
        "no-new-object": "error",
        "object-property-newline": "error",
        "no-new-func": "error",
        "curly": "error",
        "brace-style": "error",
        "keyword-spacing": ["error", { "overrides": {
          "if": { "after": false },
          "for": { "after": false },
          "while": { "after": false }
          }
        }],
        "eqeqeq": ["error", "always"],
        "default-case": "error"
    }
};
