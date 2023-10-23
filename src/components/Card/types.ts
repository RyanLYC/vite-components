import type { StyleValue } from 'vue'

export type Shadow = 'always' | 'never' | 'hover'

export interface CardProps {
  header?: string
  divider?: boolean
  bodyStyle?: StyleValue
  shadow?: Shadow
  bordered?: boolean
}
