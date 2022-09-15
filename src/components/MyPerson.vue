<template>
	<div>
		<h1>人员列表</h1>
		<input type="text" placeholder="请输入名字" v-model="name" />
		<button @click="addPerson(person)">添加</button>
		<ul>
			<li v-for="person in personList" :key="person.id">{{ person.name }}</li>
		</ul>
	</div>
</template>

<script>
import { nanoid } from "nanoid"
import { mapState, mapMutations } from "vuex"
export default {
	name: "MyPerson",
	data() {
		return {
			name: ""
		}
	},
	computed: {
		...mapState(["personList"]),
		person() {
			return { id: nanoid(), name: this.name }
		}
	},
	methods: {
		...mapMutations({ addPerson: "ADD_PERSON" })
	}
}
</script>
