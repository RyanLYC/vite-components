---
title: Collapse | Z-Element
description: Button 组件的文档
---

# Collapse 折叠面板
通过折叠面板收纳内容区域。

# 基础用法
可同时展开多个面板，面板之间不影响

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="可同时展开多个面板，面板之间不影响。"></preview>

# 手风琴效果
每次只能展开一个面板

<preview path="../demo/Collapse/Accordion.vue" title="手风琴效果" description="每次只能展开一个面板。"></preview>

### Collapse Attributes

| Name                  | Description    | Type      | Default |
| --------------------- | -------------- | --------- | ------- |
| model-value / v-model | 当前激活的面板 | `array`   | —       |
| accordion             | 是否手风琴模式 | `boolean` | —       |

### Collapse Events
| 事件名 | 说明                   | 回调参数 |
| ------ | ---------------------- | -------- |
| change | 当前激活面板改变时触发 | `array`  |

### Collapse Slots
| 插槽名  | Description    | 子标签          |
| ------- | -------------- | --------------- |
| default | 自定义默认内容 | `Collapse Item` |

### Collapse Item Attributes
| Name     | Description | Type            | Default |
| -------- | ----------- | --------------- | ------- |
| name     | 唯一标志符  | `string/number` | —       |
| title    | 面板标题    | `string`        | —       |
| disabled | 是否禁用    | `boolean`       | —       |

### Collapse Item Slot
| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | Collapse Item 的内容 |
| title   | Collapse Item 的标题 |
