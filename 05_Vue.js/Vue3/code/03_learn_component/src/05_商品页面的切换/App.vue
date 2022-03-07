<template>
	<div>
		<tap-control :titles="titles" @titleClick='changeContents'></tap-control>
		<h2>{{contents[currentIndex]}}</h2>
	</div>
</template>

<script>
	import TapControl from './TapControl.vue'

	export default {
		components: {
			TapControl
		},
		data() {
			return {
				titles: ['衣服', '裤子', '鞋子'],
				contents: ['衣服页面', '裤子页面', '鞋子页面'],
				currentIndex: 0
			}
		},
		methods: {
			changeContents(index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style scoped>

</style>