import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Message from './Message.vue'

type MessageType = SFCWithInstall<typeof Message>
export const ZgMessage = withInstall(Message as MessageType)

export default ZgMessage
