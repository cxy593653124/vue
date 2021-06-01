import Vue from 'vue'
import App from './App.vue'

// build的提示信息
Vue.config.productionTip = false


// .mount('#app')与el:'#app'一样
// vue内部会将el:'#app'转为.mount('#app')

new Vue({
  render: h => h(App),
}).$mount('#app')
