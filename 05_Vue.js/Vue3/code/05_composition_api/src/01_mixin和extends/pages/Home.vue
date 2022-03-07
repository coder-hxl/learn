<template>
  <div>
    <h2>Home</h2>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue";

export default {
  // extendsp：允许声明扩展另外一个组件，类似于Mixins；* 开发中用的非常少 *
  extends: BasePage,
};
</script>

<style scoped>
</style>