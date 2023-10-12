import { describe, test, expect, beforeAll, vi } from 'vitest'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import ZgCollapse from '../index'
import ZgCollapseItem from '../../CollapseItem/index'

const onChange = vi.fn()
let wrapper: VueWrapper
let headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[], disabledHeader: DOMWrapper<Element>, disabledContent: DOMWrapper<Element>

describe('Collapse.vue', () => {
  beforeAll(() => {
    wrapper = mount(
      () => (
        <ZgCollapse modelValue={['1']} onChange={onChange}>
          <ZgCollapseItem name="1" title="title 1">
            content 1
          </ZgCollapseItem>
          <ZgCollapseItem name="2" title="title 2">
            content 2
          </ZgCollapseItem>
          <ZgCollapseItem name="3" title="title 3" disabled>
            content 3
          </ZgCollapseItem>
        </ZgCollapse>
      ),
      { attachTo: document.body }
    )
    headers = wrapper.findAll('.zg-collapse-item__header')
    contents = wrapper.findAll('.zg-collapse-item__wrapper')
    disabledHeader = headers[2]
    disabledContent = contents[2]
  })

  test('测试基础结构以及对应文本', () => {
    // console.log(wrapper.html())
    // 长度
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    //文本
    expect(headers[0].text()).toBe('title 1')
    // 内容  modelValue={['1']} 第一个内容展开
    expect(contents[0].text()).toBe('content 1')
    expect(contents[0].isVisible()).toBeTruthy()
    expect(contents[1].isVisible()).toBeFalsy()
  })
  test('点击标题展开/关闭内容', async () => {
    await headers[0].trigger('click')
    expect(contents[0].isVisible()).toBeFalsy()
    await headers[1].trigger('click')
    expect(contents[1].isVisible()).toBeTruthy()
  })
  test('发送正确的事件', () => {
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith([])
    expect(onChange).toHaveBeenLastCalledWith(['2'])
  })
  test('disabled 的内容应该没有反应', async () => {
    onChange.mockClear()
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
    expect(onChange).not.toHaveBeenCalled()
  })
})
