<template>
  <div>
    <my-slot-cpn>
      <button>你好</button>
    </my-slot-cpn>

    <my-slot-cpn> 我是文本 </my-slot-cpn>

    <my-slot-cpn>
      <my-button />
    </my-slot-cpn>

    <my-slot-cpn></my-slot-cpn>

    <!-- 一个插槽可以插入多个内容 -->
    <my-slot-cpn>
      <h2>你好</h2>
      <p>哈哈哈</p>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue'
import MyButton from './MyButton.vue'

export default {
  components: {
    MySlotCpn,
    MyButton
  }
}
</script>

<style scoped></style>
