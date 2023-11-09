<template>
  <div class="page-bx">
    <div class="left">
      <template v-for="item in componentsName" :key="item">
        <div
          :class="{
            'name-bx-act': actName === item,
            'name-bx': true,
          }"
          @click="chosePage(item)"
        >
          {{ item }}
        </div>
      </template>
    </div>
    <div class="right">
      <template v-for="item in componentsList" :key="item.name">
        <component :is="item" v-if="actName === item.name"></component>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ZgDropdownDemo from './devDemo/Dropdown/index.vue'
import ZgTooltipDemo from './devDemo/Tooltip/index.vue'
import ZgButtonDemo from './devDemo/Button/index.vue'
import ZgCollapseDemo from './devDemo/Collapse/index.vue'

const componentsList = ref([ZgButtonDemo, ZgCollapseDemo, ZgTooltipDemo, ZgDropdownDemo])
const componentsName = computed(() => {
  const names = componentsList.value.map((item) => item.name)
  return names
})
// 当前组件名称
const actName = ref('ZgDropdownDemo')
// 点击函数
const chosePage = (name: string) => {
  actName.value = name
}
</script>

<style lang="scss" scoped>
.page-bx {
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  .left {
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 200px;
    min-height: 100%;
    padding: 10px;
    font-size: 14px;
    background: #f0f1f5;
    border: solid 1px #eaeaee;
    box-sizing: border-box;
    .name-bx {
      padding: 10px 20px;
      cursor: pointer;
    }
    .name-bx-act {
      color: blue;
    }
  }
  .right {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
