<template>
  <div class="zg-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :show-after="showAfter"
      :hide-after="hideAfter"
      :manual="manual"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="zg-dropdown__menu">
          <template v-for="item in optionsFinal" :key="item.key">
            <li v-if="item.divided" class="divided-line" />
            <li class="zg-dropdown__item" @click="itemClick(item)" :class="{ 'is-disabled': item.disabled }" :id="`dropdown-item-${item.key}`">
              <RenderVnode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Tooltip, { type TooltipInstance } from '../Tooltip'
import type { DropdownProps, DropdownEmits, MenuOption } from './types'
import RenderVnode from '../Common/RenderVnode'

defineOptions({
  name: 'ZgDropdown',
})
const props = withDefaults(defineProps<DropdownProps>(), { placement: 'bottom', trigger: 'click', hideAfterClick: true, labelField: 'label' })
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)
const optionsFinal = computed(
  () =>
    props.menuOptions?.map((opt: any) => {
      return {
        ...opt,
        label: opt[props.labelField],
      }
    })
)
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.onClose()
  }
}
</script>
