<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
<template>
  <ZgInput v-model="value" placeholder="密码文本框，可以切换" showPassword />
</template>
