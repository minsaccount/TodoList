import Vue from "vue"
import App from "./App.vue"
import vuex from "vuex"

Vue.config.productionTip = false
Vue.use(vuex)
new Vue({
	render: (h) => h(App)
}).$mount("#app")
