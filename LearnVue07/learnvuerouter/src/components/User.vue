<template>
	<div>
		<h2>我是用户界面</h2>
		<p>呵呵呵</p>
		{{userId}}
		{{$route.params.userId}}
	</div>
</template>

<script>
	export default{
		name:'User',
		computed:{
			userId(){
				//this.$route活跃的路由
				return this.$route.params.userId
			}
		}
	}
</script>

<style>
</style>
