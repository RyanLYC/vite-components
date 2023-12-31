## 查看文档
[文档](https://ryanlyc.github.io/vite-components-last/components/button)

## 组件库使用
```shell
  yarn add vite-components-last -S
```
- 全局引入
```js
import zgui from 'vite-components-last'
import 'vite-components-last/dist/style.css'

// icon
import { LoadingOutlined, ArrowUpOutlined } from 'vite-components-last/icon'
```
- 全局引入的时候，如果 volar没有组件属性提示， 需要 ts 文件引入 （我的volar v1.8.18 不用）
```js
// env.d.ts 文件中添加
/// <reference types="./node_modules/vite-components-last/dist/types" />
// 注意 tsconfig.json
"include": ["env.d.ts",....]

```
`思考了下` 主要是要把 ts 的声明文件存放到node_modules的@types文件夹中， tsconfig.json的types 中 增加 'vite-components-last',
`理论上应该不用。package.json 里面type 都定义好了。`

- 局部引入
```js
import { ZgButton } from 'vite-components-last'
import { LoadingOutlined, ArrowUpOutlined } from 'vite-components-last/icon'
```



## 项目构建 流程
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

### 2. 自动化生成组件模版
```js
    "gen": "node scripts/createComponent.mjs", // 创建完成后 需要重启下 vscode， 否则很多类型提示错误 ，甚至vue文件都没有代码提示
```
`yarn gen tooltip`

1. 创建组件模版 
2. global.d.ts 中增加组件的全局定义
3. index.ts 中 自动引入并导入types
4. style 中自动引入
5. docs md 文件建立
6. docs demo Basic.vue 文件建立
7. 自动引入到文档菜单第一个的位置，自己移动到对应的位置中
8. 自动创建 devDemo 并在 App.vue文件中引入 

### 3.SVG Icons 动态生成icon 的 tsx文件
```js
"gen:icon": "node scripts/genIcons.mjs",
"build:icon": "node scripts/build-icon.js",
```
1. 根据 icon 文件夹中的svg 文件自动生成 对应icon的 tsx 组件文件
2. 独立打包出icons `build:icon`

### vite config 配置 build
打包组件库

### script buile-types 打包声明文件 
 * 使用 ts-morph 生成 .d.ts 文件，@vue/compiler-sfc 解释vue文件
 * @vue/compiler-sfc 解释3.3.4 最新语法有问题 

### vue-tsc 打包 声明文件

### 复制全局定义组件文件到dist中并引入
```js
  node scripts/genGlobalVueDts.cjs
```
主要是因为全局注入组件库的时候，volar组件的属性没有提示信息。
```js
import ZgButton from './Button'

declare module 'vue' {
  export interface GlobalComponents {
    ZgButton: typeof ZgButton
  }
}

```
文件复制到dist type中，并在index.d.ts中 reference

### buid & publish
```js
    "build": "rimraf ./dist && yarn build-only && node scripts/genGlobalVueDts.cjs && move-folder dist-icon dist/icon -d && move-folder dist-types dist/types -d",

    // 删除dist文件夹
    // 同时 打包 lib icon 声明文件
    // 复制全局定义组件文件到dist中并引入
    // 移动icon 和 声明文件到 dist 对应的位置
```

### vitepress 生成doc文档
```js
 "docs:build": "yarn cleanFolder && vitepress build docs && move-folder ./docs/.vitepress/dist ./docs/.vitepress/vite-components-last -d && yarn docs:release",

  // vite-components-last 文件夹是 github 上面的独立仓库，用于展示组件网站
  // 删除除了.git的文件
  // 打包 docs
  // 复制 dist 文件夹的文件到 vite-components-last文件夹 并删除
  // 自动发布到 github 需要输入一个提交信息
```

### Vitest & vue-test-utils 测试框架
* yarn add  vitest -D
* yarn add  @vue/test-utils -D

` 也可以使用 vue-testing-library `
