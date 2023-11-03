/* eslint-disable no-undef */
import { stringToCamelCase } from './utils.mjs'
import { join, resolve } from 'path'
import fs from 'fs-extra'

const { pathExistsSync, outputFileSync } = fs

function hyphenate(str) {
  if (!str) {
    return undefined
  }
  return stringToCamelCase(str)
}

const componentName = hyphenate(process.argv[2])

if (!componentName) {
  throw new Error('请输入组件名称！')
}
console.log('componentName:', componentName)

const rootPath = process.cwd()
const srcComponentsPath = join(rootPath, 'src/components')
const componentPath = join(srcComponentsPath, componentName)
const testPath = join(componentPath, '__tests__')
const docsPath = join(rootPath, 'docs')

console.log('componentPath:', componentPath)

if (pathExistsSync(componentPath)) {
  console.log(`组件：${componentName} 已存在`)
  process.exit(0)
} else {
  // component
  outputFileSync(
    join(componentPath, `${componentName}.vue`, ''),
    `
<template>
  <div></div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Zg${componentName}',
})
</script>
    `
  )

  // test
  outputFileSync(
    join(testPath, `${componentName}.test.ts`),
    `
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
    `
  )

  // style
  outputFileSync(join(componentPath, `style.scss`), '')
  // 自动导入组件的 style.scss 文件
  const stylePath = join(rootPath, 'src/styles/index.scss')
  let styleRes = fs.readFileSync(stylePath, { encoding: 'utf-8' })

  fs.writeFileSync(stylePath, styleRes + `@import '../components/${componentName}/style.scss';\n`)

  // types.ts
  outputFileSync(join(componentPath, `types.ts`), '')

  // index.ts
  const indexTpl = `
import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import COMPONENT_NAME from './COMPONENT_NAME.vue'

type COMPONENT_NAMEType = SFCWithInstall<typeof COMPONENT_NAME>
export const ZgCOMPONENT_NAME = withInstall(COMPONENT_NAME as COMPONENT_NAMEType)

export default ZgCOMPONENT_NAME

export * from './types'
    `
  outputFileSync(join(componentPath, 'index.ts'), indexTpl.replaceAll('COMPONENT_NAME', componentName))

  // 自动导出引入
  const indexPath = resolve(rootPath, 'src/index.ts')
  let res = fs.readFileSync(indexPath, { encoding: 'utf-8' })

  res = res.replace('// 引入组件', `// 引入组件\nimport Zg${componentName} from './${componentName}'`)
  res = res.replace(']', `, Zg${componentName}]`)
  res = res.replace(', install', `, Zg${componentName}, install`)

  res = res.replace('// 需要导出的类型', `// 需要导出的类型\nexport * from './components/${componentName}/types'`)

  fs.writeFileSync(indexPath, res)

  //global.d.ts
  const dtsPath = resolve(srcComponentsPath, 'global.d.ts')
  let dtsRes = fs.readFileSync(dtsPath, { encoding: 'utf-8' })

  dtsRes = `import Zg${componentName} from './${componentName}'\n` + dtsRes

  dtsRes = dtsRes.replace('GlobalComponents {', `GlobalComponents {\n    Zg${componentName}: typeof Zg${componentName}`)

  fs.writeFileSync(dtsPath, dtsRes)

  // docs - md
  const docsMdPath = resolve(docsPath, `components/`)
  const mdTpl = `
---
title: ${componentName} | Z-Element
description: ${componentName} 组件的文档
---

# ${componentName} xxxx
xxxxxxxx

## 基础用法
xxxxxxxxxxxxxxxxxxxxxxx

<preview path="../demo/${componentName}/Basic.vue" title="基础用法" description="${componentName} 组件的基础用法"></preview>

  `
  outputFileSync(join(docsMdPath, `${componentName}.md`), mdTpl)

  // docs - demo
  const docsDemoPath = resolve(docsPath, `demo/`)
  const demoTpl = `
<script lang="ts" setup>
  // import { ref } from 'vue'
  import Zg${componentName} from '@/components'


</script>
<template>
  <Zg${componentName} ></Zg${componentName}>
</template>
  `
  outputFileSync(join(docsDemoPath, `${componentName}/Basic.vue`), demoTpl)
}
