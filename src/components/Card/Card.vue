<template>
  <div
    class="zg-card"
    :class="{
      [`zg-card-shadow--${shadow}`]: shadow,
      'is-bordered': bordered,
    }"
  >
    <div v-if="$slots.header || header" :class="headerClasses">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="zg-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { CardProps } from './types'

defineOptions({
  name: 'ZgCard',
})
const props = withDefaults(defineProps<CardProps>(), { shadow: 'always' })
const headerClasses = computed(() => ({
  ['zg-card__header']: true,
  'no-divider': !props.divider,
}))
</script>
