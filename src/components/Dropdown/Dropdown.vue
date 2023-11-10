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
        <slot name="dropdown" @select="itemClick"></slot>
        <!-- <ul class="zg-dropdown__menu"> -->
        <!-- <template v-for="item in optionsFinal" :key="item.key">
            <li v-if="item.divided" class="divided-line" />
            <li class="zg-dropdown__item" @click="itemClick(item)" :class="{ 'is-disabled': item.disabled }" :id="`dropdown-item-${item.key}`">
              <RenderVnode :vNode="item.label" />
            </li>
          </template> -->
        <!-- </ul> -->
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import Tooltip, { type TooltipInstance } from '../Tooltip'
import type { DropdownProps, DropdownEmits, CommandType } from './types'
import { dropdownKey } from './const'

defineOptions({
  name: 'ZgDropdown',
})
const props = withDefaults(defineProps<DropdownProps>(), { placement: 'bottom', trigger: 'click', hideAfterClick: true, labelField: 'label' })
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)

const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (command?: CommandType) => {
  emits('select', command)
  if (props.hideAfterClick) {
    tooltipRef.value?.onClose()
  }
}
provide(dropdownKey, {
  name: 'ZgDropdown',
  itemClick,
  props,
})
</script>
