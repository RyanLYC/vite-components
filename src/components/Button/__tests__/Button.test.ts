import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../Button.vue'
import { ArrowDownOutlined } from '../../Icon'

describe('Button.vue', () => {
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        default: 'button',
      },
    })
    // console.log(wrapper.html())
    expect(wrapper.classes()).toContain('zg-button--primary')
    // slot
    // get, find
    expect(wrapper.get('button').text()).toBe('button')
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'disabled',
      },
    })
    // attributes
    expect(wrapper.attributes('disabled')).toBeDefined()
    // attributes
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
      slots: {
        icon: ArrowDownOutlined,
      },
    })
    // console.log(wrapper.html())
    const iconElement = wrapper.findComponent('.zg-icon')
    expect(iconElement.exists()).toBeTruthy()
  })
  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'loading',
      },
    })
    // console.log(wrapper.html())
    const iconElement = wrapper.findComponent('.loading-out-lined-icon')
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.classes()).toContain('zg-icon--spin')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
