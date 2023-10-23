---
title: Card | Z-Element
description: Card 组件的文档
---

# Card 提示
将信息聚合在卡片容器中展示。

## 基础用法
卡片包含标题，内容以及操作区域。

Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。

<preview path="../demo/Card/Basic.vue" title="基础用法" description="Card 组件的基础用法"></preview>

### Input Attributes

| Name       | Description                                                                         | Type                       | Default |
| ---------- | ----------------------------------------------------------------------------------- | -------------------------- | ------- |
| header     | 卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 | string                     | —       |
| body-style | body 的 CSS 样式                                                                    | `object`                   | —       |
| shadow     | 卡片阴影显示时机                                                                    | `always \| never \| hover` | always  |
| divider    | 标题border bottom                                                                   | `boolean`                  | false   |
| bordered   | 是否有边框                                                                          | `boolean`                  | false   |


### Input Slots
| 插槽名  | Description    |
| ------- | -------------- |
| default | 自定义默认内容 |
| header  | 卡片标题内容   |
