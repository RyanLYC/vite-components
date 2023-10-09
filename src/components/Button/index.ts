import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Button from './Button.vue'

type ButtonType = SFCWithInstall<typeof Button>
export const ZgButton = withInstall(Button as ButtonType)

export default ZgButton
