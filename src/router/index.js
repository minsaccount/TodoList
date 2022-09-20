//该文件用于专门创建整个应用的路由器
import VueRouter from "vue-router"

//创建路由器
const router = new VueRouter({
	routes: [
		{
			name: "zhuye",
			path: "/home",
			component: () => import("../pages/MyHome.vue"),
			children: [
				{
					name: "xiaoxi",
					path: "message",
					component: () => import("../pages/HomeMessage.vue"),
					children: [
						{
							name: "xiangqing",
							path: "detail",
							component: () => import("../pages/MessageDetail.vue"),
							props: ($route) => {
								return {
									id: $route.query.id,
									title: $route.query.title
								}
							}
						}
					]
				},
				{
					name: "xinwen",
					path: "news",
					component: () => import("../pages/HomeNews.vue")
				}
			]
		},
		{
			name: "guanyu",
			path: "/about",
			component: () => import("../pages/MyAbout.vue")
		}
	]
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
	console.log("*", to, from)
	if (to.name == "xiaoxi" || to.name == "xinwen") {
		if (localStorage.getItem("school") == "nnu") next()
		else console.log("无权限！")
	} else {
		next()
	}
})

//暴露路由器
export default router
