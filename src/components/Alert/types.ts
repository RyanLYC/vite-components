import { iconComponentsMap } from '../util/interface'

export interface AlertProps {
  message?: string
  description?: string
  showIcon?: boolean
  closable?: boolean
  center?: boolean
  type: keyof typeof iconComponentsMap
  beforeClose: () => boolean
}
