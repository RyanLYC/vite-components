<script lang="ts" setup>
// import { ref } from 'vue'
</script>
<template>
  <ZgTooltip placement="top" :showAfter="1000" :hideAfter="1000">
    <template #content> multiple lines<br />second line </template>
    <ZgButton>Top center</ZgButton>
  </ZgTooltip>
</template>

<style></style>
