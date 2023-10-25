import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Checkbox from './Checkbox.vue'

type CheckboxType = SFCWithInstall<typeof Checkbox>
export const ZgCheckbox = withInstall(Checkbox as CheckboxType)

export default ZgCheckbox
