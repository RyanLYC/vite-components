<template>
  <ZgButton @click="crtMsg">message</ZgButton>
</template>
<script lang="ts" setup>
import { ZgButton, createMessage } from '@/components/index'
import { h } from 'vue'

const types = ['success', 'info', 'warning', 'error']
let index = 0
const crtMsg = () => {
  const instance = createMessage({
    message: '这个常规信息！',
    type: types[index % 5] as any,
    offset: 10,
    showIcon: true,
    showClose: true,
  })

  const instance2 = createMessage({
    message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
    type: types[index % 5] as any,
    offset: 10,
    showIcon: true,
    showClose: true,
  })
  console.log('instance:', instance)
  console.log('instance2:', instance2)
  index++
}
</script>

<style>
.block {
  margin-bottom: 10px;
  width: 60%;
}
</style>
