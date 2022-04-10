<template>
  <div class="app">
    <!-- 
      teleport内置组件：将内容挂载到除#app之外的元素上
      属性：
        - to：指定将其中的内容移动到的目标元素，可以使用选择器；
        - disabled：是否禁用 teleport 的功能；
     -->

    <teleport to="#fh">
      <h2>当前计数：0</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#fh" disabled>
      <span>哈哈哈</span>
    </teleport>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  setup() {
    // setup 导入的getCurrentInstance拿到当前组件实例，通过getCurrentInstance().appContext.config.globalProperties 拿到插件定义的内容
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.$name)
  },
  mounted() {
    // 选项式通过this拿到插件定义的内容
    console.log(this.$name)
  }
}
</script>

<style scoped></style>
