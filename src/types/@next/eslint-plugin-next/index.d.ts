declare module '@next/eslint-plugin-next' {
  import type {
    ESLint,
    Linter,
  } from 'eslint'
  // TODO: change to `Linter.Config` when next.js converts to flat config
  export const configs: {
    recommended: Linter.BaseConfig,
    strict: Linter.BaseConfig,
  }
  export const flatConfigs: {
    recommended: Linter.BaseConfig,
    strict: Linter.BaseConfig,
  }
  export const rules: NonNullable<ESLint.Plugin['rules']>
}
