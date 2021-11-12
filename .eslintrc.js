const rules = {
  'func-names': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/require-default-props': 'off',
  'react-hooks/jsx-props-no-spreading': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/button-has-type': 'off',
  'react/function-component-definition': 'off',
  'import/prefer-default-export': 'off',
  'no-param-reassign': [
    'error',
    { props: true, ignorePropertyModificationsFor: ['state'] },
  ],
};

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier'],
  rules,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          ecmaVersion: 2019,
          sourceType: 'module',
          jsx: true,
        },
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        ...rules,
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['variable'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          {
            selector: ['typeAlias'],
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error'],
        'import/no-default-export': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
