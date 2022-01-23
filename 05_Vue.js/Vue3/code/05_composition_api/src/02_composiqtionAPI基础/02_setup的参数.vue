<template>
	<div>
		<h2>Home</h2>
		<h2>{{message}}</h2>
	</div>
</template>

<script>
	export default {
		props: {
			message: {
				type: String,
				required: true
			}
		},
		
		/* 
			使用Composition API
				setup()参数：
					- props：父组件传递过来的属性，定义props的类型还是需要和之前一样，在props选项中定义；

					- context，它里面包含三个属性：
						- attrs：所有的非prop的属性；
						- slots：父组件传递过来的插槽；
						- emit：组件内部需要发出事件时会用到；
		 */
		// setup(props, context) {}
		setup(props, {attrs, slots, emit}) {
			console.log(props.message);
			console.log(attrs.id, attrs.class);
			console.log(slots);
			console.log(emit);
		}
	}
</script>

<style scoped>

</style>