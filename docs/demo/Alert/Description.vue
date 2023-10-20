<script lang="ts" setup>
import ZgAlert from '@/components/Alert'
</script>
<template>
  <div class="block">
    <ZgAlert class="alert" title="success alert" type="success" showIcon description="描述信息" />
    <ZgAlert class="alert" title="info alert" type="info" showIcon description="描述信息" />
    <ZgAlert class="alert" title="warning alert" type="warning" showIcon description="描述信息" />
    <ZgAlert class="alert" title="error alert" type="error" showIcon description="描述信息" />
  </div>
</template>
<style>
.block {
  margin-bottom: 10px;
  width: 60%;
  .alert {
    margin-bottom: 10px;
  }
}
</style>
