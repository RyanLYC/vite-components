<script lang="ts" setup>
import ZgAlert from '@/components/Alert'
</script>
<template>
  <div class="block">
    <ZgAlert title="常规信息提示内容" showIcon />
  </div>
  <div class="block">
    <ZgAlert title="常规信息提示内容" showIcon closable />
  </div>
  <div class="block">
    <ZgAlert title="常规信息提示内容" type="success" description="这是个描述" />
  </div>

  <div class="block">
    <ZgAlert title="常规信息提示内容" type="warning" showIcon description="这是个描述" center closable />
  </div>
  <div class="block">
    <ZgAlert title="常规信息提示内容" type="error" showIcon closable description="这是个描述" />
  </div>
</template>
<style>
.block {
  margin-bottom: 10px;
  width: 60%;
}
</style>
