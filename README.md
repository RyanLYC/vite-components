### 1. 创建项目

#### 1.1 npm create vue@3

* add ts
* add jsx
* no router
* no pinia
* no unit testing --- to do ....
* no end-to end testing
* add eslint
* add prettier

* yarn

#### 1.2 git
git init
git add .
git commit -m 'init project'
git push

[参考 vue3-template](https://github.com/RyanLYC/vue3-template)

#### 1.3 集成 EditorConfig 配置
#### 1.4 .eslintrc.cjs
#### 1.4 .prettierrc.cjs 替换 .prettierrc.json
#### 1.5 结合 vite 使用eslint
yarn add vite-plugin-eslint -D

```ts
// vite.config.ts

import eslint from 'vite-plugin-eslint'
  plugins: [vue(), vueJsx(), eslint()],


// 在 package.json 的 scripts 增加 prettier:format 命令  
"format": "prettier --config .prettierrc.cjs --write src/"   

```

#### 1.6  集成 husky、lint-staged、Commitizen 、commitlint
yarn add commitizen cz-customizable husky lint-staged @commitlint/cli @commitlint/config-conventional -D 





