<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const name = ref('浮幻')
    const age = ref(17)

    const changeName = () => (name.value = 'fu huan')
    const changeAge = () => age.value++

    /* 
				watchEffect：自动收集响应式依赖
					- 首先，watchEffect传入的函数会被立即执行一次，并在执行的过程收集依赖；
					- 其次，只有收集的依赖发送改变时，watchEffect传入的函数才会再次执行；
			 */
    watchEffect(() => {
      console.log('name：' + name.value, 'age：' + age.value)
    })

    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style scoped></style>
