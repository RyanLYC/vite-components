<template>
  <li v-if="divided" class="divided-line" />
  <li class="zg-dropdown__item" @click="itemClick" :class="{ 'is-disabled': disabled }">
    <slot />
  </li>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import type { DropdownItemProps } from './types'
import { dropdownKey } from './const'

defineOptions({
  name: 'ZgDropdownItem',
})
const props = defineProps<DropdownItemProps>()
const dropdown = inject(dropdownKey, null)
const itemClick = () => {
  if (props.disabled) {
    return
  }
  dropdown?.itemClick(props.command)
}
</script>
