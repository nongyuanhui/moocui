# Card
卡片组件

### 示例

<m-card imgSrc="/logo.png" summary="test"/>

## 代码
```html
<m-card imgSrc="/logo.png" summary="test"/>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 | 
| --- | --- | ---  |    ---    | ---   |
| width | 卡片的宽度 | Number | false | -- |
| imgSrc | 图片资源地址 | string | true | -- |
| imgHeight | 图片高度 | Number | false | -- |
| summary | 卡片概要 | string/slot | false | -- |
| footer | 卡片底部 | slot | false | -- | 