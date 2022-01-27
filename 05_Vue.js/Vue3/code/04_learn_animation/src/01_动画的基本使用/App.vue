<template>
	<div id="app">
		<div>
			<button @click='isShow = !isShow'>显示/隐藏</button>
		</div>

		<!-- appear：页面初次渲染也添加动画 -->
		<transition name="fh" mode="out-in" appear>
			<component :is='isShow ? "home" : "about"'></component>
		</transition>
	</div>
</template>

<script>
	import Home from './pages/Home.vue'
	import About from './pages/About.vue'

	export default {
		components: {
			Home,
			About
		},
		data() {
			return {
				isShow: true
			}
		}
	}
</script>

<style scoped>
	#app {
		width: 200px;
		margin: 0 auto;
	}

	.title {
		display: inline-block;
	}

	.fh-enter-from,
	.fh-leave-to {
		opacity: 0;
	}

	.fh-enter-active,
	.fh-leave-active {
		transition: opacity 1s ease;
	}

	/* transition和animation可以同时使用 */

	.fh-enter-active {
		animation: bounce 1s ease;
	}

	.fh-leave-active {
		animation: bounce 1s ease reverse;
	}

	@keyframes bounce {
		0% {
			transform: scale(0);
		}

		50% {
			transform: scale(1.2)
		}

		100% {
			transform: scale(1);
		}
 	}
</style>