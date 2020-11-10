module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
        jest: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
};
