<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LoadingOutlined, ArrowUpOutlined } from '@/components/Icon'

const primaryBtn = ref()

onMounted(() => {
  if (primaryBtn.value) {
    console.log('primaryBtn:', primaryBtn.value.ref)
  }
})
</script>

<template>
  <div>
    <ZgButton type="primary" ref="primaryBtn" loading>primary</ZgButton>
    <ZgButton type="success">success</ZgButton>
    <ZgButton type="warning">warning</ZgButton>
    <ZgButton type="danger">danger</ZgButton>
    <ZgButton type="info">info</ZgButton>
  </div>
  <div>
    <ZgButton type="primary" circle><LoadingOutlined /> </ZgButton>
    <ZgButton type="success" circle><ArrowUpOutlined rotate="45" /> </ZgButton>
  </div>
</template>

<style></style>
