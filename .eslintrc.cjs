// .eslintrc.cjs
module.exports = {
    root: true,
    extends: [
      'next/core-web-vitals',    // includes nextjs plugin + react/jsx-runtime support
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint'],
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      // disable the old “must import React” check now handled by the new JSX runtime
      'react/react-in-jsx-scope': 'off',
      // turn unused-vars into warnings (so they don’t fail build)
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-explicit-any': ['warn']
    }
  }