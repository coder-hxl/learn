<template>
  <div>
    <nav-bar :name="name">
      <!-- v-slot:插槽名 是使用对应的插槽，#是语法糖形式，多个具名插槽必须在template上使用 -->
      <template v-slot:left>
        <button>我是button</button>
      </template>

      <template #content>
        <h2>我是h2</h2>
      </template>

      <template #rigin>
        <i>我是i元素</i>
      </template>

      <!-- 动态插槽名，使用data里的数据要用[] -->
      <template #[name]>
        <i>浮幻de内容</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      name: '浮幻'
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
