<template>
  <div>
    <home />
    <h2>App：{{ counter }}</h2>
    <button @click="increment">AppCounter+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home.vue";

export default {
  components: {
    Home,
  },
  setup() {
    // 使用 ref 或 reactive 为数据添加响应性
    const name = ref("浮幻");
    let counter = ref(100);

    const increment = () => counter.value++;

    /* 
				通过 provide 来向后代组件提供数据：
					provide(提供的属性名称, 提供的属性值)
			 */
    // 后代组件若修改具有响应性的接收属性，会导致提供数据处也同时改变，这时可以用readonly给一个只读的值
    provide("name", readonly(name));
    provide("counter", readonly(counter));

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>