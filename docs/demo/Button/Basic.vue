<script lang="ts" setup>
import ZgButton from '@/components/Button'
</script>
<template>
  <div class="basic block">
    <ZgButton> hello </ZgButton>
    <ZgButton type="primary"> Primary </ZgButton>
    <ZgButton type="success"> Success </ZgButton>
    <ZgButton type="warning"> Warning </ZgButton>
    <ZgButton type="danger"> Danger </ZgButton>
    <ZgButton type="info"> Info </ZgButton>
  </div>

  <div class="plain block">
    <ZgButton plain> hello </ZgButton>
    <ZgButton type="primary" plain> Primary </ZgButton>
    <ZgButton type="success" plain> Success </ZgButton>
    <ZgButton type="warning" plain> Warning </ZgButton>
    <ZgButton type="danger" plain> Danger </ZgButton>
    <ZgButton type="info" plain> Info </ZgButton>
  </div>

  <div class="round block">
    <ZgButton round> hello </ZgButton>
    <ZgButton type="primary" round> Primary </ZgButton>
    <ZgButton type="success" round> Success </ZgButton>
    <ZgButton type="warning" round> Warning </ZgButton>
    <ZgButton type="danger" round> Danger </ZgButton>
    <ZgButton type="info" round> Info </ZgButton>
  </div>

  <div class="circle block">
    <ZgButton circle> <UserOutlined /></ZgButton>
    <ZgButton type="primary" circle> <ArrowDownOutlined /> </ZgButton>
    <ZgButton type="success" circle> <ArrowUpOutlined /> </ZgButton>
    <ZgButton type="warning" circle> <LoadingOutlined /> </ZgButton>
    <ZgButton type="danger" circle> <SearchOutlined /> </ZgButton>
    <ZgButton type="info" circle> <UserOutlined /> </ZgButton>
  </div>

  <div class="disable block">
    <ZgButton disabled> hello </ZgButton>
    <ZgButton type="primary" disabled> Primary </ZgButton>
    <ZgButton type="success" disabled> Success </ZgButton>
    <ZgButton type="warning" disabled> Warning </ZgButton>
    <ZgButton type="danger" disabled> Danger </ZgButton>
    <ZgButton type="info" disabled> Info </ZgButton>
  </div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
</style>
