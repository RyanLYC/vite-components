<template>
  <div class="demo-color-box" :style="{ background: color }">
    Brand Color
    <div class="value">{{ color }}</div>
    <div class="bg-color-sub" :style="{ background: color }">
      <div
        v-for="item in weights"
        :key="item"
        class="bg-blue-sub-item"
        :style="{
          width: '16.6667%',
          background: `var(--zg-color-${name}-${item === 2 ? 'dark' : 'light'}-${item})`,
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import {ref} from 'vue'
const weights = [2, 3, 5, 7, 8, 9]
defineProps({
  name: {
    type: String,
    default: 'primary',
  },
  color: {
    type: String,
    default: '#409eff',
  },
})
</script>
<style scoped lang="scss">
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 8px 0;
  height: 112px;
  box-sizing: border-box;
  color: var(--zg-color-white);
  font-size: 14px;
  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;
    .bg-blue-sub-item {
      height: 100%;
      display: inline-block;
    }
    .bg-blue-sub-item:first-child {
      border-radius: 0 0 0 4px;
    }
  }
}
</style>
