<template>
  <div>
    <h2>Home</h2>
    <h2>{{ message }}</h2>

    <h2>当前计算：{{ state.counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    /* 
				reactive API
					- 如果想要在setup中定义的数据提供响应式特征，可以使用reactive函数；
					- 使用reactive函数必须传入一个对象或数组类型；
					- 响应式原因：
						- reactive函数处理我们的数据后，数据再次被使用时就会进行依赖收集；
						- 当数据发生改变时，所有收集到的依赖都是进行对应的响应式操作；
						- 编写的data选项也是在内部交给了reactive函数；
			 */
    const state = reactive({
      counter: 100,
    });

    // 局部函数
    const increment = () => {
      state.counter++;
      console.log(state.counter);
    };

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped>
</style>