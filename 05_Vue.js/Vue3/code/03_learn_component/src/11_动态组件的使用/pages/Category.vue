<template>
	<div>
		Category组件
		<button @click="current++">{{current}}</button>
	</div>
</template>

<script>
	export default {
		name: 'category',
		data() {
			return {
				current: 0
			}
		}
	}
</script>

<style scoped>

</style>