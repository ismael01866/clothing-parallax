module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  rules: {
    'semi': [2, 'always'],
    'no-multi-spaces': [2, { 
      exceptions: { 
        'ImportDeclaration': true,
        'VariableDeclarator': true
      }
    }],
    'key-spacing': 0
  }
};