import type { ValueTypeBSN, Option } from '../util/interface'

export interface CheckboxGroupProps {
  modelValue: ValueTypeBSN[]
  vertical?: boolean
  disabled?: boolean
  options?: Option[]
  valueField?: string
  labelField?: string
}

export interface CheckboxGroupEmits {
  (e: 'update:modelValue', value: ValueTypeBSN[]): void
  (e: 'change', value: ValueTypeBSN[]): void
}

export interface CheckboxGroupContext {
  name: string
  isSelect: (value: ValueTypeBSN) => void
  onSelect: (value: ValueTypeBSN) => void
  props: CheckboxGroupProps
}
