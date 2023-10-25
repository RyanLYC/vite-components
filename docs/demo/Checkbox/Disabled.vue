<script lang="ts" setup>
import { ref } from 'vue'
import { ZgCheckbox } from '@/components'

const value = ref(false)
const value1 = ref(true)
</script>
<template>
  <ZgCheckbox v-model="value" label="Checkbox" disabled style="margin-right: 10px" />
  <ZgCheckbox v-model="value1" label="Checkbox" disabled style="margin-right: 10px" />
  <ZgCheckbox v-model="value1" label="Checkbox" disabled indeterminate style="margin-right: 10px" />
</template>
