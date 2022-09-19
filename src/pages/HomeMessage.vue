<template>
	<div>
		<ul>
			<li v-for="item in messageList" :key="item.id">
				<router-link
					:to="{
						path: '/home/message/detail',
						query: {
							id: item.id,
							title: item.title
						}
					}"
					>{{ item.title }} </router-link
				>&nbsp;&nbsp;
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "HomeMessage",
	data() {
		return {
			messageList: [
				{ id: "001", title: "消息001" },
				{ id: "002", title: "消息002" },
				{ id: "003", title: "消息003" },
				{ id: "004", title: "消息004" },
				{ id: "005", title: "消息005" }
			]
		}
	}
}
</script>
