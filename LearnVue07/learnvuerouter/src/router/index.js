// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'


// 1.通过vue.use(插件)来安装插件
Vue.use(VueRouter)

// 2.创建路由对象，类似new vue({})
const routes = [
  {
    path:'/',
		rediect:'/Home',//重定向
  	component:Home
  },
	{
    path:'/home',
		component:Home
  },
	{
	  path:'/about',
		component:About
	},
	{
	  path:'/user/:userId',
		component:User
	},
]
const router = new VueRouter({
  routes,
	mode:'history',//路径模式；可以由hash改成history
	linkActiveClass:'active'//活跃时赋予的class名
})

// 3.将router对象传入到Vue实例中
export default router