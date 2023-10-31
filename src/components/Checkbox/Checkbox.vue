<template>
  <label
    class="zg-checkbox"
    :class="{
      [`zg-checkbox--${size}`]: size,
      'is-disabled': innerDisabled,
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
import { computed, inject, ref } from 'vue'
import type { CheckboxEmits, CheckboxProps } from './types'
import { useNormalModel } from '../../hooks/useModel'
import type { ValueTypeBSN } from '../util/interface'
import { checkboxGroupKey } from '../CheckboxGroup/const'

const group = inject(checkboxGroupKey, null)
defineOptions({
  name: 'ZgCheckbox',
})
const isGroup = group !== null
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  trueValue: true,
  falseValue: false,
})
const emits = defineEmits<CheckboxEmits>()
const hover = ref(false)
const [currentValue, updateCurrentValue] = useNormalModel<ValueTypeBSN>(props, emits)
const checked = computed(() => {
  if (!isGroup) {
    return currentValue.value === props.trueValue
  }
  if (props.value === undefined) {
    console.warn('ZgCheckboxGroup value必须有值; value:', props.value)
    return false
  }
  return group.isSelect(props.value)
})
const innerDisabled = computed(() => props.disabled || (isGroup && group?.props?.disabled))
const handleClick = () => {
  if (innerDisabled.value) {
    return
  }
  if (isGroup) {
    if (props.value === undefined) {
      console.warn('ZgCheckboxGroup value必须有值; value:', props.value)
      return
    }
    group.onSelect(props.value)
  } else {
    const newValue = checked.value ? props.falseValue : props.trueValue
    updateCurrentValue(newValue)
    emits('change', newValue)
  }
}
const handleMouseOver = () => {
  hover.value = true
}
const handleMouseOut = () => {
  hover.value = false
}
</script>
