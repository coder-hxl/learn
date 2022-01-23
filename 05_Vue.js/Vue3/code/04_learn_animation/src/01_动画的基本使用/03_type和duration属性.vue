<template>
	<div id="app">
		<div>
			<button @click='isShow = !isShow'>显示/隐藏</button>
		</div>

		<!-- 
			type：指定过渡类型决定来过渡结束
			duration: 指定整个动画过渡时间
		 -->
		<transition name="fh" type="transition" :duration:"{enter: 800, leave: 1000}">
			<h2 class="title" v-if="isShow">Hello World</h2>
		</transition>
	</div>
</template>

<script>
	export default {
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