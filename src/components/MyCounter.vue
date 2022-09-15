<!--vuex -->
<template>
	<div>
		<h1>当前求和：{{ sum }}</h1>
		<h1>当前求和结果放大十倍：{{ bigSum }}</h1>
		<h3>我在{{ school }},学习{{ subject }}</h3>
		<select v-model.number="num">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(num)">+</button>
		<button @click="decrement(num)">-</button>
		<button @click="incrementOdd(num)">当前求和为奇数再加</button>
		<button @click="incrementWait(num)">等一会再加</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
	name: "MyCounter",
	data() {
		return {
			num: 1
		}
	},
	computed: {
		...mapState(["sum", "school", "subject"]),
		...mapGetters(["bigSum"])
	},
	methods: {
		// increment() {
		// 	this.$store.commit("JIA", this.num)
		// },
		// decrement() {
		// 	this.$store.commit("JIAN", this.num)
		// },

		...mapMutations({ increment: "JIA", decrement: "JIAN" }),

		// incrementOdd() {
		// 	if (this.$store.state.sum % 2) this.$store.dispatch("jiaOdd", this.num)
		// },
		// incrementWait() {
		// 	this.$store.dispatch("jiaWait", this.num)
		// },

		...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" })
	}
}
</script>

<style>
button {
	margin-left: 5px;
}
</style>
