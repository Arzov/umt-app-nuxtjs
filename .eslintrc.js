module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // Global
    'nuxt/no-cjs-in-config': 'off',
    indent: 'off',
    'no-console': 'off',
    'no-trailing-spaces': ['error', {
      skipBlankLines: true
    }],
    curly: 'off',
    'dot-notation': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',
    'prefer-const': 'off',
    eqeqeq: ['warn', 'smart'],
    'no-async-promise-executor': 'off',

    // Vue
    'vue/no-unused-components': 'off',

    'vue/script-indent': ['error', 4, {
      baseIndent: 1,
      switchCase: 1,
      ignores: []
    }],

    'vue/html-indent': ['error', 4, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],

    'vue/multiline-html-element-content-newline': ['warn', {
      ignoreWhenEmpty: true,
      allowEmptyLines: true
    }],

    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: true
    }],

    'vue/require-v-for-key': 'off',

    'vue/valid-v-for': 'off',

    'vue/require-prop-types': 'off'
  }
}
