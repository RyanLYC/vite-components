/***
 * @vue/compiler-sfc
 * 暂时还解释不了
 * withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})
 * 改用 vue-tsc
 */

/* eslint-disable no-undef */
const path = require('path')
const fs = require('fs-extra')
const glob = require('fast-glob')
const { Project } = require('ts-morph')
const { parse, compileScript } = require('@vue/compiler-sfc')

let index = 1

main()

async function main() {
  // 这部分内容具体可以查阅 ts-morph 的文档
  // 这里仅需要知道这是用来处理 ts 文件并生成类型声明文件即可
  const project = new Project({
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      noImplicitAny: false,
      allowJs: true, // 如果想兼容 js 语法需要加上
      outDir: 'types', // 可以设置自定义的打包文件夹，如 'types'
      jsx: 'react', //'preserve',
    },
    tsConfigFilePath: path.resolve(__dirname, '../tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
  })

  // 获取 src 下的 .vue 和 .ts 文件
  const files = await glob([
    'src/components/**/*.ts',
    'src/components/**/*.tsx',
    'src/components/**/*.vue',
  ])
  const sourceFiles = []

  await Promise.all(
    files.map(async (file) => {
      if (/\.vue$/.test(file)) {
        // 对于 vue 文件，借助 @vue/compiler-sfc 的 parse 进行解析
        const sfc = parse(await fs.promises.readFile(file, 'utf-8'))
        // 提取出 script 中的内容
        const { script, scriptSetup } = sfc.descriptor

        if (script || scriptSetup) {
          let content = ''
          let isTs = false

          if (scriptSetup) {
            const compiled = compileScript(sfc.descriptor, {
              id: `${index++}`,
              fs: {
                fileExists: fs.pathExists,
                readFile: fs.readFile,
              },
            })

            content += compiled.content

            if (scriptSetup.lang === 'ts') isTs = true
          } else if (script && script.content) {
            content += script.content

            if (script.lang === 'ts') isTs = true
          }
          sourceFiles.push(
            // 创建一个同路径的同名 ts/js 的映射文件
            project.createSourceFile(file + (isTs ? '.ts' : '.js'), content)
          )
        }
      } else if (/\.d.ts$/.test(file)) {
        const typePath = file.replace('src/components', 'dist/types')
        if (!fs.existsSync('dist/types')) {
          fs.mkdirSync('dist/types')
        }
        fs.copyFileSync(file, typePath)
      } else if (!file.includes('.test.')) {
        console.log('file:', file)
        // 如果是 ts 文件则直接添加即可
        sourceFiles.push(project.addSourceFileAtPath(file))
      }
    })
  )

  const diagnostics = project.getPreEmitDiagnostics()

  // 输出解析过程中的错误信息
  console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))

  project.emitToMemory()

  // 随后将解析完的文件写道打包路径
  for (const sourceFile of sourceFiles) {
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      console.log('outputFile.getFilePath():', outputFile.getFilePath())
      const filePath = outputFile.getFilePath().replace('/types/', '/dist/types/')

      await fs.promises.mkdir(path.dirname(filePath), {
        recursive: true,
      })
      let reference = ''
      if (/types\/index.d.ts$/.test(filePath)) {
        reference = '/// <reference path="./components.d.ts" />\n'
      }
      await fs.promises.writeFile(filePath, reference + outputFile.getText(), 'utf8')
    }
  }
}
