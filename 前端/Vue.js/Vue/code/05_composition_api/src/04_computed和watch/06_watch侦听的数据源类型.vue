<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <button @click="changeData">按钮</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const info = reactive({ name: '浮幻', age: 17 })

    // 1.侦听watch时，传入一个gatter函数
    watch(
      () => info.name,
      (newValue, oldValue) => {
        console.log('newValue：', newValue, 'oldValue：', oldValue)
      }
    )

    // 2.传入一个可响应式对象：reactive对象/ref对象
    // 情况一：reactive对象获取到的newValue和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    // 		console.log('newValue：', newValue, 'oldValue：', oldValue);
    // })
    // 如果希望拿到的newValue和oldValue是一个普通对象：
    watch(
      () => {
        return { ...info }
      },
      (newValue, oldValue) => {
        console.log('newValue：', newValue, 'oldValue：', oldValue)
      }
    )
    // 情况二：ref对象获取newValue和oldValue是value值本身
    const name = ref('浮幻')
    watch(name, (newValue, oldValue) => {
      console.log('newValue：', newValue, 'oldValue：', oldValue)
    })

    const changeData = () => {
      // info.name = 'fh'
      name.value = 'fh'
    }

    return {
      changeData
    }
  }
}
</script>

<style scoped></style>
