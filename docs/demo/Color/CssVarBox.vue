<template>
  <div class="demo-color-box-group">
    <div class="text-wrapper">
      <div class="demo-color-box" v-for="(value, key) in textColors" :key="key" :style="{ background: value }" @click="tips(`--zg-${key}`)">
        <div>{{ value }}</div>
        <div>{{ key }}</div>
      </div>
    </div>
    <div class="text-wrapper">
      <div class="demo-color-box" v-for="(value, key) in textFontSize" :key="key" :style="{ background: '#606266' }" @click="tips(`--zg-${key}`)">
        <div>{{ value }}</div>
        <div>{{ key }}</div>
      </div>
    </div>
    <div class="text-wrapper">
      <div
        class="demo-color-box"
        v-for="(value, key) in borderColors"
        :key="key"
        :style="{ background: value, color: '#000' }"
        @click="tips(`--zg-${key}`)"
      >
        <div>{{ value }}</div>
        <div>{{ key }}</div>
      </div>
    </div>
    <div class="text-wrapper">
      <div
        class="demo-color-box"
        v-for="(value, key) in fillColors"
        :key="key"
        :style="{ background: value, color: '#000' }"
        @click="tips(`--zg-${key}`)"
      >
        <div>{{ value }}</div>
        <div>{{ key }}</div>
      </div>
    </div>
    <div class="text-wrapper">
      <div
        class="demo-color-box"
        v-for="(value, key, index) in bgColors"
        :key="key"
        :style="{ background: value, color: index === 1 ? '#fff' : '#000' }"
        @click="tips(`--zg-${key}`)"
      >
        <div>{{ value }}</div>
        <div>{{ key }}</div>
      </div>
    </div>
  </div>

  <div class="text-wrapper-other">
    <div class="demo-color-box" v-for="(value, key) in others" :key="key" :style="{ background: '#606266' }" @click="tips(`--zg-${key}`)">
      <span>{{ key }}</span>
      =
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { createMessage } from 'vite-components-last'

const textColors = {
  'text-color-primary': '#303133',
  'text-color-regular': '#606266',
  'text-color-secondary': '#909399',
  'text-color-placeholder': '#a8abb2',
  'text-color-disabled': '#c0c4cc',
}
const textFontSize = {
  'font-size-extra-small': '12px',
  'font-size-small': '13px',
  'font-size-base': '14px',
  'ont-size-medium': '16px',
  'font-size-large': '18px',
  'font-size-extra-large': '20px',
  'font-weight-primary': '500',
  'font-line-height-primary': '24px',
}
const borderColors = {
  'border-color': '#dcdfe6',
  'border-color-light': '#e4e7ed',
  'border-color-lighter': '#ebeef5',
  'border-color-extra-light': '#f2f6fc',
  'border-color-dark': '#d4d7de',
  'border-color-darker': '#cdd0d6',
  'box-shadow-light': '0px 0px 12px rgba(0, 0, 0, 0.12)',
}
const fillColors = {
  'fill-color': '#f0f2f5',
  'fill-color-light': '#f5f7fa',
  'fill-color-lighter': '#fafafa',
  'fill-color-extra-light': '#fafcff',
  'fill-color-dark': '#ebedf0',
  'fill-color-darker': '#e6e8eb',
  'fill-color-blank': '#ffffff',
}
const bgColors = {
  'color-white': '#ffffff',
  'color-black': '#000000',
  'bg-color': '#ffffff',
  'bg-color-page': '#f2f3f5',
  'bg-color-overlay': '#ffffff',
}

const others = {
  'border-width': '1px',
  'border-style': 'solid',
  'border-color-hover': 'text-color-disabled',
  border: 'border-width border-style border-color',
  'border-radius-base': '4px',
  'border-radius-small': '2px',
  'border-radius-round': '20px',
  'border-radius-circle': '100px',
  'disabled-bg-color': 'fill-color-light',
  'disabled-text-color': 'text-color-placeholder',
  'disabled-border-color': 'border-color-light',
  'transition-duration': '0.3s',
  'transition-duration-fast': '0.2s',
  'component-size-large': '40px',
  'component-size': '32px',
  'component-size-small': '24px',
}
const tips = (message: string) => {
  navigator.clipboard.writeText(`var(${message})`)
  createMessage({
    message: `var(${message})`,
    type: 'success',
    offset: 10,
    showIcon: true,
  })
}
</script>
<style scoped lang="scss">
.demo-color-box-group {
  width: 100%;
  height: 100%;
  display: flex;
  .text-wrapper {
    width: 20%;
    margin-right: 10px;
    .demo-color-box {
      position: relative;
      border-radius: 4px;
      padding: 20px;
      margin: 8px 0;
      height: 112px;
      box-sizing: border-box;
      color: var(--zg-color-white);
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.text-wrapper-other {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .demo-color-box {
    position: relative;
    border-radius: 4px;
    padding: 10px;
    margin: 8px 0;
    width: 32%;
    box-sizing: border-box;
    color: var(--zg-color-white);
    font-size: 14px;
    cursor: pointer;
    margin-right: 10px;
  }
}
</style>
