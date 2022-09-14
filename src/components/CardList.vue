<template>
	<div class="card">
		<CategoryCard title="美食" :items="food">
			<img
				src="https://img2.baidu.com/it/u=1377849239,938144589&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663261200&t=80afd59e31083a5e6da6f7626dd29959"
				alt=""
			/>
		</CategoryCard>
		<CategoryCard title="电影" :items="film">
			<img
				src="https://img0.baidu.com/it/u=1049789047,4143086135&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1663261200&t=ca57bf21bc28ddef01a737650eac8b46"
				alt=""
			/>
		</CategoryCard>
		<CategoryCard title="游戏" :items="game">
			<img
				src="https://img0.baidu.com/it/u=3632645904,954544355&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1663261200&t=6910477a408e0cf4afe3a26be426a1c0"
				alt=""
			/>
		</CategoryCard>
	</div>
</template>
<script>
import CategoryCard from "./CategoryCard"
export default {
	name: "CardList",
	components: {
		CategoryCard
	},
	data() {
		return {
			food: ["薯片", "可乐", "蛋糕"],
			film: ["《你的名字》", "《情书》", "《言叶之庭》"],
			game: ["光遇", "双人成行", "动森"]
		}
	}
}
</script>
<style>
.card {
	display: flex;
	justify-content: space-around;
}
img {
	width: inherit;
}
</style>
