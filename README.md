# PickerView

移动端picker选择组件

> 复用了 Ant Design Mobile 的PickerView组件 在此作为单一组件包使用，无需下载整个 Ant Design Mobile 包

### 属性

| 属性           | 说明                         | 类型                                                           | 默认值                           |
| -------------- | ---------------------------- | -------------------------------------------------------------- | -------------------------------- |
| columns        | 配置每一列的选项             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -                                |
| defaultValue   | 默认选中项                   | `PickerValue[]`                                                | `[]`                             |
| mouseWheel     | 是否允许通过鼠标滚轮进行选择 | `boolean`                                                      | `false`                          |
| onChange       | 选项改变时触发               | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -                                |
| renderLabel    | 自定义渲染每列展示的内容     | `(item: PickerColumnItem) => ReactNode`                        | `(item) => item.label`           |
| value          | 选中项                       | `PickerValue[]`                                                | -                                |
| loading        | 是否处于加载状态             | `boolean`                                                      | `false`                          |
| loadingContent | 加载状态下展示的内容         | `ReactNode`                                                    | `默认提供了转圈加载中的加载效果` |

### CSS 变量

| 属性             | 说明                                 | 默认值  |
| ---------------- | ------------------------------------ | ------- |
| --height         | 整体的高度                           | `240px` |
| --item-font-size | 选项的字号                           | `16px`  |
| --item-height    | 选项的高度，仅支持 px rem 和 vw 单位 | `34px`  |