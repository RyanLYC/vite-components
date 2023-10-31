import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Switch from './Switch.vue'

type SwitchType = SFCWithInstall<typeof Switch>
export const ZgSwitch = withInstall(Switch as SwitchType)

export default ZgSwitch

export * from './types'
