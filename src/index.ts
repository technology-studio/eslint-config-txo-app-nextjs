/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-11-11T16:26:28+01:00
 * @Copyright: Technology Studio
**/

import {
  stylisticConfig,
  typescriptConfigList,
  typescriptEslintConfig,
  jestConfig,
} from 'eslint-config-txo-typescript'
import {
  reactConfig,
} from 'eslint-config-txo-typescript-react'
import { FlatCompat } from '@eslint/eslintrc'
import nextPlugin from '@next/eslint-plugin-next'

// TODO: remove when next.js has a flat config
const compat = new FlatCompat()

export const configList = typescriptEslintConfig(
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    extends: [
      ...compat.config(nextPlugin.configs.recommended),
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- remove when migrated to prettier
      stylisticConfig,
      ...typescriptConfigList,
    ],
  },
  {
    files: ['!playwright/**/*'],
    extends: [
      reactConfig,
      {
        settings: {
          react: {
            version: 'detect',
          },
        },
      },
    ],
  },
  {
    files: ['jest/**/*'],
    extends: [jestConfig],
  },
  {
    ignores: [
      '.next',
      '.next/**/*',
      '.releaserc.js',
      '.vercel/**/*',
      'commitlint.config.js',
      'coverage/**/*',
      'eslint-ci.config.js',
      'eslint.config.js',
      'jest.config.js',
      'lib',
      'next-env.d.ts',
      'next.config.mjs',
      'node_modules',
      'postcss.config.mjs',
      'release.config.js',
      'src/GraphQl/index.ts',
    ],
  },
)
