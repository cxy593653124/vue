//CommonJS模块化
const {add,mul}  = require("./mathUtils.js")

console.log(add(1,2))
console.log(mul(5,9))

//ES6的模块化
import {name,age} from "./info"

console.log(name)
console.log(age)