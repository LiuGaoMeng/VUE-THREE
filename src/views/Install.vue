<template>
  <div class="Install">
      <h2>aui组件库安装</h2>
      <h3>安装</h3>
      <pre><code>npm install aui</code></pre>
      <h3>更新</h3>
      <pre><code>npm update aui</code></pre>
      <h3>组件使用</h3>
      <pre><code>import aui from 'aui'
import 'aui/dist/aui.css'
Vue.use(aui)</code></pre>
      <highlightjs autodetect :code="html1" />
      <p>第三方依赖按需引入:例如element-ui</p>
  </div>
</template>

<script> 

export default {
  name: 'Install',
  data() {
      return {
        html1: `<template>
  <div class="hello">
    <Msg :name="'test'"></Msg>
    <AgTest :name="'test2222'"></AgTest>
  </div>
</template>`,
      }
  },
}
</script>