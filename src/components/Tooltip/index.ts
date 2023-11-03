import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Tooltip from './Tooltip.vue'

type TooltipType = SFCWithInstall<typeof Tooltip>
export const ZgTooltip = withInstall(Tooltip as TooltipType)

export default ZgTooltip

export * from './types'
