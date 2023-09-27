/* eslint-disable no-undef */
const path = require('path')
const fs = require('fs-extra')
const { build, defineConfig } = require('vite')

const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const DefineOptions = require('unplugin-vue-define-options/vite')

const rootPath = process.cwd()
const outDir = path.join(rootPath, 'dist-icon')

function resolve(...urlOrUrls) {
  return path.resolve(rootPath, ...urlOrUrls)
}

const baseConfig = defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve('src/components/Icon/index.ts'),
      name: 'zgui-icon',
      fileName: (format) => `index.${format}.js`,
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

async function main() {
  fs.mkdirsSync('dist-icon')
  // build
  await build(baseConfig)
}

main()
