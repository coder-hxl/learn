<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const name = ref("浮幻");
    const age = ref(17);

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功~");
      }, 1000);

      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // require.cancel()
        clearTimeout(timer);
        console.log("onInvalidate");
      });

      console.log("name：" + name.value, "age：" + age.value);
    });

    const changeName = () => (name.value = "fu huan");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>