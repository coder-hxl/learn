<template>
	<div>
		<h2>组件开头</h2>
		<slot>
			<i>我是插槽的默认内容</i>
		</slot>
		<slot>
			<i>我是插槽的默认内容</i>
		</slot>
		<slot>
			<i>我是插槽的默认内容</i>
		</slot>
		<h2>组件结尾</h2>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>

</style>