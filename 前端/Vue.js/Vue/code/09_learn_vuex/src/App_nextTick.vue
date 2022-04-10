<template>
  <div>
    <h2 class="message" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  setup() {
    const message = ref('')
    const titleRef = ref(null)

    const addMessageContent = () => {
      message.value += '哈哈哈哈'

      // DOM更新之后执行
      // nextTick的回调函数被vue内部用 promise包裹后 放入到队列中的微任务最后
      // 这个微任务队列有vue的 1.wathc（，回调函数）、2.组件的更新、3.生命周期回调 ，而nextTick在最后
      nextTick(() => {
        console.log(titleRef.value.offsetHeight)
      })
    }

    return {
      message,
      titleRef,
      addMessageContent
    }
  }
}
</script>

<style scoped>
.message {
  width: 100px;
}
</style>
