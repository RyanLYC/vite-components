<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LoadingOutlined, ArrowUpOutlined } from 'vite-components-last/icon'
import type { ValueTypeSN, ButtonProps } from 'vite-components-last'

const buttonProps = {} as ButtonProps
console.log('buttonProps:', buttonProps)
const primaryBtn = ref()

onMounted(() => {
  if (primaryBtn.value) {
    console.log('primaryBtn:', primaryBtn.value.ref)
  }
})

const activeNames = ref(['1'])
const handleChange = (val: ValueTypeSN[]) => {
  console.log(val)
}
</script>

<template>
  <div>
    <zg-button type="primary" ref="primaryBtn" loading>primary</zg-button>
    <ZgButton type="success" :loading="true">success</ZgButton>
    <ZgButton type="warning">warning</ZgButton>
    <ZgButton type="danger">danger</ZgButton>
    <ZgButton type="info">info</ZgButton>
  </div>
  <div>
    <ZgButton type="primary" circle><LoadingOutlined /> </ZgButton>
    <ZgButton type="success" circle><ArrowUpOutlined rotate="45" /> </ZgButton>
    <zg-button type="info" :plain="true">666</zg-button>
    <ZgButton type="danger">danger</ZgButton>
  </div>
  <div>
    <zg-collapse v-model="activeNames" @change="handleChange">
      <zg-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;
        </div>
        <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
      </zg-collapse-item>
      <zg-collapse-item title="Feedback" name="2" disabled>
        <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
      </zg-collapse-item>
      <zg-collapse-item title="Efficiency" name="3">
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.
        </div>
      </zg-collapse-item>
      <zg-collapse-item title="Controllability" name="4">
        <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.
        </div>
      </zg-collapse-item>
    </zg-collapse>
  </div>
</template>

<style>
div {
  padding: 5px;
}
</style>
