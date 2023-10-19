<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const password = ref('')
const disabled = ref('')
const text = ref('')
</script>
<template>
  <ZgInput v-model="value" placeholder="基础文本框，请输入" clearable size="large">
    <template #prepend>Http://</template>
    <template #append>.com</template>

    <template #prefix><ArrowDownOutlined /></template>
    <template #suffix><ArrowUpOutlined /></template>
  </ZgInput>
  <hr />
  <ZgInput v-model="password" placeholder="基础文本框，请输入" showPassword>
    <template #prepend>Http://</template>
  </ZgInput>
  <hr />
  <ZgInput v-model="disabled" placeholder="基础文本框，请输入" clearable size="small" disabled />
  <hr />
  <ZgInput v-model="text" type="textarea" placeholder="基础文本框，请输入" />
  <span>{{ value }}</span>
</template>
