import { type App } from 'vue'

import './styles/index.scss'

// 下面这句注释不可删除，脚本从这里插入引入
// 引入组件
import ZgCheckboxGroup from './components/CheckboxGroup'
import ZgCheckbox from './components/Checkbox'
import ZgCard from './components/Card'
import ZgSwitch from './components/Switch'
import ZgInput from './components/Input'
import { createMessage } from './components/Message/CreateMessage'
import ZgAlert from './components/Alert'
import ZgCollapseItem from './components/CollapseItem'
import ZgCollapse from './components/Collapse'
import ZgButton from './components/Button'

const components = [ZgButton, ZgCollapse, ZgCollapseItem, ZgAlert, ZgInput, ZgSwitch, ZgCard, ZgCheckbox, ZgCheckboxGroup]

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
  return app
}

// 局部注册
export { ZgButton, ZgCollapse, ZgCollapseItem, ZgAlert, createMessage, ZgInput, ZgSwitch, ZgCard, ZgCheckbox, ZgCheckboxGroup, install }

export default {
  install,
}

// 下面这句注释不可删除，脚本从这里插入导出 types
// 需要导出的类型
export * from './components/CheckboxGroup/types'
export * from './components/Checkbox/types'
export * from './components/Card/types'
export * from './components/Switch/types'
export * from './components/Input/types'
export * from './components/Message/types'
export * from './components/Alert/types'
export * from './components/CollapseItem/types'
export * from './components/Collapse/types'
export * from './components/Button/types'
export * from './components/util/interface'
