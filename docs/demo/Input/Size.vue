<script lang="ts" setup>
import { ref } from 'vue'
import ZgInput from '@/components/Input'
const test = ref('')
</script>
<template>
  <div class="size-holder">
    <ZgInput v-model="test" placeholder="大的 Input" size="large"> </ZgInput>
    <ZgInput v-model="test" placeholder="普通的 Input"> </ZgInput>
    <ZgInput v-model="test" placeholder="小的 Input" size="small"> </ZgInput>
  </div>
</template>
<style scoped>
.size-holder {
  display: flex;
  align-items: center;
}
</style>
