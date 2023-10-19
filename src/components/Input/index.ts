import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Input from './Input.vue'

type InputType = SFCWithInstall<typeof Input>
export const ZgInput = withInstall(Input as InputType)

export default ZgInput
