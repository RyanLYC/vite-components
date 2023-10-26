<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>
<template>
  <ZgCheckbox label="Checkbox0" style="margin-right: 10px" />
  <ZgCheckbox label="Checkbox0" indeterminate style="margin-right: 10px" />
  <ZgCheckbox v-model="value" label="Checkbox" style="margin-right: 10px" />
  <ZgCheckbox v-model="value" label="Checkbox" size="large" style="margin-right: 10px" />
  <ZgCheckbox v-model="value" label="Checkbox" size="small" style="margin-right: 10px" />
</template>
