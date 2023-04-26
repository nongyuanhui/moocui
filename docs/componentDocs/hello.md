# 快速开始

#### 安装组件库
```bash
npm i mooc-ui2
```

#### 使用组件库
> 在main.js中引用组件库

```javascript
// 全部引入
import 'mooc-ui2/dist/css/index.css';
import MUI from 'mooc-ui2'
Vue.use( MUI )

// 按需引入
import 'mooc-ui2/dist/css/demo.css';
import { Demo } from 'mooc-ui2'
Vue.use( Demo )
```