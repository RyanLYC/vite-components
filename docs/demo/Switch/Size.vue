<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)
const value1 = ref(true)
const value2 = ref(true)
</script>
<template>
  <ZgSwitch class="mr" v-model="value" size="large" />
  <ZgSwitch class="mr" v-model="value1" />
  <ZgSwitch v-model="value2" size="small" />
</template>

<style>
.mr {
  margin-right: 10px;
}
</style>
