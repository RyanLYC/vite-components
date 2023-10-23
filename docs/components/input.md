---
title: Input | Z-Element
description: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础用法

<preview path="../demo/Input/Basic.vue" title="基础用法" description="Input 基础用法"></preview>

## 禁用状态
通过 disabled 属性指定是否禁用 input 组件

<preview path="../demo/Input/Disable.vue" title="禁用状态" description="Input 禁用状态"></preview>

## 一键清空
使用clearable属性即可得到一个可一键清空的输入框

<preview path="../demo/Input/Clear.vue" title="一键清空" description="Input 一键清空"></preview>

## 密码框
<preview path="../demo/Input/Password.vue" title="密码框" description="Input 密码框"></preview>

## 带图标的输入框
<preview path="../demo/Input/Icon.vue" title="带图标的输入框" description="Input 带图标的输入框"></preview>

## 文本域
用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的 textarea 元素。
<preview path="../demo/Input/Text.vue" title="文本域" description="Input 文本域"></preview>

## 复合型输入框
可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 slot 来指定在 Input 中分发的前置或者后置的内容。
<preview path="../demo/Input/Composite.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。
<preview path="../demo/Input/Size.vue" title="尺寸" description="Input 尺寸"></preview>


### Input Attributes

| Name                  | Description                                       | Type                     | Default |
| --------------------- | ------------------------------------------------- | ------------------------ | ------- |
| type                  | 类型                                              | string 等原生 input 类型 | text    |
| model-value / v-model | 绑定值                                            | `string / number`        | —       |
| disabled              | 是否禁用                                          | `boolean`                | false   |
| clearable             | 是否显示清除按钮，只有当 type 不是 textarea时生效 | `boolean`                | false   |
| showPassword          | 是否显示切换密码图标                              | `boolean`                | false   |
| placeholder           | 输入框占位文本                                    | `string`                 | —       |
| readonly              | 原生  readonly 属性，是否只读                     | `boolean`                | false   |
| autofocus             | 原生属性，自动获取焦点                            | `boolean`                | false   |
| autocomplete          | 原生 autocomplete 属性                            | `string`                 | off     |
| form                  | 原生 form 属性                                    | `string`                 | —       |
| size                  | 尺寸                                              | `'large'\| 'small'`      | —       |


### Input Events
| 事件名 | 说明                                                        | 类型                          |
| ------ | ----------------------------------------------------------- | ----------------------------- |
| blur   | 当选择器的输入框失去焦点时触发                              | `(value: FocusEvent) => void` |
| focus  | 当选择器的输入框获得焦点时触发                              | `(value: FocusEvent) => void` |
| clear  | 在点击由 clearable 属性生成的清空按钮时触发                 | `() => void`                  |
| change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | `(value: string ) => void`    |
| input  | 在 Input 值改变时触发                                       | `(value: string ) => void`    |


### Input Slots
| 插槽名  | Description                                 |
| ------- | ------------------------------------------- |
| prefix  | 输入框头部内容，只对非 type="textarea" 有效 |
| suffix  | 输入框尾部内容，只对非 type="textarea" 有效 |
| prepend | 输入框前置内容，只对非 type="textarea" 有效 |
| append  | 输入框后置内容，只对非 type="textarea" 有效 |

### Exposes
| 名称 | 说明                       | 类型                                      |
| ---- | -------------------------- | ----------------------------------------- |
| ref  | HTML元素 input 或 textarea | `HTMLInputElement \| HTMLTextAreaElement` |

