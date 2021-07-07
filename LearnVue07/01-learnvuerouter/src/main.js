import Vue from 'vue'
import App from './App'
import router from './router'//路径为文件夹时，会自动找文件夹下的index文件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
