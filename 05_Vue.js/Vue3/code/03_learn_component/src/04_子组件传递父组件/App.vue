<template>
	<div>
		<h2>当前计数：{{counter}}</h2>
		<!-- 父组件接收到自定义事件并绑定，触发对应的方法 -->
		<CounterOperation @add='addOne' @sub='subOne' @addN="addNum"></CounterOperation>
	</div>
</template>

<script>
	import CounterOperation from './CounterOperation.vue'

	export default {
		components: {
			CounterOperation
		},
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			addOne() {
				this.counter++
			},
			subOne() {
				this.counter--
			},
			addNum(num, name) {
				this.counter += num
				console.log(name);
			}
		}
	}
</script>

<style scoped>

</style>