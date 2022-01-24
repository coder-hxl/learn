<template>
	<div id="app">
		<div>
			<button @click='isShow = !isShow'>显示/隐藏</button>
		</div>

		<!-- 添加:css="false"，会让Vue跳过 CSS 的检测 -->
		<transition @enter='enter' @leave='leave' :css="false">
			<h2 v-if="isShow">Hello World</h2>
		</transition>
	</div>
</template>

<script>
	import gsap from 'gsap' // gsap是js动画库

	export default {
		data() {
			return {
				isShow: true
			}
		},
		methods: {
			/* 
				enter
					el：transition组件里执行动画的元素或组件
					done：函数。会被同步调用，一旦调用会认为动画执行结束
			 */
			enter(el, done) {
				console.log('enter');
				// gsap.from：定义进入动画值
				gsap.from(el, {
					// transform代码简写形式
					scale: 0,
					x: 200,
					onComplete: done
				})
			},
			leave(el, done) {
				console.log('leave');
				// gsap.to：定义离开动画值
				gsap.to(el, {
					scale: 0,
					x: 200,
					onComplete: done
				})
			},
		}
	}
</script>

<style scoped>
	#app {
		width: 200px;
		margin: 0 auto;
	}


</style>