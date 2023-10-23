<template>
  <zg-card class="mb" bordered header="标题">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </zg-card>
  <zg-card class="mb" bordered divider shadow="hover">
    <template #header>
      <div class="card-header">
        <span>header 插槽</span>
        <zg-button class="button" text>Operation button</zg-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </zg-card>
  <div class="mb">no header</div>
  <zg-card class="mb" bordered divider>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </zg-card>

  <zg-card bordered :bodyStyle="{ color: 'var(--zg-color-primary-light-5)' }">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </zg-card>
</template>

<style>
.mb {
  margin-bottom: 10px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
