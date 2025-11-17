import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript + Prettier + custom rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': 'error',

      // Custom rules
      'import/no-default-export': 'off',
      'import/prefer-default-export': 'off',
      'no-nested-ternary': 'off',
      'no-plusplus': 'off',
      'no-undef': 'off',

      // TS-specific rules
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // Jest overrides for test files
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    languageOptions: {
      globals: {
        jest: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
]
