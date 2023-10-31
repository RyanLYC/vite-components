import { withInstall } from '../util/withInstall'
import type { SFCWithInstall } from '../util/interface'
import Card from './Card.vue'

type CardType = SFCWithInstall<typeof Card>
export const ZgCard = withInstall(Card as CardType)

export default ZgCard

export * from './types'
