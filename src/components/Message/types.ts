import type { ComponentInternalInstance, VNode } from 'vue'

export interface MessageProps {
  message?: string | VNode
  duration?: number
  showClose?: boolean
  showIcon?: boolean
  type?: 'success' | 'info' | 'warning' | 'error'
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
