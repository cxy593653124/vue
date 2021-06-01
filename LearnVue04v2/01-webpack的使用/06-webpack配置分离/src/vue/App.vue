<template>
	<div>
	  <h2>{{message}}</h2>
		<cpn></cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue'
	export default{
	  name:"App",
	  data(){
	    return {
	      message:'hello webpack'
	    }
	  },
		components:{
			Cpn
		}
	}
</script>

<style>
	H2{
		color: blue;
	}
</style>
