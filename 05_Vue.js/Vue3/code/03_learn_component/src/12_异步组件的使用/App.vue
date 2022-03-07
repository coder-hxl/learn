<template>
	<div>
		app
		<home></home>

		<!-- 
			suspense是内置的全局组件，该组件有两个插槽：
				- default: 如果default可以显示，那么显示default的内容；
				- fallback: 如果default无法显示，那么显示fallback的内容；
		 -->
		<suspense>
			<template #default>
				<asyunc-category></asyunc-category>
			</template>
			<template #fallback>
				<loading></loading>
			</template>
		</suspense>
	</div>
</template>

<script>
	import { defineAsyncComponent } from 'vue'
	import Home from './home.vue'
	import Loading from './Loading.vue'

	/* 
		通过异步的方式进行加载（目的是可以对其进行分包处理），需要引入vue的defineAsyncComponent函数
		defineAsyncComponent接收两种类型的参数：
			- 类型一：工厂函数，该函数需要返回一个Promise对象；
			- 类型二：对象类型，对异步函数进行配置；
	*/

	const AsyuncCategory = defineAsyncComponent(() => import('./AsyuncCategory.vue'))

	// const AsyuncCategory = defineAsyncComponent({
	// 	// 工厂函数
	// 	loader: () => import('./AsyuncCategory.vue'), 
	// 	// 加载过程中显示的组件
	// 	loadingComponent: Loading, 
	// 	// 加载失败时显示的组件
	// 	errorComponent: Error, 
	// 	// 在显示loadingComponent组件之前，等待多长时间
	// 	delay: 2000, 
	// 	/* 
	// 		onError出错调用函数：
	// 		参数：
	// 			err: 错误信息
	// 			retry: 函数，调用retry尝试重新加载
	// 			fail: 函数，指示加载程序结束退出
	// 			attempts: 记录尝试的次数
	// 	*/
	// 	onError: function(err, retry, fail, attempts) {

	// 	}
	// })

	export default {
		components: {
			Home,
			AsyuncCategory,
			Loading
		}
	}
</script>

<style scoped>

</style>