import { type App } from 'vue'

import '../styles/index.scss'

// 引入组件
import ZgButton from './Button'

const components = [ZgButton]

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
  return app
}

// 局部注册
export { ZgButton, install }

export default {
  install,
}
