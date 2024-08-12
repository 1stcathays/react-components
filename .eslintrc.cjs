module.exports = {
  extends: ['@1stcathays/eslint-config', 'plugin:storybook/recommended'],
  ignorePatterns: ['vitest.config.ts', 'node_modules', 'dist', 'storybook-static'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['./*.js', './*.mjs'],
      env: {
        node: true,
      },
    },
  ],
};
