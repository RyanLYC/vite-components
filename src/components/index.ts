import { type App } from 'vue'

import '../styles/index.scss'

// 下面这句注释不可删除，脚本从这里插入引入
// 引入组件
import ZgCheckboxGroup from './CheckboxGroup'
import ZgCheckbox from './Checkbox'
import ZgCard from './Card'
import ZgSwitch from './Switch'
import ZgInput from './Input'
import { createMessage } from './Message/CreateMessage'
import ZgAlert from './Alert'
import ZgCollapseItem from './CollapseItem'
import ZgCollapse from './Collapse'
import ZgButton from './Button'

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
export * from './CheckboxGroup/types'
export * from './Checkbox/types'
export * from './Card/types'
export * from './Switch/types'
export * from './Input/types'
export * from './Message/types'
export * from './Alert/types'
export * from './CollapseItem/types'
export * from './Collapse/types'
export * from './Button/types'
export * from './util/interface'
