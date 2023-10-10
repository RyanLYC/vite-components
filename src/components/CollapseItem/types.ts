import type { NameType } from '../Collapse/types'

export interface CollapseItemProps {
  /** item's name */
  name: NameType
  /** 标题 */
  title?: string
  /** disabled */
  disabled?: boolean
}
