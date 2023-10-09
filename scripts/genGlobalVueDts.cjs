/* eslint-disable no-undef */
const fs = require('fs-extra')
const path = require('path')

const rootPath = process.cwd()
const srcComponentsPath = path.join(rootPath, 'src/components')
const targetPath = path.join(rootPath, 'dist/types/global.d.ts')
const indexPath = path.join(rootPath, 'dist/types/index.d.ts')

function copyDtsFile() {
  const dtsPath = path.resolve(srcComponentsPath, 'global.d.ts.template')
  fs.copyFileSync(dtsPath, targetPath)

  // 插入引入到 index.d.ts 文件中
  let res = fs.readFileSync(indexPath, { encoding: 'utf-8' })

  res =
    '/// <reference types="./global.d.ts" />\n' + res.replace(`import '../styles/index.scss';`, '')

  fs.writeFileSync(indexPath, res, 'utf8')
}

copyDtsFile()
