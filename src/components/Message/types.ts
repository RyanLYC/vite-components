import type { ComponentInternalInstance, VNode } from 'vue'
import type { FeedbackType } from '../util/interface'

export interface MessageProps {
  message?: string | VNode
  duration?: number
  showClose?: boolean
  showIcon?: boolean
  type?: FeedbackType
  onDestory: () => void
  id: string
  zIndex: number
  offset?: number
}

export interface MessageContext {
  id: string
  vnode: VNode
  vm: ComponentInternalInstance
  props: MessageProps
  destory: () => void
}

export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>
