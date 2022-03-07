<template>
  <div>
    <h2>Home</h2>
    <h2>{{ message }}</h2>

    <h2>当前计算：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    /* 
				ref API
					- ref 会返回一个可变的响应式对象，该对象作为一个 响应式的引入 维护着它内部的值；
					- 它内部的值是在ref的 value 属性中被维护的；
					
					注意：
						- 在模板中引入ref的值时，Vue会自动进行解包操作，所以不需要通过 ref.value 的方式来使用；
						- 在 setup 函数内部，它依然是一个ref引用，需要使用ref.value的方式
			 */
    let counter = ref(100);

    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>