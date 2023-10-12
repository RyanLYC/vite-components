import type { ObjectDirective, Plugin } from 'vue'
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, InfoCircleFilled } from '../Icon'

export type ZObjectDirective = ObjectDirective & {
  name: string
}

export type SFCWithInstall<T> = T & Plugin

export const iconComponentsMap = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
}
