<script lang="ts" setup>
import { ref } from 'vue'
const test = ref('')
</script>
<template>
  <ZgInput v-model="test" placeholder="prepend append">
    <template #prepend>Https://</template>
    <template #append>.com</template>
  </ZgInput>
</template>
