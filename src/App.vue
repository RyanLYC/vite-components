<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LoadingOutlined, ArrowUpOutlined } from 'vite-components-last/icon'

const primaryBtn = ref()

onMounted(() => {
  if (primaryBtn.value) {
    console.log('primaryBtn:', primaryBtn.value.ref)
  }
})

const openedValue = ref(['a'])
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
  <div>
    <ZgCollapse v-model="openedValue">
      <ZgCollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </ZgCollapseItem>
      <ZgCollapseItem name="b" title="Title B">
        <div>this is bbbbb test</div>
      </ZgCollapseItem>
      <ZgCollapseItem name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </ZgCollapseItem>
    </ZgCollapse>
  </div>
</template>

<style>
div {
  padding: 5px;
}
</style>
