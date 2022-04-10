<template>
  <!-- 非props：有多个根节点，继承属性必须绑定一个指定的元素上，否则会报错 -->
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>
  <h2 :id="$attrs.id">MultiRootElement</h2>
</template>

<script>
export default {}
</script>

<style scoped></style>
