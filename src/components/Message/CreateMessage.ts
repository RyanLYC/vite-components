import { createVNode, render, shallowReactive } from 'vue'
import type { CreateMessageProps, MessageContext } from './types'
import useZIndex from '../../hooks/useZIndex'
import MessageComponent from './Message.vue'

let index = 1
/** 窗口对象集合 */
const msgInstances: MessageContext[] = shallowReactive([])
export const createMessage = (props: CreateMessageProps) => {
  const { nextZIndex } = useZIndex()
  const id = `message_${index++}`
  const container = document.createElement('div')
  const destory = () => {
    // 删除数组中的实例
    const idx = msgInstances.findIndex((instance) => instance.id === id)
    if (idx === -1) return
    msgInstances.splice(idx, 1)
    container && render(null, container)
  }
  const visibleDestory = () => {
    const instance = msgInstances.find((instance) => instance.id === id)
    if (instance) {
      instance.vm.exposed!.visible.value = false
    }
  }
  const messageProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestory: destory,
  }
  const vnode = createVNode(MessageComponent, messageProps)
  render(vnode, container)
  /**添加 message 到 body */
  document.body.appendChild(container.firstElementChild!)
  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: messageProps,
    destory: visibleDestory,
  }
  msgInstances.push(instance)
  return instance
}

export const getLastBottomOffset = (id: string) => {
  const idx = msgInstances.findIndex((instance) => instance.id === id)
  // console.log('idx', id, idx, msgInstances.length)
  if (idx <= 0) {
    return 0
  } else {
    const prev = msgInstances[idx - 1]
    return prev.vm.exposed!.bottomOffset.value
  }
}

export const closeAll = () => {
  msgInstances.forEach((instance) => {
    instance.destory()
  })
}
