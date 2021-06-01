//CommonJS模块化
const {add,mul}  = require("./js/mathUtils.js")

console.log(add(1,2))
console.log(mul(5,9))

//ES6的模块化的规范
import {name,age} from "./js/info"

console.log(name)
console.log(age)

//打包css文件
require("./css/normal.css")

//依赖less文件
require("./css/special.less")

document.writeln("hello world");


//5.使用vue开发
import Vue from 'vue'
import App from './vue/App.vue'

const app = new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App:App
  }
})

