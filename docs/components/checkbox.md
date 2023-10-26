---
title: Checkbox | Z-Element
description: Checkbox 组件的文档
---

# Checkbox 多选框
在一组备选项中进行多选。

## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<preview path="../demo/Checkbox/Basic.vue" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 禁用状态
多选框不可用状态。

设置 `disabled` 属性即可。
<preview path="../demo/Checkbox/Disabled.vue" title="不可用状态。" description="Checkbox 不可用状态。"></preview>

## 组合用法

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<preview path="../demo/Checkbox/Group.vue" title="组合用法" description="Checkbox 组合用法"></preview>

### 配置方式

通过配置`options`直接生成选项

<preview path="../demo/Checkbox/Options.vue" title="配置方式" description="Checkbox 配置方式"></preview>




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
| value                 | 选中状态的值（搭配 CheckboxGroup 使用时有效）                   | string / number / boolean     | `null`  |

### Checkbox Events
| 事件名 | 说明                              | 类型                                         |
| ------ | --------------------------------- | -------------------------------------------- |
| change | Checkbox 状态发生变化时的回调函数 | `(val: boolean \| string \| number) => void` |

## Checkbox Slots

| 名称    | 说明                                  |
| ------- | ------------------------------------- |
| default | 描述和介绍。相比 label，slot 优先使用 |

## CheckboxGroup Props

| 属性                 | 说明                              | 类型                                                                                      | 默认值  |
| -------------------- | --------------------------------- | ----------------------------------------------------------------------------------------- | ------- |
| disabled             | 是否禁用                          | boolean                                                                                   | `false` |
| model-value /v-model | 绑定值                            | `array - ValueTypeBSN[] 可直接引入使用 - type ValueTypeBSN = string \| number \| boolean` | `[]`    |
| vertical             | 是否垂直排列（默认水平排列）      | boolean                                                                                   | `false` |
| options              | 选项配置                          | array\<Option\>                                                                           | `[]`    |
| valueField           | 替代 `Option` 中的 `value` 字段名 | string                                                                                    | `value` |
| labelField           | 替代 `Option` 中的 `label` 字段名 | string                                                                                    | `label` |

## CheckboxGroup Events

| 事件名称 | 说明                     | 回调参数                      |
| -------- | ------------------------ | ----------------------------- |
| change   | 当绑定值变化时触发的事件 | (val: ValueTypeBSN[]) => void |

## CheckboxGroup Slots

| 名称    | 说明          |
| ------- | ------------- |
| default | Checkbox 组件 |

## Option Props

| 属性     | 说明               | 类型                      | 默认值  |
| -------- | ------------------ | ------------------------- | ------- |
| value    | 选项的值，需要唯一 | string / number / boolean | -       |
| label    | 选项的标签         | string / number           | -       |
| disabled | 是否禁用           | boolean                   | `false` |
