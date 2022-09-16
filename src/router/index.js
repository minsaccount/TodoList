//该文件用于专门创建整个应用的路由器
import VueRouter from "vue-router"

//创建路由器
const router = new VueRouter({
	router: [
		{
			path: "./myCounter",
			redirect: "./myCounter",
			component: () => {
				"../components/MyCounter.vue"
			}
		},
		{
			path: "./myPerson",
			component: () => {
				"../components/MyPerson.vue"
			}
		}
	]
})

//保留路由器
export default router
