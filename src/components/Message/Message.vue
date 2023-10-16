<template>
  <Transition name="message-transition" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      class="zg-message"
      v-show="visible"
      :class="{
        [`zg-message--${type === 'error' ? 'danger' : type}`]: type,
      }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div v-if="showIcon" class="zg-message__icon"><component :is="iconComponentsMap[props.type]" /></div>
      <div class="zg-message__content">
        <slot>
          <RenderVnode :vNode="message" v-if="message" />
        </slot>
      </div>
      <div class="zg-message__close" v-if="showClose" @click.stop="visible = false">
        <CloseCircleOutlined />
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
import { CloseCircleOutlined } from '../Icon'
import { getLastBottomOffset } from './CreateMessage'
import { iconComponentsMap } from '../util/interface'

defineOptions({
  name: 'ZgMessage',
})
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'message-transition',
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
/**这个 div 的高度 */
const height = ref(0)
/**上一个message的最下面的坐标，第一个是 0 */
const lastOffset = computed(() => getLastBottomOffset(props.id))
/**这个message应该使用的 top */
const topOffset = computed(() => props.offset + lastOffset.value)
/**为下一个message预留的 offset，也就是它 bottom 的 值 */
const bottomOffset = computed(() => height.value + topOffset.value)
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex,
}))
let timer: any
const startTimer = () => {
  if (props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration)
}
const clearTimer = () => {
  clearTimeout(timer)
}
onMounted(async () => {
  visible.value = true
  startTimer()
})
const destroyComponent = () => {
  props.onDestory()
}
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}
defineExpose({
  bottomOffset,
  visible,
})
</script>
