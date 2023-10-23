<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const value1 = ref(true)
</script>
<template>
  <ZgSwitch class="mr" v-model="value" />
  <ZgSwitch v-model="value1" style="--zg-switch-on-color: #13ce66; --zg-switch-off-color: #ff4949" />
</template>

<style>
.mr {
  margin-right: 10px;
}
</style>
