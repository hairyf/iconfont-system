const _ = require('lodash')

module.exports = _.merge(require('@tuimao/eslint/ts-vue@3.js'), {
  rules: {
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'vue/html-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
})
