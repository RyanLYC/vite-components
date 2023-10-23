<script setup>
import { ref } from 'vue'
const value = ref('right')
</script>
<template>
  <ZgSwitch v-model="value" activeValue="right" inactiveValue="wrong" />
  <h4>model-value: {{ value }}</h4>
</template>
