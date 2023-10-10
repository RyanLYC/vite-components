import type { Ref } from 'vue'
export type NameType = string | number

export interface CollapseProps {
  /** 当前展开的name存放在数组中 */
  modelValue: NameType[]
  /**手风琴模式 */
  accordion?: boolean
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}
