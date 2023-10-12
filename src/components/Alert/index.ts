import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Alert from './Alert'

type AlertType = SFCWithInstall<typeof Alert>
export const ZgAlert = withInstall(Alert as AlertType)

export default ZgAlert
