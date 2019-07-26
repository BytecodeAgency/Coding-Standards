module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'airbnb',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ["security", "prettier"],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    "rules": {
        "prettier/prettier": ["error"]
    }
}
