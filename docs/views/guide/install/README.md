---
title: '组件使用'
---
##  安装

```
npm install aui
```
###  更新

```
npm update aui
```
###  使用
```
import aui from 'aui'
import 'aui/dist/aui.css'
Vue.use(aui)
```
```vue
<template>
  <div class="test">
    <AgCalendar @selectDay="selectDay"></AgCalendar>
  </div>
</template>

<script>
export default {
  name: 'test',
  components: {
  },
  medthod:{
    selectDay(date){
      console.log(date)
    }
  }
}
</script>

```
### 插件
- 第三方依赖实际项目按需引入:例如element-ui