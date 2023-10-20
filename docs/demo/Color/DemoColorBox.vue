<template>
  <div class="demo-color-box" :style="{ background: color }">
    <div @click="main" class="main">
      <div>{{ name }}</div>
      <div class="value">{{ color }}</div>
    </div>

    <div class="bg-color-sub" :style="{ background: color }">
      <div
        v-for="item in weights"
        :key="item"
        class="bg-blue-sub-item"
        :style="{
          width: '16.6667%',
          background: `var(--zg-color-${name}-${item === 2 ? 'dark' : 'light'}-${item})`,
        }"
        @click="assist(item)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createMessage } from '@/components/Message/CreateMessage'

const weights = [2, 3, 5, 7, 8, 9]
const props = defineProps({
  name: {
    type: String,
    default: 'primary',
  },
  color: {
    type: String,
    default: '#409eff',
  },
})
const main = () => {
  const message = `var(--zg-color-${props.name})`
  tips(message)
}
const assist = (item: number) => {
  const message = `var(--zg-color-${props.name}-${item === 2 ? 'dark' : 'light'}-${item})`
  tips(message)
}
const tips = (message: string) => {
  navigator.clipboard.writeText(message)
  createMessage({
    message,
    type: 'success',
    offset: 10,
    showIcon: true,
  })
}
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
  .main {
    cursor: pointer;
  }
  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;
    cursor: pointer;
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
