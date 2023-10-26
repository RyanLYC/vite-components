<script lang="ts" setup>
import { ref } from 'vue'
import { ZgCheckboxGroup, type ValueTypeBSN, type Option } from '@/components'

const len = 10
const options = ref<Option[]>([])
const arr = ref([])

for (let index = 1; index <= len; index++) {
  options.value.push({
    label: index,
    value: index,
  })
}
const handleChange = (value: ValueTypeBSN[]) => {
  console.log('checkbox.group value:', value)
}
</script>
<template>
  <ZgCheckboxGroup v-model="arr" :options="options" @change="handleChange"></ZgCheckboxGroup>
</template>
