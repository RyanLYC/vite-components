<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LoadingOutlined, ArrowUpOutlined } from 'vite-components-last/icon'

const primaryBtn = ref()

onMounted(() => {
  if (primaryBtn.value) {
    console.log('primaryBtn:', primaryBtn.value.ref)
  }
})
</script>

<template>
  <div>
    <zg-button type="primary" ref="primaryBtn" loading>primary</zg-button>
    <ZgButton type="success" :loading="true">success</ZgButton>
    <ZgButton type="warning">warning</ZgButton>
    <ZgButton type="danger">danger</ZgButton>
    <ZgButton type="info">info</ZgButton>
  </div>
  <div>
    <ZgButton type="primary" circle><LoadingOutlined /> </ZgButton>
    <ZgButton type="success" circle><ArrowUpOutlined rotate="45" /> </ZgButton>
    <zg-button type="info" :plain="true">666</zg-button>
    <ZgButton type="danger">danger</ZgButton>
  </div>
</template>

<style>
div {
  padding: 5px;
}
</style>
