<template>
	<div id="app">
		<MyCounter />
		<hr />
		<MyPerson />
	</div>
</template>

<script>
import MyCounter from "./components/MyCounter.vue"
import MyPerson from "./components/MyPerson.vue"
export default {
	name: "App",
	components: {
		MyCounter,
		MyPerson
	}
}
</script>
