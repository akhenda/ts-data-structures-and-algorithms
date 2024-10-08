module.exports = {
  extends: ['plugin:@hendacorp/basic'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
  rules: {
    // // turn on errors for missing imports
    // 'import/no-unresolved': 'error',
    // '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    // 'no-console': ['error', { allow: ['info', 'warn', 'error', 'table'] }],
    // 'no-undef': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      { classes: ['field', 'constructor', 'accessor', 'set', 'get', 'method'] },
    ],
  },
};
