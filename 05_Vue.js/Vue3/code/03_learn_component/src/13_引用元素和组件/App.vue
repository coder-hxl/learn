<template>
	<div>
		<!-- ref绑定元素 -->
		<h2 ref='title'>哈哈哈</h2>

		<!-- ref绑定组件 -->
		<nav-bar ref="NavBar"></nav-bar>

		<button @click="btnClick">获取元素</button>
	</div>
</template>

<script>
	import NavBar from './NavBar.vue'

	export default {
		components: {
			NavBar
		},
		data() {
			return {
				name: '浮幻'
			}
		},
		methods: {
			btnClick() {
				// 通过$refs获取绑定的元素或组件
				console.log(this.$refs.title);
				console.log(this.$refs.NavBar);
				this.$refs.NavBar.Hello()

				// $el 获取组件实例正在使用的根 DOM 元素。
				console.log(this.$refs.NavBar.$el);
			}
		}
	}
</script>

<style scoped>

</style>