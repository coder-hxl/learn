<template>
	<div class="tap-control">
		<div class="tap-control-items" :class="{borders: counter == index}" v-for="(items, index) in titles" @click='control(index)'>
			<span>{{items}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		emits: ['titleClick'],
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				counter: 0
			}
		},
		methods: {
			control(index) {
				this.counter = index
				this.$emit('titleClick', this.counter)
			}
		}
	}
</script>

<style scoped>
	.tap-control {
		display: flex;
	}

	.tap-control-items {
		flex: 1;
		margin: 0 30px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}

	.borders {
		color: red;
		border-bottom: 3px solid red;
	}
	
</style>