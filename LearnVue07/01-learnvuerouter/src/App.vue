<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="div" replace>关于</router-link> -->


		<!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
		<router-link to="/about" tag="div" replace>关于</router-link> -->

		<!-- <button @click="homeClick">首页</button>
		<button @click='aboutClick'>关于</button> -->

		<router-link to="/home">首页</router-link>
		<router-link to="/about">关于</router-link>
		<!-- <router-link :to="'/user/'+userId">用户</router-link> -->
		<!-- <router-link :to="{path:'/profile',query:{name:'zhangsan'}}">档案</router-link> -->

		<button @click="userClick">用户</button>
		<button @click="profileClick">档案</button>

		<keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return {
			userId:'lisi'
		}
	},
	methods:{
		homeClick(){
			// 通过代码进行跳转
			// this.$router.push('/home')
			this.$router.replace('/home')
		},
		aboutClick(){
			this.$router.replace('/about')
		},
		userClick(){
			this.$router.replace('/user/'+this.userId)
		},
		profileClick(){
			this.$router.replace({
				path:'/profile',
				query:{
					name:'qwe',
					}
				})
		}
	}
}
</script>

<style>
.router-link-active{
	color:red
}
</style>
