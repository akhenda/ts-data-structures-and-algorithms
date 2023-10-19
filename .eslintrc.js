module.exports = {
  extends: ['plugin:@hendacorp/basic'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    // // turn on errors for missing imports
    // 'import/no-unresolved': 'error',
    // '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // 'no-console': ['error', { allow: ['info', 'warn', 'error', 'table'] }],
    // 'no-undef': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
