<template>
  <div class="zg-tooltip" ref="popperContainerNode" v-on="outerEvents">
    <div class="zg-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div v-if="isOpen" class="zg-tooltip__popper" ref="popperNode">
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch, onMounted } from 'vue'
import type { TooltipEmits, TooltipProps } from './types'
import { debounce } from 'lodash-es'
import type { Instance } from '@popperjs/core'
import { createPopper } from '@popperjs/core'
import useClickOutside from '../../hooks/useClickOutside'

defineOptions({
  name: 'ZgTooltip',
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'left',
  trigger: 'hover',
  transition: 'fade-in-linear',
  showAfter: 0,
  hideAfter: 0,
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
let popperInstance: null | Instance = null
const popperContainerNode = ref<HTMLElement>()
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
    ...props.popperOptions,
  }
})

const open = () => {
  isOpen.value = true
  emits('visible-change', true)
}
const close = () => {
  isOpen.value = false
  emits('visible-change', false)
}

const openDebounce = debounce(open, props.showAfter)
const closeDebounce = debounce(close, props.hideAfter)

const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
if (!props.manual) {
  attachEvents()
}
onMounted(() => {
  if (props.visible) {
    isOpen.value = props.visible
  }
})

watch(
  () => props.visible,
  (newVisible) => {
    if (newVisible) {
      openFinal()
    } else {
      closeFinal()
    }
  }
)
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      // 清空事件
      events = {}
      outerEvents = {}
      attachEvents()
    }
  }
)
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      // append to
      if (props.appendTo) {
        triggerNode.value = document.querySelector(props.appendTo) as HTMLElement | undefined
      }

      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' } // 如果想在侦听器回调中能访问被 Vue 更新之后的 DOM
)

useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal()
  }
  if (isOpen.value) {
    emits('click-outside', true)
  }
})
</script>
