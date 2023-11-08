import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  appearance: true, // 白天 黑夜
  /** 更新时间将显示在页面的右下角 */
  lastUpdated: true,
  /**URL中删除尾随的.html */
  cleanUrls: true,
  base: '/vite-components-last/',
  vite: {
    // @ts-ignore
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src/', import.meta.url)),
      },
    },
    server: {
      port: 5174, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
    },
  },

  markdown: {
    /** Math Equations  need： npm add -D markdown-it-mathjax3*/
    // math: true,
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },

  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   },
  // },
  /** html d head 标签信息 */
  // head: [],

  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    nav: nav(),

    sidebar: {
      '/components/': { base: '/components/', items: sidebarComponents() },
      // '/reference/': { base: '/reference/', items: sidebarReference() },
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/RyanLYC/vite-components' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ryan Liang',
    },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //   },
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg',
    // },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    {
      text: '组件',
      link: '/components/button',
      activeMatch: '/components/',
    },
    // {
    //   text: 'Reference',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/',
    // },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Basic 基础组件',
      collapsed: false,
      items: [
        // 下面这句注释不可删除，脚本从这里插入自动引入新创建的组件文档，自己移动到正确列表中
        // 导入组件文档
        { text: 'Color 色彩', link: 'color' },
        { text: 'Button 按钮', link: 'button' },
        { text: 'Icon 图标', link: 'icon' },
      ],
    },
    {
      text: 'Form 表单组件',
      collapsed: false,
      items: [
        { text: 'Input 输入框', link: 'input' },
        { text: 'Switch 开关', link: 'switch' },
        { text: 'Checkbox 多选框', link: 'checkbox' },
      ],
    },
    {
      text: 'Data 数据展示',
      collapsed: false,
      items: [
        { text: 'Collapse 折叠面板', link: 'collapse' },
        { text: 'Card 卡片', link: 'card' },
      ],
    },
    {
      text: 'Feedback 反馈组件',
      collapsed: false,
      items: [
        { text: 'Alert 提示', link: 'alert' },
        { text: 'Message 消息提示', link: 'message' },
        { text: 'Tooltip 文字提示', link: 'tooltips' },
      ],
    },
  ]
}
