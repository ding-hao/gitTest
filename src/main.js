import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 再次测试
new Vue({
  render: h => h(App),
}).$mount('#app')
