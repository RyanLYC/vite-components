<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const value1 = ref(true)
</script>
<template>
  正常：<ZgSwitch v-model="value" /> <br />
  禁用：<ZgSwitch v-model="value1" disabled />
</template>

<style>
.mr {
  margin-right: 10px;
}
</style>
