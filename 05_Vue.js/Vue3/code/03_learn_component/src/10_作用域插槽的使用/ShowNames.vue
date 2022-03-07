<template>
	<div>
		<template v-for="(items, index) in names">
				<!-- slot里使用自定义属性将数据传递实例 -->
				<slot :item='items' :index='index'></slot>
				
				<slot name="fuhuan"></slot>
		</template>
	</div>
</template>

<script>
	export default {
		props: {
			names: {
				type: Array,
				defalut: () => []
			}
		}
	}
</script>

<style scoped>

</style>