<template>
  <div
    class="zg-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="zg-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <DownOutlined class="header-angle" />
    </div>
    <CollapseTransition>
      <div class="zg-collapse-item__wrapper" v-show="isActive">
        <div class="zg-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from '../Collapse/constant'
import CollapseTransition from './CollapseTransition.vue'
import { DownOutlined } from '../Icon'

defineOptions({
  name: 'ZgCollapseItem',
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
const handleClick = () => {
  if (props.disabled) {
    return
  }
  collapseContext?.handleItemClick(props.name)
}
</script>
