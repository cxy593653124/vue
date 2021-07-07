// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'


// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

const Home = () => import('../components/Home.vue')

const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')


// 1.通过vue.use(插件)来安装插件
Vue.use(VueRouter)

// 2.创建路由对象，类似new vue({})
const routes = [
  {
    path:'/',
		rediect:'/Home',//重定向
  	component:Home,
    meta:{
      title:'首页'
    }
  },
	{
    path:'/home',
		component:Home,
    children:[
      {
        path:'/',
        rediect:'news',//重定向
        component:HomeNews
      },
      {
        path:'news',//此处不用加/
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ],
		meta:{
			title:'首页'
		}
  },
	{
	  path:'/about',
		component:About,
		meta:{
			title:'关于'
		}
	},
	{
	  path:'/user/:userId',
		component:User,
		meta:{
			title:'用户'
		}
	},
  {
			path:'/profile',
			component:Profile,
      meta:{
        title:'档案'
      }
		}
]
const router = new VueRouter({
  routes,
	mode:'history',//路径模式；可以由hash改成history
	linkActiveClass:'active'//活跃时赋予的class名
})


// router.beforeEach((to,from,next) => {
// 	// console.log(to)
// 	document.title = to.matched[0].meta.title
// 	next();
// })
//
// router.afterEach((to,from) => {
//   // console.log("---")
//
// })

// 3.将router对象传入到Vue实例中
export default router




// export default new VueRouter({
// 	routes:[
// 		{
// 			path:'/',
// 			rediect:'/Home',//重定向
// 			component:Home
// 		},
// 		{
// 			path:'/home',
// 			component:Home,
// 			children:[
// 				{
// 					path:'/',
// 					rediect:'news',//重定向
// 					component:HomeNews
// 				},
// 				{
// 					path:'news',//此处不用加/
// 					component:HomeNews
// 				},
// 				{
// 					path:'message',
// 					component:HomeMessage
// 				}
// 			]
// 		},
// 		{
// 			path:'/about',
// 			component:About
// 		},
// 		{
// 			path:'/user/:userId',
// 			component:User
// 		},
// 		{
// 			path:'/profile',
// 			component:Profile
// 		}
// 	],
// 	mode:'history',//路径模式；可以由hash改成history
// })
