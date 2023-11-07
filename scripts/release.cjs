/* eslint-disable no-undef */
const { execSync } = require('child_process')
const { prompt } = require('enquirer')
const path = require('path')

async function main() {
  const { message } = await prompt({
    type: 'input',
    name: 'message',
    message: '请输入提交信息！',
  })
  if (!message) {
    throw new Error('必须输入提交信息')
  }
  console.log('message:', message)

  const cwd = path.join(process.cwd(), './docs/.vitepress/vite-components-last')

  console.log('cwd:', cwd)

  try {
    execSync('git add .', { stdio: 'inherit', cwd })
    execSync(`git commit -m "${message}"`, { stdio: 'inherit', cwd })
    // execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit',cwd })
    execSync(`git push`, { stdio: 'inherit', cwd })
  } catch (e) {
    throw new Error(e)
  }
}

main()
