module.exports = {
    "env": {
        "browser": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "2016",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {}
};
