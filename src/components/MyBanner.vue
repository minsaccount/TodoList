<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header"><h2>Vue Router Demo</h2></div>
		<button @click="back">后退</button>
		<button @click="forword">前进</button>
	</div>
</template>

<script>
export default {
	name: "MyBanner",
	methods: {
		back() {
			this.$router.back()
		},
		forword() {
			this.$router.forward()
		}
	}
}
</script>
