<template>
  <div>
    <home></home>
		<button @click='btnName'>添加名字</button>
  </div>
</template>

<script>
	import Home from "./Home.vue";
	import { computed } from 'vue'

	export default {
	  components: {
	    Home,
	  },
	  // provide 选项只能给子孙组件提供数据
	  provide() {
	    return {
	      name: "fh",
	      age: 17,
				// 需要数据响应式则要用到computed
	      length: computed(() => this.names.length), // 返回的是ref对象
	    }
	  },
		data() {
			return {
				names: ['a', 'b', 'c']
			}
		},
		methods: {
			btnName() {
				this.names.push('fh')
				console.log(this.names);
			}
		}
	};
</script>

<style scoped>
</style>