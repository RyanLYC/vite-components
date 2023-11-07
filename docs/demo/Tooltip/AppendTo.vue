<script lang="ts" setup>
// import { ref } from 'vue'
</script>
<template>
  <div class="testClass">class="testClass"</div>
  <div id="testId">id="testId"</div>
  <ZgTooltip placement="top" appendTo=".testClass" teleported>
    <template #content> multiple lines<br />second line </template>
    <ZgButton>Top center</ZgButton>
  </ZgTooltip>
  <ZgTooltip placement="top-start" appendTo="#testId" teleported>
    <template #content> multiple lines<br />second line </template>
    <ZgButton>top start</ZgButton>
  </ZgTooltip>
</template>

<style>
.testClass,
#testId {
  width: 150px;
  height: 50px;
  margin: 20px;
}
</style>
