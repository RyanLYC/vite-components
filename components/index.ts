import { type App } from 'vue'

import './styles/index.scss'

// 引入组件
import Button from '@/components/Button'
import { useTheme } from './hooks/useTheme'

const components = [Button]

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 局部注册
export { Button, install, useTheme }

export default {
  install,
}
