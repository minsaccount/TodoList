import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
	jiaOdd(context, value) {
		if (context.state.sum % 2) context.commit("JIA", value)
	},
	jiaWait(context, value) {
		setTimeout(() => {
			context.commit("JIA", value)
		}, 500)
	}
}

const mutations = {
	JIA(state, value) {
		state.sum += value
	},
	JIAN(state, value) {
		state.sum -= value
	},
	ADD_PERSON(state, value) {
		state.personList.unshift(value)
	}
}

const state = {
	sum: 0,
	school: "nnu",
	subject: "cs",
	personList: []
}

const getters = {
	bigSum(state) {
		console.log(state)
		return state.sum * 10
	}
}

export default new Vuex.Store({ actions, mutations, state, getters })
