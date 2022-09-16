import axios from "axios"
import { nanoid } from "nanoid"

export default {
	namespaced: true,
	actions: {
		addPersonChen(context, value) {
			if (value.name.indexOf("陈") == 0) context.commit("ADD_PERSON", value)
		},
		addPersonServer(context) {
			axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
				(response) => {
					context.commit("ADD_PERSON", { id: nanoid(), name: response.data })
				},
				(error) => {
					console(error.message)
				}
			)
		}
	},
	mutations: {
		ADD_PERSON(state, value) {
			state.personList.unshift(value)
		}
	},
	state: { personList: [] },
	getters: {
		firstPersonName(state) {
			return state.personList[0].name
		}
	}
}
