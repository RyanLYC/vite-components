// .vitepress/theme/index.js
// import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// import AdComponent from './AdComponent.vue'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'

import zgui from '../../../src/components/'
import '@/styles/index.scss'

import * as Icons from '../../../src/components/Icon'
import '@/components/Icon/style/index.scss'

import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(zgui)
    app.component('demo-preview', ElementPlusContainer)
    Object.keys(Icons).forEach((iconName) => {
      app.component(iconName, Icons[iconName])
    })
  },
  // 插入组件 自定义
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     'doc-before': () => h(AdComponent),
  //   })
  // },
}
