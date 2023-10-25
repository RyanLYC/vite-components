<template>
  <label
    class="zg-checkbox"
    :class="{
      [`zg-checkbox--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
      'is-hover': hover,
      'is-indeterminate': indeterminate,
    }"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @click="handleClick"
  >
    <span class="zg-checkbox__inner" />
    <span v-if="$slots.default || label" class="zg-checkbox__content">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { CheckboxEmits, CheckboxProps } from './types'
import { useNormalModel } from '../hooks/useModel'
import type { ValueTypeBSN } from '../util/interface'

defineOptions({
  name: 'ZgCheckbox',
})
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  trueValue: true,
  falseValue: false,
})
const emits = defineEmits<CheckboxEmits>()
const hover = ref(false)
const [currentValue, updateCurrentValue] = useNormalModel<ValueTypeBSN>(props, emits)
const checked = computed(() => {
  return currentValue.value === props.trueValue
})
const handleClick = () => {
  if (props.disabled) {
    return
  }

  const newValue = checked.value ? props.falseValue : props.trueValue
  updateCurrentValue(newValue)
  emits('change', newValue)
}
const handleMouseOver = () => {
  hover.value = true
}
const handleMouseOut = () => {
  hover.value = false
}
</script>
