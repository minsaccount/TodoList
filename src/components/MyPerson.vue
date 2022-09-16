<template>
	<div>
		<h1>人员列表</h1>
		<h3 style="color: red">上方的sum值是：{{ sum }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name" />
		<button @click="addPerson">添加</button>
		<button @click="addChen">添加姓陈的人</button>
		<button @click="addReview">添加语录</button>
		<ul>
			<li v-for="person in personList" :key="person.id">{{ person.name }}</li>
		</ul>
	</div>
</template>

<script>
import { nanoid } from "nanoid"
export default {
	name: "MyPerson",
	data() {
		return {
			name: ""
		}
	},
	computed: {
		personList() {
			return this.$store.state.personAbout.personList
		},
		sum() {
			return this.$store.state.countAbout.sum
		}
	},
	methods: {
		addPerson() {
			const personObj = { id: nanoid(), name: this.name }
			this.$store.commit("personAbout/ADD_PERSON", personObj)
			this.name = ""
			console.log(this.$store.getters["personAbout/firstPersonName"])
		},
		addChen() {
			const personObj = { id: nanoid(), name: this.name }
			this.$store.dispatch("personAbout/addPersonChen", personObj)
			this.name = ""
		},
		addReview() {
			this.$store.dispatch("personAbout/addPersonServer")
		}
	}
}
</script>
