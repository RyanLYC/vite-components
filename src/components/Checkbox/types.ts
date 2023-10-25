import type { ValueTypeBSN, ValueTypeSN } from '../util/interface'

export interface CheckboxProps {
  modelValue?: ValueTypeBSN
  indeterminate?: boolean
  label?: ValueTypeSN
  disabled?: boolean
  size?: 'small' | 'large'
  trueValue?: ValueTypeBSN
  falseValue?: ValueTypeBSN
}

export interface CheckboxEmits {
  (e: 'update:modelValue', value: ValueTypeBSN): void
  (e: 'change', value: ValueTypeBSN): void
}
