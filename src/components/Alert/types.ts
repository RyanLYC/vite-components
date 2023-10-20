import type { ExtractPublicPropTypes, PropType } from 'vue'
import { iconComponentsMap } from '../util/interface'

// export interface AlertProps {
//   title?: string
//   description?: string
//   showIcon?: boolean
//   closable?: boolean
//   center?: boolean
//   type: keyof typeof iconComponentsMap
//   beforeClose: () => boolean
// }

export const alertProps = {
  title: String,
  type: {
    type: String as PropType<keyof typeof iconComponentsMap>,
    default: 'info',
  },
  description: String,
  showIcon: Boolean,
  closable: {
    type: Boolean,
    default: true,
  },
  center: Boolean,
}

export type AlertProps = ExtractPublicPropTypes<typeof alertProps>
