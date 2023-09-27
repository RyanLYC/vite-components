/* eslint-disable no-undef */
import { stringToCamelCase } from './utils.mjs'
import { join } from 'path'
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
console.log('componentPath:', componentPath)

if (pathExistsSync(componentPath)) {
  console.log(`组件：${componentName} 已存在`)
  process.exit(0)
} else {
  // component
  outputFileSync(
    join(componentPath, `${componentName}.vue`, ''),
    `<template>
      <div></div>
    </template>

    <script setup lang="ts">
    </script>
    `
  )

  // test
  outputFileSync(
    join(componentPath, `${componentName}.test.ts`),
    `
    import { describe, test, expect } from 'vitest'
    import { mount } from '@vue/test-utils'
    `
  )

  // style
  outputFileSync(join(componentPath, `style.scss`), '')

  // index.ts
  const indexTpl = `
    import { type App } from 'vue'
    import COMPONENT_NAME from './COMPONENT_NAME.vue'

    COMPONENT_NAME.name = 'ZgCOMPONENT_NAME'
    COMPONENT_NAME.install = (app: App) => {
      app.component(COMPONENT_NAME.name, COMPONENT_NAME)
    }

    export default COMPONENT_NAME;
    `
  outputFileSync(
    join(componentPath, 'index.ts'),
    indexTpl.replaceAll('COMPONENT_NAME', componentName)
  )
}
