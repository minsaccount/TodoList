<template>
	<div>
		<h2>我是About的内容</h2>
	</div>
</template>

<script>
export default {
	name: "MyAbout",

	//通过路由规则，进入该组件时被调用
	beforeRouteEnter(to, from, next) {
		next()
		console.log("qqqqqqqqq", to, from, next)
	},

	//通过路由规则，离开该组件时被调用
	beforeRouteLeave(to, from, next) {
		next()
		console.log("aaaaaaaaa", to, from, next)
	}
}
</script>
