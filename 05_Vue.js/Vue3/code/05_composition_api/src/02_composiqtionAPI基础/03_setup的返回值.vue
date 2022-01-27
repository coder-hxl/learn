<template>
  <div>
    <h2>Home</h2>
    <h2>{{ message }}</h2>

    <h2>{{ title }}</h2>
    <h2>当前计算：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      counter: 100,
    };
  },

  /* 
			使用Composition API
				setup()返回值：
					- 返回值可以在模板template中使用；
					- setup的返回值能代替data选项；
		 */
  setup() {
    /* 
				将 counter 在 increment() 进行操作时，界面是无法做到响应式：
					因为对于一个定义的变量来说，默认情况下，Vue并不会跟踪它的变化，来引起界面的响应式操作；
 			 */

    let counter = 100;

    // 局部函数
    const increment = () => {
      counter++;
      console.log(counter);
    };

    return {
      title: "哈哈哈",
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
</style>