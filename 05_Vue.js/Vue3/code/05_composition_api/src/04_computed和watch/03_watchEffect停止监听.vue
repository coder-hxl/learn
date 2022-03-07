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

    // watchEffect会返回一个函数，调用其会停止监听
    const stop = watchEffect(() => {
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