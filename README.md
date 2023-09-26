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


#### 1.7 安装 sass
yarn add -D sass  
#### 1.7 Postcss CSS 方案 基础设置 (这里没有使用)
* 安装插件 PostCSS Intellisense and Highlighting

```js
// postcss.config.cjs

/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      plugins: {
        beforeEach: [
          require('postcss-for'),
          require('postcss-color-mix')
        ]
      }
    }),
  ]
}
```

### 2.SVG Icons （目标独立打包出icons）
1. 动态生成icon 的 tsx文件
```js
"gen:icon": "node scripts/genIcons.mjs"
```
2. vitepress 引入

