import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueHighlightJS from 'vue-highlightjs'
import 'cesium/Widgets/widgets.css'


// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)
Vue.use(ViewUI);
Vue.use(Element, { size: 'small' })
Vue.use(hljs.vuePlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
