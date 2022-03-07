<template>
  <div>
    <h2>Home</h2>
    <h2>{{ message }}</h2>

    <h2>当前计算：{{ counter }}</h2>
    <!-- 也能解包 -->
    <h2>当前计算：{{ info.counter }}</h2>
    <h2>当前计算：{{ reactiveInfo.counter }}</h2>

    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = ref(100);

    const info = {
      counter,
    };

    const reactiveInfo = reactive({
      counter,
    });

    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      info,
      reactiveInfo,
      increment,
    };
  },
};
</script>

<style scoped>
</style>