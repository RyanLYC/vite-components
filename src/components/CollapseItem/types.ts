import type { ValueTypeSN } from '../util/interface'

export interface CollapseItemProps {
  /** item's name */
  name: ValueTypeSN
  /** 标题 */
  title?: string
  /** disabled */
  disabled?: boolean
}
