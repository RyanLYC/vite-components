// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// import AdComponent from './AdComponent.vue'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import '../../../components/styles/index.scss'
import './custom.css'
// @ts-ignore
import * as Icons from '@/components/Icon'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
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
