import type { Ref } from 'vue'
import type { ValueTypeSN } from '../util/interface'

export interface CollapseProps {
  /** 当前展开的name存放在数组中 */
  modelValue: ValueTypeSN[]
  /**手风琴模式 */
  accordion?: boolean
}

export interface CollapseContext {
  activeNames: Ref<ValueTypeSN[]>
  handleItemClick: (name: ValueTypeSN) => void
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: ValueTypeSN[]): void
  (e: 'change', values: ValueTypeSN[]): void
}
