<script lang="ts" setup>
import { ZgButton } from '../../index'
import { ArrowDownOutlined, ArrowUpOutlined, LoadingOutlined, SearchOutlined, UserOutlined } from '../../components/Icon'

defineOptions({
  name: 'ZgButtonDemo',
})
</script>
<template>
  <div class="basic block">
    <ZgButton>Default</ZgButton>
    <ZgButton type="primary">Primary</ZgButton>
    <ZgButton type="success">Success</ZgButton>
    <ZgButton type="info">Info</ZgButton>
    <ZgButton type="warning">Warning</ZgButton>
    <ZgButton type="danger">Danger</ZgButton>
  </div>

  <div class="plain block">
    <ZgButton plain>Plain</ZgButton>
    <ZgButton type="primary" plain>Primary</ZgButton>
    <ZgButton type="success" plain>Success</ZgButton>
    <ZgButton type="info" plain>Info</ZgButton>
    <ZgButton type="warning" plain>Warning</ZgButton>
    <ZgButton type="danger" plain>Danger</ZgButton>
  </div>

  <div class="round block">
    <ZgButton round>Round</ZgButton>
    <ZgButton type="primary" round>Primary</ZgButton>
    <ZgButton type="success" round>Success</ZgButton>
    <ZgButton type="info" round>Info</ZgButton>
    <ZgButton type="warning" round>Warning</ZgButton>
    <ZgButton type="danger" round>Danger</ZgButton>
  </div>

  <div class="circle block">
    <ZgButton circle> <UserOutlined /></ZgButton>
    <ZgButton type="primary" circle> <ArrowDownOutlined /> </ZgButton>
    <ZgButton type="success" circle> <ArrowUpOutlined /> </ZgButton>
    <ZgButton type="warning" circle> <LoadingOutlined /> </ZgButton>
    <ZgButton type="danger" circle> <SearchOutlined /> </ZgButton>
    <ZgButton type="info" circle> <UserOutlined /> </ZgButton>
    <ZgButton type="primary" loading> </ZgButton>
  </div>

  <div class="disable block">
    <ZgButton disabled>disabled</ZgButton>
    <ZgButton type="primary" disabled>Primary</ZgButton>
    <ZgButton type="success" disabled>Success</ZgButton>
    <ZgButton type="info" disabled>Info</ZgButton>
    <ZgButton type="warning" disabled>Warning</ZgButton>
    <ZgButton type="danger" disabled>Danger</ZgButton>
  </div>
</template>

<style>
.block {
  margin-bottom: 10px;
}
</style>
