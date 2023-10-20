<template>
  <span v-for="item in types" :key="item">
    <ZgButton style="margin-right: 10px" @click="crtMsg(item)">{{ item }}</ZgButton>
  </span>
</template>
<script lang="ts" setup>
import { ZgButton, createMessage } from '@/components/index'

const types = ['success', 'info', 'warning', 'error']

const crtMsg = (type: string) => {
  createMessage({
    message: '这个常规信息！',
    type,
    showIcon: true,
    showClose: true,
  })
}
</script>

<style>
.block {
  margin-bottom: 10px;
  width: 60%;
}
</style>
