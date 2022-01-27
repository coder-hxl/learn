<template>
	<div>
		<button @click="updateState">+1</button>
	</div>
</template>

<script>
	import { reactive, ref, readonly }  from 'vue'

	export default {
		setup() {
			/* readonly：返回的对象都是不允许修改的；但原来的对象是允许修改的；*/


			// 1.普通对象
			const info1 = {
				name: 'fh'
			}
			const readonlyInfo1 = readonly(info1)

			// 2.响应式对象reactive
			const info2 = reactive({
				name: 'fh'
			})
			const readonlyInfo2 = readonly(info2)

			// 3.响应式对象ref
			const info3 = ref('fh')
			const readonlyInfo3 = readonly(info3)

			const updateState = () => {
				// readonlyInfo1.name = 'code'
				// readonlyInfo2.name = 'code'
				readonlyInfo3.name = 'code'
			}

			return {
				updateState,
			}
		}
	}
</script>

<style scoped>

</style>