<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(false)
</script>
<template>
  <ZgSwitch v-model="value" activeText="ON" inactiveText="OFF" />
</template>
