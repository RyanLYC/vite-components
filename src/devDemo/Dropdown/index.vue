<script lang="ts" setup>
import { h } from 'vue'
import { ZgDropdown, ZgButton, type MenuOption } from '../../index'

defineOptions({
  name: 'ZgDropdownDemo',
})

const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' },
]
const handler = (...args: any) => {
  console.log(...args)
}
</script>
<template>
  <ZgDropdown placement="bottom" :menu-options="options" @visible-change="(e) => handler('visible change', e)" @select="(e) => handler('select', e)">
    <ZgButton>DropdownDropdown</ZgButton>
  </ZgDropdown>
</template>
<style></style>
