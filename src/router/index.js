//该文件用于专门创建整个应用的路由器
import VueRouter from "vue-router"

//创建路由器
const router = new VueRouter({
	mode: "history",
	routes: [
		{
			name: "zhuye",
			path: "/home",
			meta: { title: "主页" },
			component: () => import("../pages/MyHome.vue"),
			children: [
				{
					name: "xiaoxi",
					path: "message",
					meta: { isAuth: true, title: "消息" }, // 存放路由元信息
					component: () => import("../pages/HomeMessage.vue"),
					children: [
						{
							name: "xiangqing",
							path: "detail",
							meta: { title: "详情" },
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
					meta: { isAuth: true, title: "新闻" },
					component: () => import("../pages/HomeNews.vue")
					// beforeEnter: (to, from, next) => {
					// 	console.log("独享路由守卫", to, from)
					// 	if (to.meta.isAuth) {
					// 		if (localStorage.getItem("school") == "nnu") next()
					// 		else console.log("无权限！")
					// 	} else {
					// 		next()
					// 	}
					// }
				}
			]
		},
		{
			name: "guanyu",
			path: "/about",
			meta: { title: "关于" },
			component: () => import("../pages/MyAbout.vue")
		}
	]
})

//全局前置路由守卫
router.beforeEach((to, from, next) => {
	console.log("前置路由守卫", to, from)
	// if (to.name == "xiaoxi" || to.name == "xinwen")
	if (to.meta.isAuth) {
		if (localStorage.getItem("school") == "nnu") next()
		else console.log("无权限！")
	} else {
		next()
	}
})

//全局后置路由守卫
router.afterEach((to, from) => {
	document.title = to.meta.title || "vue-study"
	console.log("后置路由守卫", to, from)
})

//暴露路由器
export default router
