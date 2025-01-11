import tseslint from 'typescript-eslint';
import basePlugin from '@modakbul/eslint-config/base';

export default tseslint.config(
  basePlugin,
  {
    ignores: ['.next/**/*'],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
  }
);
