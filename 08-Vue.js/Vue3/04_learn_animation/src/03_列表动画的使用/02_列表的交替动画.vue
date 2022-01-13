<template>
	<div>
		<input type="text" v-model="keyword">

		<transition-group tag="ul" name="fh" :css="false" 
											@before-enter='beforeEnter' 
											@enter='enter' 
											@leave='leave'>
			<!-- :data-index会把绑定的数据放到自身的dataset里面 -->
			<li v-for="(item, index) in showNames" :key="item" :data-index='index'>{{item}}</li>
		</transition-group>
	</div>
</template>

<script>
	import gsap from 'gsap'

	export default {
		data() {
			return {
				names: ['abc', 'cba', 'nba', 'fh', 'why', 'pink', 'hh'],
				keyword: ''
			}
		},
		computed: {
			showNames() {
				return this.names.filter(item => item.indexOf(this.keyword) !== -1)
			}
		},
		methods: {
			beforeEnter(el) {
				el.style.opacity = 0
				el.style.height = 0
			},
			enter(el, done) {
				gsap.to(el, {
					opacity: 1,
					height: '1.5em',
					// 延迟时间
					delay: el.dataset.index * 0.5,
					onComplete: done
				})
			},
			leave(el, done) {
				gsap.to(el, {
					opacity: 0,
					height: 0,
					delay: el.dataset.index * 0.5,
					onComplete: done
				})
			}
		}
	}
</script>

<style scoped>
	/* css不易实现 */
	/* .fh-enter-from,
	.fh-leave-to {
		opacity: 0;
	}

	.fh-enter-active,
	.fh-leave-active {
		transition: all 1s ease;
	} */
</style>