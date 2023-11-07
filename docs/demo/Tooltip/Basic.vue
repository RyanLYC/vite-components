<script lang="ts" setup>
// import { ref } from 'vue'
</script>
<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ZgTooltip class="box-item" content="Top Left prompts info" placement="top-start">
        <ZgButton>top-start</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <ZgButton>top</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Top Right prompts info" placement="top-end">
        <ZgButton>top-end</ZgButton>
      </ZgTooltip>
    </div>
    <div class="row">
      <ZgTooltip class="box-item" effect="dark" content="Left Top prompts info" placement="left-start">
        <ZgButton>left-start</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Right Top prompts info" placement="right-start">
        <ZgButton>right-start</ZgButton>
      </ZgTooltip>
    </div>
    <div class="row">
      <ZgTooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <ZgButton class="mt-3 mb-3">left</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Right Center prompts info" placement="right">
        <ZgButton>right</ZgButton>
      </ZgTooltip>
    </div>
    <div class="row">
      <ZgTooltip class="box-item" effect="dark" content="Left Bottom prompts info" placement="left-end">
        <ZgButton>left-end</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Right Bottom prompts info" placement="right-end">
        <ZgButton>right-end</ZgButton>
      </ZgTooltip>
    </div>
    <div class="row center">
      <ZgTooltip class="box-item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
        <ZgButton>bottom-start</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Bottom Center prompts info" placement="bottom">
        <ZgButton>bottom</ZgButton>
      </ZgTooltip>
      <ZgTooltip class="box-item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
        <ZgButton>bottom-end</ZgButton>
      </ZgTooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  padding: 20px 0 0 100px;
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
