//该文件用于专门创建整个应用的路由器
import VueRouter from "vue-router"

//创建路由器
const router = new VueRouter({
	routes: [
		{
			path: "/home",
			component: () => import("../pages/MyHome.vue"),
			children: [
				{
					path: "message",
					component: () => import("../pages/HomeMessage.vue"),
					children: [
						{
							path: "detail",
							component: () => import("../pages/MessageDetail.vue")
						}
					]
				},
				{
					path: "news",
					component: () => import("../pages/HomeNews.vue")
				}
			]
		},
		{
			path: "/about",
			component: () => import("../pages/MyAbout.vue")
		}
	]
})

//暴露路由器
export default router
