module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended' // 添加解决冲突插件
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx']
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/comment-directive': 'off',
    'vue/no-multiple-template-root': 'off', // 启用根层级多个标签
    'vue/script-setup-uses-vars': 'error', // 标记 setup 中的变量为 used
    'no-useless-escape': 'off',
    'no-console': 'off'
    // 解决 prettier 行尾报错
    // 'prettier/prettier': ['error', { endOfLine: 'auto' }],
  }
};
