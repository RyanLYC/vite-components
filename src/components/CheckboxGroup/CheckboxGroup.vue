<template>
  <div
    class="zg-checkbox-group"
    :class="{
      'is-vertical': vertical,
      'is-disabled': disabled,
    }"
  >
    <slot />
    <Checkbox v-for="opt in optionsFinal" :key="opt.value" :value="opt.value" :label="opt.label" :disabled="opt.disabled"></Checkbox>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, unref } from 'vue'
import type { ValueTypeBSN } from '../util/interface'
import { checkboxGroupKey } from './const'
import type { CheckboxGroupEmits, CheckboxGroupProps } from './types'
import { useArrayModel } from '../hooks/useModel'
import Checkbox from '../Checkbox'

defineOptions({
  name: 'ZgCheckboxGroup',
})
const props = withDefaults(defineProps<CheckboxGroupProps>(), { vertical: false, valueField: 'value', labelField: 'label' })
const emits = defineEmits<CheckboxGroupEmits>()
const [currentValue, updateItem] = useArrayModel<ValueTypeBSN>(props, emits)

const optionsFinal = computed(
  () =>
    props.options?.map((opt: any) => {
      return {
        ...opt,
        value: opt[props.valueField],
        label: opt[props.labelField],
      }
    })
)

const handleChange = () => {
  emits('change', currentValue.value)
}
const onSelect = (value: ValueTypeBSN) => {
  updateItem(unref(value))
  handleChange()
}

const isSelect = (value: ValueTypeBSN) => {
  const groupVal = unref(currentValue)
  const itemVal = unref(value)
  if (groupVal === null || itemVal === null) {
    return false
  }
  return groupVal.includes(itemVal)
}
provide(checkboxGroupKey, {
  name: 'ZgCheckboxGroup',
  isSelect,
  onSelect,
  props,
})
</script>
