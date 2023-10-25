import type { ValueTypeBSN } from '../util/interface'

export interface SwtichProps {
  modelValue: ValueTypeBSN
  disabled?: boolean
  activeText?: string
  inactiveText?: string
  activeValue?: ValueTypeBSN
  inactiveValue?: ValueTypeBSN
  name?: string
  size?: 'small' | 'large'
}

export interface SwtichEmits {
  (e: 'update:modelValue', value: ValueTypeBSN): void
  (e: 'change', value: ValueTypeBSN): void
}
