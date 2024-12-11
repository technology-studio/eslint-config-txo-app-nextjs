declare module 'eslint-plugin-react-hooks' {
  import type {
    ESLint, Linter,
  } from 'eslint'
  export const configs: {
    recommended: Linter.Config,
  }
  export const rules: NonNullable<ESLint.Plugin['rules']>
}
