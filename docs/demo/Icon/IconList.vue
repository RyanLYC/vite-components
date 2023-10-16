<script lang="ts" setup>
import * as Icons from '@/components/Icon'
import { iconNames } from './icons'
import { createMessage } from '@/components/Message/CreateMessage'

type IconType = keyof typeof Icons

const iconsArray = iconNames as IconType[]

const copyItem = (name: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(`<${name}/>`)
    createMessage({ message: `<${name}/>`, type: 'success', showIcon: true })
  }
}
</script>
<template>
  <ul class="demo-icon-list">
    <li class="icon-item" v-for="item in iconsArray" :key="item" @click="copyItem(item)">
      <component :is="Icons[item]"></component>
      <span class="icon-name">{{ item }}</span>
    </li>
  </ul>
</template>
<style>
.demo-icon-list {
  overflow: hidden;
  padding: 0 !important;
  border-top: 1px solid var(--zg-border-color);
  border-left: 1px solid var(--zg-border-color);
  border-radius: var(--zg-border-radius-base);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style-type: none !important;

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90px;
    font-size: 15px;
    border-right: 1px solid var(--zg-border-color);
    border-bottom: 1px solid var(--zg-border-color);
    margin: 0;
    padding-top: 20px;
    cursor: pointer;
    /* transition: background-color var(--zg-transition-duration); */
    .icon-name {
      font-size: 13px;
      display: block;
    }
  }
  .icon-item:hover {
    background-color: var(--zg-border-color-extra-light);
    color: var(--zg-text-color-secondary);
  }
}
</style>
