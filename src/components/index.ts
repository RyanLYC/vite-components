import { type App } from 'vue'

import '../styles/index.scss'

// 引入组件
import ZgCard from './Card'
import ZgSwitch from './Switch'
import ZgInput from './Input'
import { createMessage } from './Message/CreateMessage'
import ZgAlert from './Alert'
import ZgCollapseItem from './CollapseItem'
import ZgCollapse from './Collapse'
import ZgButton from './Button'

const components = [ZgButton, ZgCollapse, ZgCollapseItem, ZgAlert, ZgInput, ZgSwitch, ZgCard]

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.use(component)
  })
  return app
}

// 局部注册
export { ZgButton, ZgCollapse, ZgCollapseItem, ZgAlert, createMessage, ZgInput, ZgSwitch, ZgCard, install }

export default {
  install,
}
// 需要导出的类型
//button
export { type ButtonType, type NativeType } from './Button/types'
// alert message
export { iconComponentsMap, type FeedbackType } from './util/interface'
// switch
export { type SwitchValueType } from './Switch/types'
// collapse
export { type NameType } from './Collapse/types'
