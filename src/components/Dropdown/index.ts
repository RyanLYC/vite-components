import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Dropdown from './Dropdown.vue'
import DropdownMenu from './DropdownMenu.vue'
import DropdownItem from './DropdownItem.vue'

type DropdownType = SFCWithInstall<typeof Dropdown>
export const ZgDropdown = withInstall(Dropdown as DropdownType)

export default ZgDropdown

type DropdownMenuType = SFCWithInstall<typeof DropdownMenu>
export const ZgDropdownMenu = withInstall(DropdownMenu as DropdownMenuType)

type DropdownItemType = SFCWithInstall<typeof DropdownItem>
export const ZgDropdownItem = withInstall(DropdownItem as DropdownItemType)

export * from './types'
