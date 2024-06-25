/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  proseWrap: 'always',
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.json',
      options: { parser: 'json' },
    },
  ],
};
