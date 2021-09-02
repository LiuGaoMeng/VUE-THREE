<template>
  <div class="home">
    <h2>日历组件AgCalendar</h2>
    <p>一个日历组件</p>
    <h3>组件命名</h3>
    <p>AgCalendar</p>
    <h3>基础用法</h3>
    <div class="box">
      <AgCalendar @selectDay="selectDay"></AgCalendar>
    </div>
    <highlightjs autodetect :code="html" />
    <h3>属性</h3>
    <highlightjs autodetect :code="html2" />
    <h3>方法</h3>
    <p>selectDay --- 返回日期</p>
    <h3>第三方依赖</h3>
    <p>......</p>
  </div>
</template>

<script> 
import AgCalendar from '../components/ag-calendar'

export default {
  name: 'Test',
  components: {
    AgCalendar
  },
  data() {
    return {
      html:`<AgCalendar @selectDay="selectDay"></AgCalendar>`,
      html2:`暂无`
    }
  },
  methods: {
      selectDay(date){
         console.log(date);
      }
  },
}
</script>
<style scoped>
.box{
    width: 300px;
}
</style>
