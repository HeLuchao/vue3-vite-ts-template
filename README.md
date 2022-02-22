# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 初始化工程

```bash
pnpm install
pnpm run dev
```

[pnpm](https://pnpm.io/zh/motivation)

## features

- Jsx 支持 @vitejs/plugin-vue-jsx
- mock.js 支持 vite-plugin-mock
- VueRouter
- CSS 预编译 Sass
- CSS 预编译 Sass
- Axios 支持
- 状态管理 Pinia 支持
- EditorConfig
- ESLint
- Prettier
- husky 和 lint-staged
- commitLint
- changelog 和 standVersion
- commitizen

## 参考文献

[Vue3.0 官网](https://v3.cn.vuejs.org/)

[Vue3.0 学习教程与实践方案](https://vue3.chengpeiquan.com/)

## 更新日志

[CHANGELOG](./CHANGELOG.md)

## Git 贡献提交规范

- 参考
  [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范
  ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
