<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const title = ref(null)

    watchEffect(
      () => {
        console.log(title.value)
      },
      {
        // 设置执行时机
        // 在DOM元素 挂载 完之后执行
        flush: 'post'
      }
    )

    return {
      title
    }
  }
}
</script>

<style scoped></style>
