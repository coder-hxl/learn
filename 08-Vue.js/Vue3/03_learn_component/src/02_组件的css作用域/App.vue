<template>
	<!-- 一般会给类名添加样式 -->
	<h2 class="title">App</h2>
	<hello-world></hello-world>
</template>

<script>
	import HelloWorld from './HelloWorld.vue'

	export default {
		components: {
			HelloWorld
		}
	}
</script>

<style scoped>
	h2 {
		color: aqua;
	}

	.title {
		color: pink;
	}

</style>