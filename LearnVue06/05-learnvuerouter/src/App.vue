<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="div" replace>关于</router-link> -->
		
		
		<!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
		<router-link to="/about" tag="div" replace>关于</router-link> -->
		
		<button @click="homeClick">首页</button>
		<button @click='aboutClick'>关于</button>
		
		<router-view></router-view>
		
  </div>
</template>

<script>
export default {
  name: 'App',
	methods:{
		homeClick(){
			// 通过代码进行跳转
			// this.$router.push('/home')
			this.$router.replace('/home')
		},
		aboutClick(){
			this.$router.replace('/about')
		}
	}
}
</script>

<style>
.router-link-active{
	color:red
}
</style>
