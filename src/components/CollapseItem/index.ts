import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import CollapseItem from './CollapseItem.vue'

type CollapseItemType = SFCWithInstall<typeof CollapseItem>
export const ZgCollapseItem = withInstall(CollapseItem as CollapseItemType)

export default ZgCollapseItem

export * from './types'
