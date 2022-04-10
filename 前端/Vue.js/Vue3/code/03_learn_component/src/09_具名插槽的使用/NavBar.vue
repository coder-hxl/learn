<template>
  <!-- 给插槽设置name属性就有对应的名字 -->
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="rigin">
      <slot name="rigin"></slot>
    </div>
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 80px;
  line-height: 80px;
}
.left,
.rigin,
.content {
  text-align: center;
}

.left,
.rigin,
.addition {
  width: 100px;
  background-color: aqua;
}

.content {
  flex: 1;
  background-color: blue;
}
</style>
