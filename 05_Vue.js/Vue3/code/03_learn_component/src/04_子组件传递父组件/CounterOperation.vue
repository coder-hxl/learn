<template>
	<div>
		<button @click='increment'>+1</button>
		<button @click='decrement'>-1</button>

		<input type="text" v-model.number='num'>
		<button @click="incrementN">加{{num}}</button>
	</div>
</template>

<script>
	export default {
		// emits定义好在某些情况下触发的事件名称
		// 数组写法
		// emits: ['add', 'sub', 'addN'], 
		// 对象写法的目的是为了进行参数的验证
		emits: {
			// null是不验证
			add: null,
			sub: null,
			// 必须有返回布尔值，否则会报警告
			addN: (num, name) => {
				console.log(num, name);
				if (num > 10) {
					return true
				}
				return false
			}
		},
		data() {
			return {
				num: 0
			}
		},
		methods: {
			increment() {
				console.log('+1');
				this.$emit('add') // 给父组件传递自定义事件
			},
			decrement() {
				console.log('-1');
				this.$emit('sub')
			},
			incrementN() {
				this.$emit('addN', this.num, 'fh') // 可以传递多个参数
			}
		}
	}
</script>

<style scoped>

</style>