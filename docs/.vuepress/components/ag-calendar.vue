<template>
  <div>
    <ag-card>
      <AgCalendar></AgCalendar>
      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code}}</code></pre>
      </template>
    </ag-card>
  </div>
</template>
<script>
import AgCalendar from '../../../src/components/ag-calendar'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)
export default {
  data(){
    return {
      code: `<AgCalendar @selectDay="selectDay"></AgCalendar>`
    }
  },
  components:{
      AgCalendar
  }
}
</script>
<style scoped>

</style>


