module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    '@typescript-eslint/no-explicit-any': ['off'], // 允许typescript使用any
    '@typescript-eslint/no-use-before-define': 'off', // 允许在声明函数前使用函数
    'no-prototype-builtins': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off', // 允许非驼峰命名
    '@typescript-eslint/no-unused-vars': 'off', // 允许声明却不使用变量
    '@typescript-eslint/no-empty-function': 'off', // 允许声明空的箭头函数
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
