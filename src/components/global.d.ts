import ZgDropdown from './Dropdown'
import ZgTooltip from './Tooltip'
import ZgCheckboxGroup from './CheckboxGroup'
import ZgCheckbox from './Checkbox'
import ZgCard from './Card'
import ZgSwitch from './Switch'
import ZgInput from './Input'
import ZgMessage from './Message'
import ZgAlert from './Alert'
import ZgCollapseItem from './CollapseItem'
import ZgCollapse from './Collapse'
import ZgButton from './Button'

declare module 'vue' {
  export interface GlobalComponents {
    ZgDropdown: typeof ZgDropdown
    ZgTooltip: typeof ZgTooltip
    ZgCheckboxGroup: typeof ZgCheckboxGroup
    ZgCheckbox: typeof ZgCheckbox
    ZgCard: typeof ZgCard
    ZgSwitch: typeof ZgSwitch
    ZgInput: typeof ZgInput
    ZgMessage: typeof ZgMessage
    ZgAlert: typeof ZgAlert
    ZgCollapseItem: typeof ZgCollapseItem
    ZgCollapse: typeof ZgCollapse
    ZgButton: typeof ZgButton
  }
}
