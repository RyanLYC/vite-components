import type { Placement, Options } from '@popperjs/core'

export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  manual?: boolean
  placement?: Placement
  popperOptions?: Partial<Options>
  transition?: string
  visible?: boolean
  showAfter?: number
  hideAfter?: number
  appendTo?: string
  teleported?: boolean
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'click-outside', value: boolean): void
}

export interface TooltipInstance {
  onOpen: () => void
  onClose: () => void
}
