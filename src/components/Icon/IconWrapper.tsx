import { defineComponent, computed } from 'vue'
import { iconProps } from './types'

export default defineComponent({
  name: 'ZgIconWrapper',
  props: iconProps,
  setup(props, { slots, attrs }) {
    const iconTabIndex = computed(() => {
      let tabIndex = props.tabIndex
      if (tabIndex == null && attrs.onClick) {
        tabIndex = -1
      }
      return tabIndex
    })
    const svgStyle = computed(() =>
      props.rotate
        ? {
            transform: `rotate(${props.rotate}deg)`,
          }
        : undefined
    )
    const svgClasses = computed(() => ({
      [`zg-icon`]: true,
      [`zg-icon--spin`]: !!props.spin,
    }))

    return () => (
      <span
        tabindex={iconTabIndex.value}
        role="img"
        class={svgClasses.value}
        style={svgStyle.value}
      >
        {slots.default && slots.default()}
      </span>
    )
  },
})
