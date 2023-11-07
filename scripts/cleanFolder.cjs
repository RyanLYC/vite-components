/* eslint-disable no-undef */
const { rimraf } = require('rimraf')

/** 清空 vite-components-last 文件夹,除了.git文件夹*/
rimraf('./docs/.vitepress/vite-components-last', {
  filter: (path) => {
    if (path.includes('.git')) {
      return false
    }
    return true
  },
})
