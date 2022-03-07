<template>
	<div>
		<!-- 1.默认绑定和事件处理 -->
		<!-- <button @click="btnClick">fhInput按钮</button>
		<h2>fhInput的message: {{modelValue}}</h2> -->

		<!-- 2.通过input -->
		<!-- <input type="text" :value='modelValue' @input='btnClick'> -->

		<!-- 3.绑定到props中是不对的 -->
		<!-- <input type="text" v-model="modelValue"> -->

		<!-- 4.通过计算属性 -->
		<input type="text" v-model="value">
	</div>
</template>

<script>
	export default {
		props: {
			modelValue: {
				type: String
			}
		},
		computed: {
			value: {
				// 内容改变时会调用set方法，并将当前的value值当成实参
				set(value) {
					this.$emit('update:modelValue', value)
				},
				get() {
					return this.modelValue
				}
			}
		},
		emits: ['update:modelValue'],
		methods: {
			btnClick(event) {
				this.$emit('update:modelValue', event.target.value)
			}
		}
	}
</script>

<style scoped>

</style>