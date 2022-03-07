<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <h2>计数*2：{{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>
    <button @click="changeData">修改data</button>

    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">scrollX：{{ scrollX }}</div>
      <div class="scroll-y">scrollY：{{ scrollY }}</div>
    </div>

    <div class="mouse">
      <div class="mouse-x">mouseX：{{ mouseX }}</div>
      <div class="mouse-y">mouseY：{{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks/index.js";

export default {
  setup() {
    // counter
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // title
    const titleRef = useTitle("fu huan");
    setTimeout(() => {
      titleRef.value = "浮幻";
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标移动
    const { mouseX, mouseY } = useMousePosition();

    // localStorage
    const data = useLocalStorage("info", { name: "fh", age: 17 });
    const changeData = () => (data.value = "哈哈哈");

    return {
      counter,
      doubleCounter,
      increment,
      decrement,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      data,
      changeData,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 1000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>