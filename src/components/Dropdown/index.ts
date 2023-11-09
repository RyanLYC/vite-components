import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Dropdown from './Dropdown.vue'

type DropdownType = SFCWithInstall<typeof Dropdown>
export const ZgDropdown = withInstall(Dropdown as DropdownType)

export default ZgDropdown

export * from './types'
