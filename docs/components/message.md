---
title: Message | Z-Element
description: Alert 组件的文档
---

# Message 提示
用于页面中展示重要的提示信息。

## 基础用法  

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></preview>

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="../demo/Message/Status.vue" title="基础用法" description="Message 组件的基础用法"></preview>


### Icon Attributes

| Name      | Description                                  | Type                                                | Default |
| --------- | -------------------------------------------- | --------------------------------------------------- | ------- |
| message   | 消息文字                                     | `string \| VNode`                                   | -       |
| duration  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭 | `number`                                            | 3000    |
| showClose | 是否显示关闭按钮                             | `boolean`                                           | -       |
| showIcon  | 是否显示类型图标                             | `boolean`                                           | -       |
| type      | 消息类型                                     | `enum` - `'success'\| 'warning'\| 'error'\| 'info'` | info    |
| offset    | Message 距离窗口顶部的偏移量                 | `number`                                            | 20      |


