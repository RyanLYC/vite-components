---
title: Alert | Z-Element
description: Alert 组件的文档
---

# Alert 提示
用于页面中展示重要的提示信息。

## 基础用法
Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 type 属性指定，默认值为 info。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## 显示类型图标
使用`showIcon`属性

<preview path="../demo/Alert/Icon.vue" title="基础用法" description="Alert 组件的基础用法"></preview>

## 描述文本
使用`description`属性

<preview path="../demo/Alert/Description.vue" title="基础用法" description="Alert 组件的基础用法"></preview>



### Alert Attributes

| Name        | Description      | Type                                                 | Default |
| ----------- | ---------------- | ---------------------------------------------------- | ------- |
| title       | Alert 标题。     | `string`                                             | —       |
| type        | Alert 类型。     | `enum` - ` 'success'\| 'warning'\| 'error'\| 'info'` | info    |
| description | 描述性文本       | `string`                                             | —       |
| closable    | 是否可以关闭     | `boolean`                                            | true    |
| showIcon    | 是否显示类型图标 | `boolean`                                            | false   |
| center      | 文字是否居中     | `boolean`                                            | false   |


### Alert Slots
| 插槽名      | Description    |
| ----------- | -------------- |
| default     | 标题的内容     |
| description | Alert 内容描述 |
