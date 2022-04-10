<template>
  <div>HomeContent: {{ name }} - {{ age }} - {{ length }}</div>
</template>

<script>
export default {
  // inject 选项只能接收爷父组件传递过来的数据，使用数组定义相对应的名接收
  inject: ['name', 'age', 'length']
}
</script>

<style scoped></style>
