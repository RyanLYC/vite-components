import { describe, test, expect } from 'vitest'
import { closeAll, createMessage } from '../CreateMessage'
import { nextTick } from 'vue'

export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null)
        await nextTick()
      })
    })
  })
}
function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element)
  const topValue = styles.getPropertyValue('top')
  return Number.parseFloat(topValue)
}

describe('createMessage', () => {
  test('调用方法应该创建对应的 Message 组件', async () => {
    const instance = createMessage({ message: 'hello world', duration: 0 })
    await rAF()
    expect(document.querySelector('.zg-message')).toBeTruthy()
    instance.destory()
    await rAF()
    expect(document.querySelector('.zg-message')).toBeFalsy()
  })
  test('多次调用方法应该创建多个实例', async () => {
    createMessage({ message: 'hello world', duration: 0 })
    createMessage({ message: 'hello world 2', duration: 0 })
    await rAF()
    const elements = document.querySelectorAll('.zg-message')
    expect(elements.length).toBe(2)
    closeAll()
    await rAF()
    expect(document.querySelector('.zg-message')).toBeFalsy()
  })
  test('创建多个实例应该设置正确的 offset', async () => {
    createMessage({ message: 'hello world', duration: 0, offset: 100 })
    createMessage({ message: 'hello world 2', duration: 0, offset: 50 })
    await rAF()
    const elements = document.querySelectorAll('.zg-message')
    expect(elements.length).toBe(2)
    const firstElementTop = getTopValue(elements[0])
    const secondElementTop = getTopValue(elements[1])
    expect(firstElementTop).toBe(100)
    expect(secondElementTop).toBe(150)
  })
})
