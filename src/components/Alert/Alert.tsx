import { ref, defineComponent, Transition } from 'vue'
import { alertProps } from './types'
import { CloseCircleOutlined } from '../Icon'
import { iconComponentsMap } from '../util/interface'

export default defineComponent({
  name: 'FAlert',
  props: alertProps,
  emits: ['close'],
  setup(props, ctx) {
    const visible = ref(true)
    // const descriptionClass = computed(() => ['zg-alert_description', props.showIcon && !props.center && 'zg-alert-icon-padding'])

    const renderIcon = () => {
      return ctx.slots.icon ? ctx.slots.icon() : iconComponentsMap[props.type]?.()
    }

    function handleCloseClick(event: MouseEvent) {
      visible.value = false
      ctx.emit('close')
    }

    return () => {
      const { default: defaultSlot, description: descriptionSlot } = ctx.slots
      const description =
        props.description || descriptionSlot ? (
          <div class={'zg-alert__description'}>{descriptionSlot ? descriptionSlot() : props.description}</div>
        ) : null
      return (
        <Transition name={'zg-alert-fade-expand'}>
          {!visible.value ? null : (
            <div class={`zg-alert ${props.center ? 'zg-alert-center' : ''} zg-alert--${props.type === 'error' ? 'danger' : props.type}`}>
              {/* 图标 */}
              {props.showIcon ? <span class={'zg-alert__icon'}>{renderIcon()}</span> : null}
              <div class={'zg-alert__content'}>
                {/* 标题内容 */}
                <span class="zg-alert__title">{defaultSlot ? defaultSlot() : props.title}</span>
                {description}
                {/* 关闭按钮 */}
                {props.closable ? (
                  <div class={'zg-alert__close-btn'} onClick={handleCloseClick}>
                    <CloseCircleOutlined />
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </Transition>
      )
    }
  },
})
