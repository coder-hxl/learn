<template>
	<div>
		<h2 ref='title'>哈哈哈</h2>
		<button @click='changeData'>按钮</button>
	</div>
</template>

<script>
	import { reactive, ref, watch } from 'vue'

	export default {
		setup() {
			// 1.定义可响应式的对象
			const info = reactive({name: '浮幻', age: 17})
			const name = ref('浮幻')

			// 2.侦听器watch
			// 可以使用数组同时侦听多个源
			watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
					console.log(newInfo, newName, oldInfo, oldName);
			})

			
			const changeData = () => {
				info.name = 'fh'
			}

			return {
				changeData
			}
		}
	}
</script>

<style scoped>

</style>