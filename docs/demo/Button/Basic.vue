<script lang="ts" setup>
import Button from '@/components/Button'
</script>
<template>
  <div class="basic block">
    <Button> hello </Button>
    <Button type="primary"> Primary </Button>
    <Button type="success"> Success </Button>
    <Button type="warning"> Warning </Button>
    <Button type="danger"> Danger </Button>
    <Button type="info"> Info </Button>
  </div>

  <div class="plain block">
    <Button plain> hello </Button>
    <Button type="primary" plain> Primary </Button>
    <Button type="success" plain> Success </Button>
    <Button type="warning" plain> Warning </Button>
    <Button type="danger" plain> Danger </Button>
    <Button type="info" plain> Info </Button>
  </div>

  <div class="round block">
    <Button round> hello </Button>
    <Button type="primary" round> Primary </Button>
    <Button type="success" round> Success </Button>
    <Button type="warning" round> Warning </Button>
    <Button type="danger" round> Danger </Button>
    <Button type="info" round> Info </Button>
  </div>

  <div class="circle block">
    <Button circle> <UserOutlined /></Button>
    <Button type="primary" circle> <ArrowDownOutlined /> </Button>
    <Button type="success" circle> <ArrowUpOutlined /> </Button>
    <Button type="warning" circle> <LoadingOutlined /> </Button>
    <Button type="danger" circle> <SearchOutlined /> </Button>
    <Button type="info" circle> <UserOutlined /> </Button>
  </div>

  <div class="disable block">
    <Button disabled> hello </Button>
    <Button type="primary" disabled> Primary </Button>
    <Button type="success" disabled> Success </Button>
    <Button type="warning" disabled> Warning </Button>
    <Button type="danger" disabled> Danger </Button>
    <Button type="info" disabled> Info </Button>
  </div>
</template>
<style>
.block {
  margin-bottom: 10px;
}
</style>
