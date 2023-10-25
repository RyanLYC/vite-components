---
title: Checkbox | Z-Element
description: Checkbox 组件的文档
---

# Checkbox 多选框
在一组备选项中进行多选。

## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<preview path="../demo/Checkbox/Basic.vue" title="基础用法" description="Checkbox 组件的基础用法"></preview>

# 禁用状态
多选框不可用状态。

设置 `disabled` 属性即可。
<preview path="../demo/Checkbox/Disabled.vue" title="基础用法" description="Checkbox 组件的基础用法"></preview>

### Checkbox Attributes

| Name                  | Description                                                     | Type                          | Default |
| --------------------- | --------------------------------------------------------------- | ----------------------------- | ------- |
| model-value / v-model | 绑定值，必须等于 true-value 或 false-value，默认为 Boolean 类型 | `boolean \| string \| number` | false   |
| disabled              | 是否禁用                                                        | `boolean`                     | false   |
| true-value            | 选中时的值                                                      | `boolean \| string \| number` | true    |
| false-value           | 没有选中时的值                                                  | `boolean \| string \| number` | false   |
| indeterminate         | 设置不确定状态，仅负责样式控制                                  | `boolean`                     | false   |
| label                 | 描述和介绍                                                      | string                        | null    |
| size                  | 尺寸                                                            | `'large'\| 'small'`           | —       |

### Checkbox Events
| 事件名 | 说明                              | 类型                                         |
| ------ | --------------------------------- | -------------------------------------------- |
| change | Checkbox 状态发生变化时的回调函数 | `(val: boolean \| string \| number) => void` |
