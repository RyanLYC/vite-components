<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
<template>
  <ZgInput v-model="value" placeholder="基础文本框，请输入" clearable />
  <span>{{ value }}</span>
</template>
