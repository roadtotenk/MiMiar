// Copyright 2023-2024 dev.mimiar authors & contributors
// SPDX-License-Identifier: Apache-2.0

const base = require('@mimiardev/dev/config/eslint.cjs');

module.exports = {
  ...base,
  ignorePatterns: [
    '**/dist/*',
    '**/build/*',
    '**/build-*/*',
    '**/coverage/*',
    '**/node_modules/*',
    '.github/**',
    '.vscode/**',
    '.yarn/**',
    '/.eslintrc.cjs',
    '/.eslintrc.js',
    '/.eslintrc.mjs',
    '/public/mimiar-injected.min.js'
  ],
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.eslint.json'
    ]
  },
  rules: {
    ...base.rules,
  }
};
