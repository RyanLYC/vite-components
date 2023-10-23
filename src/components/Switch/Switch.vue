<template>
  <div
    class="zg-switch"
    :class="{
      [`zg-switch--${size}`]: size,
      'is-disabled': disabled,
      'is-checked': checked,
    }"
    @click="switchValue"
  >
    <input class="zg-swtich__input" type="checkbox" role="switch" ref="inputRef" :name="name" :disabled="disabled" @keydown.enter="switchValue" />
    <div class="zg-switch__core">
      <div class="zg-switch__core-inner">
        <span v-if="activeText || inactiveText" class="zg-switch__core-inner-text">
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="zg-switch__core-action"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import type { SwtichEmits, SwtichProps } from './types'

defineOptions({
  name: 'ZgSwitch',
})
const props = withDefaults(defineProps<SwtichProps>(), {
  activeValue: true,
  inactiveValue: false,
})
const emits = defineEmits<SwtichEmits>()
const innerValue = ref(props.modelValue)
const inputRef = ref<HTMLInputElement>()
const checked = computed(() => innerValue.value === props.activeValue)

onMounted(() => {
  inputRef.value!.checked = checked.value
})
watch(checked, (val) => {
  inputRef.value!.checked = val
})
watch(
  () => props.modelValue,
  (newValue) => {
    innerValue.value = newValue
  }
)
const switchValue = () => {
  if (props.disabled) return
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}
</script>
