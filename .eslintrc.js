module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // make sure this is always the last configuration in the extends array.
        'plugin:prettier/recommended', // display prettier errors as ESLint errors.
    ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    ignorePatterns: ['/*.*', 'lib/'],
    rules: {
        'tsdoc/syntax': 'warn',
    },
};
