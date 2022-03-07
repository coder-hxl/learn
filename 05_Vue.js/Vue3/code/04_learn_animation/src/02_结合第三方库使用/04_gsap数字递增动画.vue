<template>
	<div id="app">
		<input type="Number" step="100" v-model="counter">
		<!-- <h2>当前计数：{{showCounter}}</h2> -->
		<h2>当前计数：{{showNumber.toFixed(0)}}</h2>
	</div>
</template>

<script>
	import gsap from 'gsap'

	export default {
		data() {
			return {
				counter: 0,
				showNumber: 0
			}
		},
		// computed: {
		// 	showCounter() {
		// 		return this.showNumber.toFixed(0)
		// 	}
		// },
		watch: {
			counter(newValue) {
				gsap.to(this, {
					// 完成时间
					duration: 1, 
					showNumber: newValue
				})
			}
		}
	}
</script>

<style scoped>
</style>