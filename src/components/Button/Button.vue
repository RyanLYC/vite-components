<template>
  <button
    ref="_ref"
    class="zg-button"
    :class="{
      [`zg-button--${type}`]: type,
      [`zg-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <LoadingOutlined v-if="loading" class="loading-out-lined-icon" />
    <span v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { ButtonProps } from './types'
import LoadingOutlined from '../Icon/packages/LoadingOutlined'

defineOptions({
  name: 'ZgButton',
})

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref,
})
</script>
