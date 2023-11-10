<script lang="ts" setup>
import { ZgDropdown, ZgDropdownMenu, ZgDropdownItem, ZgButton } from '../../index'

defineOptions({
  name: 'ZgDropdownDemo',
})

const options = [
  { key: 1, label: 'test', command: 'a' },
  { key: 2, label: 'item2', command: 'b', disabled: true },
  { key: 3, label: 'item3', command: 'c', divided: true },
  { key: 4, label: 'item4', command: 'd' },
]
const handler = (command: any) => {
  console.log('command:', command)
}
</script>
<template>
  <ZgDropdown placement="bottom" :menu-options="options" @select="handler" trigger="hover">
    <ZgButton>DropdownDropdown</ZgButton>
    <template #dropdown>
      <ZgDropdownMenu>
        <ZgDropdownItem v-for="item in options" :key="item.key" :disabled="item.disabled" :divided="item.divided" :command="item.command"
          >{{ item.label }}{{ item.label }}{{ item.label }}</ZgDropdownItem
        >
      </ZgDropdownMenu>
    </template>
  </ZgDropdown>
</template>
<style></style>
