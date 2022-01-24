<template>
	<div id="app">
		<div>
			<button @click='isShow = !isShow'>显示/隐藏</button>
		</div>

		<!-- 在执行过程中会调用钩子函数 -->
		<transition @before-enter='beforeEnter'
								@enter='enter'
								@after-enter='afterEnter'
								@before-leave='beforeLeave'
								@leave='leave'
								@after-leave='afterLeave'>
			<h2 v-if="isShow">Hello World</h2>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true
			}
		},
		methods: {
			// 执行enter之前
			beforeEnter() {
				console.log('beforeEnter');
			},
			// 执行enter中
			enter() {
				console.log('enter');
			},
			// 执行完enter后
			afterEnter() {
				console.log('aflterEnter');
			},

			// 执行leave之前
			beforeLeave() {
				console.log('beforeLeave');
			},
			// 执行leave中
			leave() {
				console.log('leave');
			},
			// 执行完leave后
			afterLeave() {
				console.log('aflterLeave');
			}
		}
	}
</script>

<style scoped>
	#app {
		width: 200px;
		margin: 0 auto;
	}


</style>