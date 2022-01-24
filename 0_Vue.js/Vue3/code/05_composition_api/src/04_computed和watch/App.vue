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
			const info = reactive({name: '浮幻', age: 17, friend: {name: 'pink'}})

			// 2.侦听器watch
			watch(() => ({...info}), (newInfo, oldInfo) => {
					console.log(newInfo, oldInfo);
			}, {
				// 配置选项
				// 开启深度侦听
				deep: true,
				// 立即执行
				immediate: true
			})

			
			const changeData = () => {
				info.friend.name = 'code'
			}

			return {
				changeData
			}
		}
	}
</script>

<style scoped>

</style>