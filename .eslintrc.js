const singleLineString = `^\\s*[^\\s]*'([^']|(\\\\'))*',?;?$`
const doubleQuoted = singleLineString.replace(/'/g, '"')
const template = singleLineString.replace(/'/g, '`')

const maxLengthIgnorePattern = `(${singleLineString})|(${doubleQuoted})|(${template})`

module.exports = {
  root: false,
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    curly: ["error", "multi"],

    'prettier/prettier': 'off',
    'max-len': ['error', { code: 150, ignorePattern: maxLengthIgnorePattern }],
    'arrow-body-style': ["error", "as-needed"],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'semi': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'keyword-spacing': ["error", { before: true, after: true }],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/order': ['warn', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'ignore'
    }],
    'import/first': 'off',
    'import/no-useless-path-segments': 'off',
    'import/prefer-default-export': 'off',

    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'comma', requireLast: true },
      singleline: { delimiter: 'comma', requireLast: false }
    }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true
  },
}
