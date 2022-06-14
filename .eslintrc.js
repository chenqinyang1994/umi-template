module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
    tt: true,
    wx: true,
  },
  rules: {
    'no-underscore-dangle': [0],
    'no-param-reassign': [0],
    '@typescript-eslint/no-unused-vars': [1],
    'jsx-a11y/no-autofocus': [0],
    'global-require': [1],
    'no-nested-ternary': [1],
    'react-hooks/rules-of-hooks': [2],
    'react-hooks/exhaustive-deps': [2],
    'import/no-cycle': [0],
  },
};
