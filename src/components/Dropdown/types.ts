import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip'

export interface MenuOption {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}

export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[]
  hideAfterClick?: boolean
  labelField?: string
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', value: MenuOption): void
}

export interface DropdownInstance {
  onOpen: () => void
  onClose: () => void
}
