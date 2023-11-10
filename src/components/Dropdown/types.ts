import type { TooltipProps } from '../Tooltip'

export interface DropdownProps extends TooltipProps {
  hideAfterClick?: boolean
}

export type CommandType = string | number | Object
export interface DropdownItemProps {
  disabled?: boolean
  divided?: boolean
  command?: CommandType
}

export interface DropdownEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'select', command?: CommandType): void
}

export interface DropdownInstance {
  onOpen: () => void
  onClose: () => void
}

export interface DropdownContext {
  name: string
  itemClick: (command?: CommandType) => void
  props: DropdownProps
}
