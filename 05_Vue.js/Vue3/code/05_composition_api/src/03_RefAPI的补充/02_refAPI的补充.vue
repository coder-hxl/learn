<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改Info</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from "vue";

export default {
  setup() {
    // 1.shallowRef：创建一个浅层的ref对象；
    const info = shallowRef({ name: "fh" });

    const changeInfo = () => {
      info.value.name = "浮幻";
      // 2.triggerRef：手动触发和 shaowRef 相关的副作用，也就是恢复响应式；
      triggerRef(info);
    };

    return {
      info,
      changeInfo,
    };
  },
};
</script>

<style scoped>
</style>