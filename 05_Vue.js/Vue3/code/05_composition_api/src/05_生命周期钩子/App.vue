<template>
  <div>
    <button @click="add">{{ counter }}</button>
  </div>
</template>

<script>
// 导入生命周期钩子
// 因为 setup 比 beforeCreate 和 created 更早执行，所以这些钩子中的代码应该直接写到 setup 里面
// 在setup使用的生命周期钩子名字 比 选项式API的生命周期钩子名字多加了on前缀，如: mounted 是 onMounted
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

export default {
  // 在setup里面可以直接使用导入的 onX 函数注册声明周期钩子
  setup() {
    const counter = ref(0);
    const add = () => counter.value++;

    onMounted(() => {
      console.log("onMounted");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      counter,
      add,
    };
  },
};
</script>

<style scoped>
</style>