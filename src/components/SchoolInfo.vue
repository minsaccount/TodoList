<template>
	<div class="school">
		<h3>学校名称：{{ name }}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "Nanjing Normal University"
		}
	}
}
</script>

<style>
.school {
	background-color: rgb(154, 230, 188);
}
</style>
