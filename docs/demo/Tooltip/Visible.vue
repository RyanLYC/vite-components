<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(true)
</script>
<template>
  <ZgTooltip placement="top" :visible="visible" manual>
    <template #content> multiple lines<br />second line </template>
    <ZgButton @click="visible = !visible">Top center</ZgButton>
  </ZgTooltip>
</template>

<style></style>
