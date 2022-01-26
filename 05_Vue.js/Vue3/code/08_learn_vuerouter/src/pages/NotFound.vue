<template>
	<div>
		<h2>Not Found</h2>
		<p>您输入的路径不存在~</p>
		<!-- $route.params.pathMatch获取到传入的参数 -->
		<h3>{{ $route.params.pathMatch }}</h3>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>

</style>