/* eslint-disable no-undef */
import { join, basename } from 'path'
import { readdirSync, writeFileSync } from 'fs'

import optimizeSvg from './optimizeSvg.mjs'
import { stringToCamelCase } from './utils.mjs'

const outputPath = join(process.cwd(), './components/icon/packages')
const outpuIndexPath = join(process.cwd(), './components/icon')
const exportAllIconPath = join(process.cwd(), './docs/demo/Icon/icons.ts')
const iconFileBase = join(process.cwd(), './icons')
const iconFiles = readdirSync(iconFileBase)

const SVG_COMPONENT_TMPLATE = `
import ZgIconWrapper from '../IconWrapper'
import type { IconPropsType } from '../types'
import '../style/index.scss'

export default (props?: IconPropsType) => (
    <ZgIconWrapper {...props} ATTRS>
        SVG
    </ZgIconWrapper>
);
`

function genExportAllIconFile(iconNames) {
  let content = `export const iconNames = [`
  const length = iconNames.legth - 1
  iconNames.forEach((item, index) => {
    content += `'${item}'${length === index ? '' : ','}`
  })
  content += `]`

  writeFileSync(exportAllIconPath, content)
}

function genIconIndex(iconNames) {
  const content = iconNames.map(
    (item) => `export { default as ${item} } from './packages/${item}';`
  )
  writeFileSync(`${outpuIndexPath}/index.ts`, content.join('\n'))
}

function gen() {
  const svgDatas = optimizeSvg(iconFiles.map((item) => join(iconFileBase, item)))
  const iconNames = []
  for (const { fileName, data } of svgDatas) {
    const iconName = stringToCamelCase(basename(fileName, '.svg'))
    iconNames.push(iconName)

    let attrs = ''
    if (iconName.startsWith('Loading')) {
      attrs = 'spin'
    }
    writeFileSync(
      `${outputPath}/${iconName}.tsx`,
      SVG_COMPONENT_TMPLATE.replace('SVG', data).replace('ATTRS', attrs)
    )
  }

  genExportAllIconFile(iconNames)
  genIconIndex(iconNames)
}

gen()
