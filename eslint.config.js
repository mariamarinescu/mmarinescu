import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['node_modules'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        React: 'writable',
      },
    },
    plugins: { react },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+ JSX doesn't require React import
      'react/prop-types': 'off', // Disable PropTypes if you're using TypeScript or prefer not using them
    },
  },
  prettier,
];
