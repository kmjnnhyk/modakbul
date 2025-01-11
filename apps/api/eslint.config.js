import tseslint from 'typescript-eslint';
import baseConfigs from '@modakbul/eslint-config/base';

export default tseslint.config({
  files: ['src/**/*.ts', 'src/**/*.tsx'],
  extends: [...baseConfigs],
});
