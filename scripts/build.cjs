/* eslint-disable no-undef */

/** 这个打包 方式 有问题 待调试vite解决，vite config 中 没问题 */

const path = require('path')
const fs = require('fs-extra')
const { build, defineConfig } = require('vite')

const vue = require('@vitejs/plugin-vue')
// const vueJsx = require('@vitejs/plugin-vue-jsx')
// const dts = require('vite-plugin-dts')
// const DefineOptions = require('unplugin-vue-define-options/vite')

const rootPath = process.cwd()
const outDir = path.join(rootPath, 'dist')

function resolve(...urlOrUrls) {
  return path.resolve(rootPath, ...urlOrUrls)
}

const baseConfig = defineConfig({
  plugins: [
    vue(),
    // vueJsx(),
    // DefineOptions(),
    // dts({
    //   include: ['src/components'],
    //   outputDir: path.resolve(outDir, 'types'),
    // }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve('src/components/index.ts'),
      name: 'zgui',
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
  fs.mkdirsSync('dist')
  // build
  await build(baseConfig)
}

main()
