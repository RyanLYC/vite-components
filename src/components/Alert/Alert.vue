<template>
  <div>Alert</div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import type { AlertProps } from './types'

defineOptions({
  name: 'ZgAlert',
})
withDefaults(defineProps<AlertProps>(), {
  type: 'info',
  beforeClose: () => true,
})
// const visible = ref(true)
</script>
