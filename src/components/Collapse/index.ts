import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Collapse from './Collapse.vue'

type CollapseType = SFCWithInstall<typeof Collapse>
export const ZgCollapse = withInstall(Collapse as CollapseType)

export default ZgCollapse
