<template>
  <div>
    <h2>Hello World</h2>
    <h2>{{ message }}</h2>
    <button @click="btnClick">获取数字</button>
  </div>
</template>

<script setup>
// 要在 <script setup> 中使用 props 和 emits ，那么就必须使用 defineProps 和 defineEmits API 来声明 props 和 emits
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "你好",
  },
});

const emits = defineEmits(["increment"]);

const btnClick = () => {
  emits("increment", 1000);
};
</script>

<style scoped>
</style>