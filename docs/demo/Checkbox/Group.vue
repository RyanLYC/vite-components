<script lang="ts" setup>
import { ref } from 'vue'
import { type ValueTypeBSN } from 'vite-components-last'

const arr = ref([])
const len = 10
const handleChange = (value: ValueTypeBSN[]) => {
  console.log('checkbox.group value:', value)
}
</script>
<template>
  <ZgCheckboxGroup v-model="arr" @change="handleChange">
    <ZgCheckbox v-for="i in len" :key="i" :value="i">
      {{ i }}
    </ZgCheckbox>
  </ZgCheckboxGroup>
  <hr />
  <ZgCheckboxGroup vertical v-model="arr" @change="handleChange">
    <ZgCheckbox v-for="i in len" :key="i" :value="i" :label="i"> </ZgCheckbox>
  </ZgCheckboxGroup>
</template>
