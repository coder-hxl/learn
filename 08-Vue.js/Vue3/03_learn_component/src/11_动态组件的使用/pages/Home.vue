<template>
	<div @click='pageClick'>
		Home组件: {{name}} - {{age}}
	</div>
</template>

<script>
	export default {
		name: 'home',
		props: {
			name: {
				type: String,
				default: ''
			},
			age: {
				type: Number
			}
		},
		emits: ['pageClick'],
		methods: {
			pageClick() {
				this.$emit('pageClick')
			}
		}
	}
</script>

<style scoped>

</style>