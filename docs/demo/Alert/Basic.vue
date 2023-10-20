<script lang="ts" setup>
import ZgAlert from '@/components/Alert'
</script>
<template>
  <div class="block">
    <ZgAlert class="alert" title="success alert" type="success" />
    <ZgAlert class="alert" title="info alert" type="info" />
    <ZgAlert class="alert" title="warning alert" type="warning" />
    <ZgAlert class="alert" title="error alert" type="error" />
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
