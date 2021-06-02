<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="div" replace>关于</router-link> -->
		
		
		<router-link to="/home" tag="button" replace active-class="active">首页</router-link>
		<router-link to="/about" tag="div" replace>关于</router-link>
		<router-view></router-view>
		
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-link-active{
	color:red
}
</style>
