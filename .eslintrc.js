module.exports = {
  extends: [
    'plugin:@angular-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],

    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'app', style: 'kebab-case' },
    ],

    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
      rules: {
        '@typescript-eslint/no-unused-vars': 'error'
      }
    },
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        '@angular-eslint/template/banana-in-a-box': 'error',
        '@angular-eslint/template/cyclomatic-complexity': 'error',
        '@angular-eslint/template/no-call-expression': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
      }
    },
  ],
};
