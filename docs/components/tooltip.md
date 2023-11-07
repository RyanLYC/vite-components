---
title: Tooltip | Z-Element
description: Tooltip 组件的文档
---

# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。

## 基础用法
在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 content 属性来决定 hover 时的提示信息。 由 placement 属性决定展示效果： placement属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 更多内容的文字提示
展示多行文本或者是设置文本内容的格式

用具名 slot content，替代tooltip中的content属性。

<preview path="../demo/Tooltip/More.vue" title="更多内容的文字提示" description="Tooltip 更多内容的文字提示"></preview>

## 手动控制模式
`manual` 打开手动模式;`visible`控制隐藏显示

<preview path="../demo/Tooltip/Visible.vue" title="手动控制模式" description="Tooltip 手动控制模式"></preview>

## 延时打开关闭
<preview path="../demo/Tooltip/After.vue" title="手动控制模式" description="Tooltip 手动控制模式"></preview>

## 追加到 append-to 的位置
<preview path="../demo/Tooltip/AppendTo.vue" title="手动控制模式" description="Tooltip 手动控制模式"></preview>

### Tooltip Attributes

| Name          | Description                                                 | Type                                                                                                                                                                        | Default          |
| ------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| content       | 显示的内容，也可被 slot#content 覆盖                        | string                                                                                                                                                                      | ''               |
| trigger       | 如何触发 Tooltip                                            | `enum - 'hover' \| 'click' `                                                                                                                                                | hover            |
| manual        | 启动收到模式                                                | `boolean`                                                                                                                                                                   | false            |
| popperOptions | 是否显示切换密码图标                                        | `boolean`                                                                                                                                                                   | false            |
| placeholder   | popper.js 参数                                              | `object 请参考 popper.js 文档`                                                                                                                                              | {}               |
| transition    | 动画名称                                                    | `string`                                                                                                                                                                    | 'fade-in-linear' |
| visible       | Tooltip 组件可见性                                          | `boolean`                                                                                                                                                                   | —                |
| showAfter     | 在触发后多久显示内容，单位毫秒                              | `number`                                                                                                                                                                    | 0                |
| hideAfter     | 延迟关闭，单位毫秒                                          | `number`                                                                                                                                                                    | 0                |
| appendTo      | 指示 Tooltip 的内容将附加在哪一个网页元素上                 | `string`                                                                                                                                                                    | —                |
| teleported    | 是否使用 teleport。设置成 true则会被追加到 append-to 的位置 | `boolean`                                                                                                                                                                   | false            |
| placement     | Tooltip 组件出现的位置                                      | `enum - 'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | top              |




### Input Events
| 事件名         | 说明                   | 类型                       |
| -------------- | ---------------------- | -------------------------- |
| visible-change | 提示框状态改变         | `(value: boolean) => void` |
| click-outside  | 是否点击容器之外的位置 | `(value: boolean) => void` |



### Input Slots
| 插槽名  | Description               |
| ------- | ------------------------- |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

### Exposes
| 名称    | 说明                                 | 类型         |
| ------- | ------------------------------------ | ------------ |
| onOpen  | onOpen 方法控制 el-tooltip 显示状态  | `() => void` |
| onClose | onClose 方法控制 el-tooltip 显示状态 | `() => void` |
