import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  /** 更新时间将显示在页面的右下角 */
  lastUpdated: true,
  /**URL中删除尾随的.html */
  cleanUrls: true,
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src/', import.meta.url)),
      },
    },
    server: {
      port: 5174, // 设置服务启动端口号
      open: true, // 设置服务启动时是否自动打开浏览器
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
      '/components/': { base: '/components/', items: sidebarGuide() },
      // '/reference/': { base: '/reference/', items: sidebarReference() },
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You',
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
      text: 'Components',
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

/* prettier-ignore */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Components',
      collapsed: false,
      items: [
        { text: 'Button', link: 'button' },
        { text: 'Icon', link: 'icon' },
      ]
    },
    // {
    //   text: 'Writing',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown Extensions', link: 'markdown' },
    //     { text: 'Asset Handling', link: 'asset-handling' },
    //     { text: 'Frontmatter', link: 'frontmatter' },
    //     { text: 'Using Vue in Markdown', link: 'using-vue' },
    //     { text: 'Internationalization', link: 'i18n' }
    //   ]
    // },
    // {
    //   text: 'Customization',
    //   collapsed: false,
    //   items: [
    //     { text: 'Using a Custom Theme', link: 'custom-theme' },
    //     { text: 'Extending the Default Theme', link: 'extending-default-theme' },
    //     { text: 'Build-Time Data Loading', link: 'data-loading' },
    //     { text: 'SSR Compatibility', link: 'ssr-compat' },
    //     { text: 'Connecting to a CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: 'Experimental',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA Mode', link: 'mpa-mode' },
    //     { text: 'Sitemap Generation', link: 'sitemap-generation' }
    //   ]
    // },
    // { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
  ]
}

// function sidebarReference(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: 'Reference',
//       items: [
//         { text: 'Site Config', link: 'site-config' },
//         { text: 'Frontmatter Config', link: 'frontmatter-config' },
//         { text: 'Runtime API', link: 'runtime-api' },
//         { text: 'CLI', link: 'cli' },
//         {
//           text: 'Default Theme',
//           base: '/reference/default-theme-',
//           items: [
//             { text: 'Overview', link: 'config' },
//             { text: 'Nav', link: 'nav' },
//             { text: 'Sidebar', link: 'sidebar' },
//             { text: 'Home Page', link: 'home-page' },
//             { text: 'Footer', link: 'footer' },
//             { text: 'Layout', link: 'layout' },
//             { text: 'Badge', link: 'badge' },
//             { text: 'Team Page', link: 'team-page' },
//             { text: 'Prev / Next Links', link: 'prev-next-links' },
//             { text: 'Edit Link', link: 'edit-link' },
//             { text: 'Last Updated Timestamp', link: 'last-updated' },
//             { text: 'Search', link: 'search' },
//             { text: 'Carbon Ads', link: 'carbon-ads' },
//           ],
//         },
//       ],
//     },
//   ]
// }