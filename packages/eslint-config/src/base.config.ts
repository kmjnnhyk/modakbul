import tseslint, { type ConfigArray } from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

const baseLintConfig: ConfigArray = [
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];

export default baseLintConfig;
