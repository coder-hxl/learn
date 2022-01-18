<script>
	import { h } from 'vue'
	import HelloWorld from './HelloWorld.vue'

	export default {
		render() {
			return h(HelloWorld, null, {
				// 给默认插槽传东西
				default: props => h('span', null, `App传入到HelloWorld中的内容：${props.name}`)
			})
		},
	}
</script>

<style scoped>

</style>