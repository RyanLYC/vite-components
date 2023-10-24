<script lang="ts" setup></script>
<template>
  <div class="block">
    <ZgAlert class="alert" title="success alert" type="success" showIcon />
    <ZgAlert class="alert" title="info alert" type="info" showIcon />
    <ZgAlert class="alert" title="warning alert" type="warning" showIcon />
    <ZgAlert class="alert" title="error alert" type="error" showIcon />
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
