import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import CheckboxGroup from './CheckboxGroup.vue'

type CheckboxGroupType = SFCWithInstall<typeof CheckboxGroup>
export const ZgCheckboxGroup = withInstall(CheckboxGroup as CheckboxGroupType)

export default ZgCheckboxGroup

export * from './types'
